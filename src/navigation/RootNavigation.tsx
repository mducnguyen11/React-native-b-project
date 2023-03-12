import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';

import AppNavigation from './AppNavigation';
import { navigationRef } from '../helper/GlobalNavigation';

import { ROUTE_APP_NAVIGATOR, ROUTE_GUEST_NAVIGATOR } from './Routes';
import useAuth from '../hooks/useAuth';
import GuestNavigation from './GuestNavigation';

export type ModalNavigatorParamList = {
  [ROUTE_APP_NAVIGATOR]: undefined;
  [ROUTE_GUEST_NAVIGATOR]: undefined;
};

const ModalStack = createStackNavigator<ModalNavigatorParamList>();

const RootNavigation = () => {
  const { token } = useAuth();

  useEffect(() => {
    if (!token) {
      navigationRef.current?.reset({
        index: 0,
        routes: [{ name: ROUTE_GUEST_NAVIGATOR }],
      });
    } else {
      navigationRef.current?.reset({
        index: 0,
        routes: [{ name: ROUTE_APP_NAVIGATOR }],
      });
    }
  }, [token]);

  return (
    <NavigationContainer ref={navigationRef}>
      <ModalStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <ModalStack.Screen name={ROUTE_APP_NAVIGATOR} component={AppNavigation} />
        <ModalStack.Screen name={ROUTE_GUEST_NAVIGATOR} component={GuestNavigation} />
      </ModalStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
