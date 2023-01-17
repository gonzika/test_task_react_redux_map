import { put, takeEvery, all, call } from 'redux-saga/effects'
import Api from './api';
import { set_error, set_loading, set_sessionKey } from './globalStateSlice';


function* fetchSessionToken({ payload }) {
    try {
        yield put(set_loading(true))
        const key = yield call(Api.getSessionKey, payload)
        yield put(set_sessionKey(key))
        yield put(set_loading(false))
    } catch (error) {
        yield put(set_loading(false))
        yield put(set_error(error.message))
    }
}

function* watch_fetchSessionToken() {
    yield takeEvery('FETCH_SESSION_TOKEN', fetchSessionToken)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watch_fetchSessionToken()
    ])
}