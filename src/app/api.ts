import axios from 'axios'
import { BASE_URL, API_URLS } from './apiUrls'


const Api = {
    async getSessionKey({ username, password }) {
        const res = await axios.post(BASE_URL + API_URLS.login,
            { username, password }
        ).then(
            (data) => data
        )

        return res.data
    }
}

export default Api