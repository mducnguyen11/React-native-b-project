import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../screens/home/HomeStackNavigator';
import BoottomTabBar from './BoottomTabBar';
import ProfileStack from '../screens/profile/ProfileStack';
import { ROUTE_HOME_NAVIGATOR, ROUTE_PROFILE_NAVIGATOR } from './Routes';

export type AppNavigatorParamsList = {
  [ROUTE_HOME_NAVIGATOR]: undefined;
  [ROUTE_PROFILE_NAVIGATOR]: undefined;
};

const Tab = createBottomTabNavigator<AppNavigatorParamsList>();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTE_HOME_NAVIGATOR}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => <BoottomTabBar {...props} />}>
      <Tab.Screen name={ROUTE_HOME_NAVIGATOR} component={HomeStack} />
      <Tab.Screen name={ROUTE_PROFILE_NAVIGATOR} component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
