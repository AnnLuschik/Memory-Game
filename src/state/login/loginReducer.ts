import {
  LOGIN_SUCCESS, LOGIN_FAILURE, AuthorizationActionTypes,
  BOOTSTRAP_FINISH, LOGOUT,
} from './actions';

interface LoginState {
  isAuth: boolean
  bootstrapped: boolean
}

const initialState: LoginState = {
  isAuth: false,
  bootstrapped: false,
};

export function loginReducer(state = initialState, action: AuthorizationActionTypes) {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuth: true,
      };
    }

    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
      };
    }

    case BOOTSTRAP_FINISH: {
      return {
        ...state,
        bootstrapped: true,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isAuth: false,
      };
    }

    default: return state;
  }
}
