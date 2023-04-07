import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { ROUTE_HOMEPAGE, ROUTE_HOMEPAGE_SECOND_SCREEN } from '../../navigation/Routes';
import HomepageScreen from './HomepageScreen';
import HomepageSecondScreen from './HomepageSecondScreen';

export type HomeParamList = {
  [ROUTE_HOMEPAGE]: undefined;
  [ROUTE_HOMEPAGE_SECOND_SCREEN]: undefined;
};

const Stack = createStackNavigator<HomeParamList>();

export const defaultStackOptions: StackNavigationOptions = {
  headerTintColor: '#000',
  headerBackTitleVisible: false,
  headerLeft: undefined,
  cardShadowEnabled: false,
  headerShown: false,
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: '800',
    color: 'black',
  },
  headerStyle: {
    backgroundColor: '#FFF',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerTitleAlign: 'center',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTE_HOMEPAGE} screenOptions={defaultStackOptions}>
      <Stack.Screen name={ROUTE_HOMEPAGE} component={HomepageScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
