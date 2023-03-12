import { IUser } from '../../models/authModels';
export const SET_USER_DATA = 'SET_USER_DATA';
export const LOG_OUT = 'LOG_OUT';

export interface AuthState {
  userData: IUser | null;
}

export interface SetUserDataAction {
  type: typeof SET_USER_DATA;
  payload: {
    data: IUser | null;
  };
}

export interface LogOutAction {
  type: typeof LOG_OUT;
}

export type AuthActions = SetUserDataAction | LogOutAction;
