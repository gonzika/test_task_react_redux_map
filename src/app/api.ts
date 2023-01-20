import axios from 'axios'
import { BASE_URL, API_URLS } from './apiUrls'
import { GEO_TYPE_POLYGON, GEO_TYPE_SCATTERPLOT } from './constants'
import { createGeoJsonToPolygon, getMarkersForScatterplot, getBoundsFromTopLeftRightBotton, getCenter } from './geoUtils'


const Api = {
    async getSessionKey({ username, password }) {
        if (!username || !password) throw new Error('No username or password')

        const res = await axios.post(BASE_URL + API_URLS.login,
            { username, password }
        ).then(
            (data) => data
        ).catch(error => {
            throw new Error(error)
        })

        return res.data
    },

    async getGeoData({ sessionKey, urlPath, type }) {
        const res = await axios.get(BASE_URL + urlPath, {
            headers: {
                'Authorization': 'Token ' + sessionKey
            }
        }
        ).then(
            (data) => data
        )

        const geoData = res.data
        geoData.type = type

        if (geoData.type === GEO_TYPE_POLYGON) {
            geoData.geoJson = createGeoJsonToPolygon(geoData.extent)
            geoData.center = getCenter(geoData.geoJson)
        }
        else if (geoData.type === GEO_TYPE_SCATTERPLOT) {
            geoData.bounds = getBoundsFromTopLeftRightBotton(geoData.coordinates_bounding_box)
            geoData.center = getCenter(geoData.bounds)
            geoData.geoJson = getMarkersForScatterplot(geoData)
        }

        return geoData
    },

}

export default Api