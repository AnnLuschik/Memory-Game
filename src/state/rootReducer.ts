import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './login';
import { gameReducer } from './game';

export const rootReducer = combineReducers({
  login: loginReducer,
  game: gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
