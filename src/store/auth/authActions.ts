import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IUser } from '../../models/authModels';
import { RootState } from '../../store';
import { LogOutAction, LOG_OUT, SetUserDataAction, SET_USER_DATA } from './authTypes';

export const setUserData =
  (user: IUser | null): ThunkAction<void, RootState, unknown, AnyAction> =>
  (dispatch) => {
    dispatch({
      type: SET_USER_DATA,
      payload: {
        data: user,
      },
    } as SetUserDataAction);
  };

export const logOut = (): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch) => {
  dispatch({
    type: LOG_OUT,
  } as LogOutAction);
};
