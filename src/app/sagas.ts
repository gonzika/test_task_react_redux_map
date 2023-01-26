import { put, takeEvery, all, call, takeLatest } from 'redux-saga/effects'
import Api from './api';
import { set_error, set_geoData, set_loading, set_sessionKey } from './globalStateSlice';


function* fetchData({ apiCall, setFunc }, { payload }) {
    try {
        yield put(set_loading(true))
        const data = yield call(apiCall, payload)
        yield put(setFunc(data))
    } catch (error) {
        yield put(set_error(error.message))
    } finally {
        yield put(set_loading(false))
    }
}


function* watch_fetchSessionToken() {
    yield takeEvery('FETCH_SESSION_TOKEN', fetchData, { apiCall: Api.getSessionKey, setFunc: set_sessionKey })
}


function* watch_fetchGeoData() {
    yield takeLatest('FETCH_GEO_DATA', fetchData, { apiCall: Api.getGeoData, setFunc: set_geoData })
}

export default function* rootSaga() {
    yield all([
        watch_fetchSessionToken(),
        watch_fetchGeoData()
    ])
}
