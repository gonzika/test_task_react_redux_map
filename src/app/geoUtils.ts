type Point = [number, number]
type Marker = {
    weight: number,
    center: Point,
    fillColor: string
}

export function createGeoJsonToPolygon(data: string) {
    let string = data.split('POLYGON ')[1].replace(/(\()|(\))/g, '')
    const geoData = []
    string.split(', ').forEach(point => {
        let pointArray = point.split(' ')
        geoData.push([pointArray[1], pointArray[0]])
    })
    return geoData
}

export function getCenter(polylines: Array<Point>) {
    return polylines.reduce(function (x, y) {
        return [x[0] + y[0] / polylines.length, x[1] + y[1] / polylines.length]
    }, [0, 0])
}


export function getBoundsFromTopLeftRightBotton(box) {
    return [
        [box.top, box.left],
        [box.top, box.right],
        [box.bottom, box.right],
        [box.bottom, box.left]
    ]
}

export function getMarkersForScatterplot(geoData) {

    const height = Math.abs(geoData.coordinates_bounding_box.top - geoData.coordinates_bounding_box.bottom)
    const height_step = height / geoData.data.length

    const markers: Array<Marker> = []
    const colors = {}

    geoData.data.forEach((line, y) => {
        const lat = geoData.coordinates_bounding_box.top - height_step * y
        const width = Math.abs(geoData.coordinates_bounding_box.left - geoData.coordinates_bounding_box.right)
        const width_step = width / line.length

        line.forEach((weight, x) => {
            if (!weight) return
            const lng = geoData.coordinates_bounding_box.left + width_step * x

            colors[weight] = null

            markers.push({
                weight: weight,
                center: [lat, lng],
                fillColor: ''
            })
        });
    });

    const brightness = 170
    const colors_step = brightness / Object.keys(colors).length
    Object.keys(colors).forEach((key, i) => {
        colors[key] = `rgb(${brightness} 0 ${Math.round(brightness - i * colors_step)})`
    })

    markers.forEach(marker => marker.fillColor = colors[marker.weight])
    return markers
}