// @ts-nocheck
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import {ROUTE_HOMEPAGE, ROUTE_HOMEPAGE_SECOND_SCREEN, ROUTE_PROFILE_NAVIGATOR} from '../../navigation/Routes';
import {View, ImageBackground, TouchableOpacity, Text} from "react-native";

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


const HelloSlide = ({ navigation }) => {
  return <ImageBackground style={{flex : 1, justifyContent: 'flex-end'}} source={{uri : "https://gabriellearruda.com/wp-content/uploads/2021/01/lightacademiafashionstyle.jpg"}}>

    <TouchableOpacity
      onPress={() => {navigation.navigate(ROUTE_PROFILE_NAVIGATOR)}}
      style={{ borderWidth: 1 , borderColor: '#333333', marginBottom: 70 ,paddingHorizontal: 80, backgroundColor: '#fdbf1a', alignSelf: 'center', height: 44, borderRadius: 22, justifyContent: 'center'}}>
      <Text style={{fontWeight: '500', fontSize: 18}} >Let's Go</Text>
    </TouchableOpacity>
  </ImageBackground>;
};

export default HelloSlide;
