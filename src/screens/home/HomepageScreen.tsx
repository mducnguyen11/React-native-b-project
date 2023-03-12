import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ROUTE_HOMEPAGE_SECOND_SCREEN } from '../../navigation/Routes';
import { HomeParamList } from './HomeStackNavigator';

type HomePageRouteProp = RouteProp<HomeParamList, 'ROUTE_HOMEPAGE'>;
type HomePageNavigationProp = StackNavigationProp<HomeParamList, 'ROUTE_HOMEPAGE'>;

interface Props {
  navigation: HomePageNavigationProp;
  route: HomePageRouteProp;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomepageScreen: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>NEF Store</Text>
      <TouchableOpacity onPress={() => navigation.navigate(ROUTE_HOMEPAGE_SECOND_SCREEN)}>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 10,
  },
});

export default HomepageScreen;
