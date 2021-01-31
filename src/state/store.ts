import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { loginMiddleware, bootstrapMiddleware, logoutMiddleware } from './login';
import { gameMiddleware } from './game';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [loginMiddleware, bootstrapMiddleware, logoutMiddleware, gameMiddleware],
});
