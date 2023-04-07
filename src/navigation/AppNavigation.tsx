import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home/HomeStackNavigator';
import BoottomTabBar from './BoottomTabBar';
import ProfileStack from '../screens/profile/ProfileStack';
import { ROUTE_HOME_NAVIGATOR, ROUTE_PROFILE_NAVIGATOR } from './Routes';
import {createStackNavigator} from "@react-navigation/stack";
import HelloSlide from "../screens/home/HomeStackNavigator";

export type AppNavigatorParamsList = {
  [ROUTE_HOME_NAVIGATOR]: undefined;
  [ROUTE_PROFILE_NAVIGATOR]: undefined;
};

const Tab = createStackNavigator<AppNavigatorParamsList>();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTE_HOME_NAVIGATOR}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={ROUTE_HOME_NAVIGATOR} component={HelloSlide} />
      <Tab.Screen name={ROUTE_PROFILE_NAVIGATOR} component={ProfileStack} />
      <Tab.Screen name={ROUTE_HOME_NAVIGATOR} component={HomeStack} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
