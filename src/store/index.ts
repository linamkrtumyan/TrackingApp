import {transportsAPI} from '../services/TransportService';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [transportsAPI.reducerPath]: transportsAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(transportsAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
