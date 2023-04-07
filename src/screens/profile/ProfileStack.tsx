import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { defaultStackOptions } from '../home/HomeStackNavigator';
import MyProfileScreen from './MyProfileScreen';
import CreatePost from "../create/createPost";

export type ProfileParamList = {
  ROUTE_MY_PROFILE: undefined;
};

const Stack = createStackNavigator<ProfileParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackOptions}>
      <Stack.Screen
        name={'ROUTE_MY_PROFILE'}
        component={CreatePost}
        options={{ headerShown: false, headerTitle: 'Create new post' }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
