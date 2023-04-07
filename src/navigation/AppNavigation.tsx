import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home/HomeStackNavigator';
import BoottomTabBar from './BoottomTabBar';
import ProfileStack, {User} from '../screens/profile/ProfileStack';
import {DETAILS, ROUTE_HOME_NAVIGATOR, ROUTE_PROFILE_NAVIGATOR} from './Routes';
import {createStackNavigator} from "@react-navigation/stack";
import HelloSlide from "../screens/home/HomeStackNavigator";
import Details from "../screens/home/Details";

export type AppNavigatorParamsList = {
  [ROUTE_HOME_NAVIGATOR]: undefined;
  [ROUTE_PROFILE_NAVIGATOR]: undefined;
  [DETAILS] : {data : User}
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
      <Tab.Screen name={DETAILS} component={Details} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
