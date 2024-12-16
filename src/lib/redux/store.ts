import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import Api from './api/api';
import { rtkQueryErrorLogger } from './middlewares/redux-error-handler.middleware';

// Combine reducers
const rootReducer = combineReducers({
  [Api.reducerPath]: Api.reducer,
});

// Configure the store
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      rtkQueryErrorLogger,
      Api.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
