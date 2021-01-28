export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const BOOTSTRAP_START = 'BOOTSTRAP_START';
export const BOOTSTRAP_FINISH = 'BOOTSTRAP_FINISH';

export const LOGOUT = 'LOGOUT';

export interface LoginParams {
  name: string
  surname?: string
  mail?: string
}

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST
  payload: string
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE
}

interface BootstrapAction {
  type: typeof BOOTSTRAP_START | typeof BOOTSTRAP_FINISH
}

interface LogoutAction {
  type: typeof LOGOUT
}

export type AuthorizationActionTypes = LoginRequestAction
| LoginSuccessAction
| LoginFailureAction
| BootstrapAction
| LogoutAction;

export const loginRequest = (data: string): LoginRequestAction => ({
  type: LOGIN_REQUEST,
  payload: data,
});

export const loginSuccess = ():LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = ():LoginFailureAction => ({
  type: LOGIN_FAILURE,
});

export const bootstrapStart = ():BootstrapAction => ({
  type: BOOTSTRAP_START,
});

export const bootstrapFinish = ():BootstrapAction => ({
  type: BOOTSTRAP_FINISH,
});

export const logout = ():LogoutAction => ({
  type: LOGOUT,
});
