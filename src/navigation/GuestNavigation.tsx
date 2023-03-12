import React from 'react';
import { ROUTE_LOGIN, ROUTE_REGISTER } from './Routes';
import RegisterScreen from '../screens/auth/RegisterScreen';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen';

export type GuestNavigatorParamsList = {
  [ROUTE_LOGIN]: undefined;
  [ROUTE_REGISTER]: undefined;
};

const Tab = createStackNavigator<GuestNavigatorParamsList>();

const GuestNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTE_LOGIN}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Tab.Screen name={ROUTE_LOGIN} component={LoginScreen} />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitle: '',
        }}
        name={ROUTE_REGISTER}
        component={RegisterScreen}
      />
    </Tab.Navigator>
  );
};

export default GuestNavigation;
