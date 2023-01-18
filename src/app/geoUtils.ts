type Point = [number, number]


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