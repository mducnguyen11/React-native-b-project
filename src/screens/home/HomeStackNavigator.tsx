import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { ROUTE_HOMEPAGE, ROUTE_HOMEPAGE_SECOND_SCREEN } from '../../navigation/Routes';
import {View, ImageBackground } from "react-native";

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

const HelloSlide = () => {
  return <View></View>;
};

export default HelloSlide;
