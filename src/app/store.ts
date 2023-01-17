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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch