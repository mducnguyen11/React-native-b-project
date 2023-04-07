import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import homeIcon from '../../src/assets/icons/home.png';
import {ROUTE_CREATE_NAVIGATOR, ROUTE_HOME_NAVIGATOR} from "./Routes";
import addIcon from '../../src/assets/icons/add.png';
import saveIcon from '../../src/assets/icons/save-instagram.png';

const BoottomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name.split('_')[0];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const whichIcon = () => {
          if(route.name == ROUTE_HOME_NAVIGATOR){
            return <Image source={homeIcon} />
          }
          if(route.name == ROUTE_CREATE_NAVIGATOR){
            return <Image source={addIcon} />
          }
          return <Image source={saveIcon} />
        }

        return (
          <TouchableOpacity key={route.key} onPress={onPress} onLongPress={onLongPress} style={styles.tabItem}>
            {whichIcon()}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BoottomTabBar;
