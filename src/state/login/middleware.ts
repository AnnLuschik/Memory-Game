import { Middleware } from 'redux';
import type { RootState } from '../store';
import {
  LOGIN_REQUEST, loginSuccess, loginFailure, BOOTSTRAP_START, bootstrapFinish, LOGOUT,
} from './actions';

export const loginMiddleware:Middleware<
unknown,
RootState
> = (store) => (next) => (action) => {
  if (action.type === LOGIN_REQUEST) {
    try {
      localStorage.setItem('isAuth', action.payload);
      store.dispatch(loginSuccess());
    } catch {
      store.dispatch(loginFailure());
    }
  }
  next(action);
};

export const bootstrapMiddleware:Middleware<
unknown,
RootState
> = (store) => (next) => (action) => {
  if (action.type === BOOTSTRAP_START) {
    const isAuth = localStorage.getItem('isAuth');

    if (isAuth) {
      store.dispatch(loginSuccess());
    } else {
      store.dispatch(loginFailure());
    }

    store.dispatch(bootstrapFinish());
  }
  next(action);
};

export const logoutMiddleware:Middleware<
unknown,
RootState
> = () => (next) => (action) => {
  if (action.type === LOGOUT) {
    localStorage.removeItem('isAuth');
  }
  next(action);
};
