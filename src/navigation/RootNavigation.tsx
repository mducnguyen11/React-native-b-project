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

  return (
    <NavigationContainer ref={navigationRef}>
      <ModalStack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <ModalStack.Screen name={ROUTE_APP_NAVIGATOR} component={AppNavigation} />
      </ModalStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
