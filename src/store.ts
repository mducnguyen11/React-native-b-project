// configureStore.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AnyAction, applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistState } from 'redux-persist/es/types';
import thunk, { ThunkDispatch } from 'redux-thunk';
import authReducer from './store/auth/authReducer';
import { AuthState } from './store/auth/authTypes';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

export interface RootState {
  auth: AuthState;
  _persist?: PersistState;
}

const rootReducer = combineReducers({
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = compose(applyMiddleware(...middleware))(createStore)(persistedReducer);

export default store;
export const persistor = persistStore(store);

// A correctly-typed wrapper for Redux hooks.
type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
