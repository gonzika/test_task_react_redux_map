import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './globalStateSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(SagaMiddleware);
  },
})

SagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch