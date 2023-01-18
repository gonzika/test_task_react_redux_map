import axios from 'axios'
import { BASE_URL, API_URLS } from './apiUrls'
import { GEO_TYPE_POLYGON } from './constants'
import { createGeoJsonToPolygon, getCenter } from './geoUtils'


const Api = {
    async getSessionKey({ username, password }) {
        const res = await axios.post(BASE_URL + API_URLS.login,
            { username, password }
        ).then(
            (data) => data
        )

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

        return geoData
    },

}

export default Api