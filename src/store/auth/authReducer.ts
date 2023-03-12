import { AnyAction } from 'redux';
import { AuthActions, AuthState, LOG_OUT, SetUserDataAction, SET_USER_DATA } from './authTypes';

const initialState: AuthState = {
  userData: null,
};

export default function authReducer(state = initialState, action: AuthActions | AnyAction): AuthState {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        userData: (action as SetUserDataAction).payload.data,
      };
    }

    case LOG_OUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}
