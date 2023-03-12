import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../store';
import { logOut } from '../../store/auth/authActions';
import { ProfileParamList } from './ProfileStack';

type MyProfileScreenNavigationProp = StackNavigationProp<ProfileParamList, 'ROUTE_MY_PROFILE'>;

interface Props {
  navigation: MyProfileScreenNavigationProp;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MyProfileScreen = (props: Props) => {
  const myProfileData = useAppSelector((state) => state.auth.userData);
  const dispath = useAppDispatch();
  if (!myProfileData) return null;

  const { name, username, dateOfBirth, phoneNumber, address } = myProfileData;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Your profile : </Text>
      <Text style={styles.titleLabel}>Name : </Text>
      <Text style={styles.label}>{name}</Text>
      <Text style={styles.titleLabel}>Username : </Text>
      <Text style={styles.label}>{username}</Text>
      <Text style={styles.titleLabel}>Date of Birth : </Text>
      <Text style={styles.label}>{new Date(dateOfBirth).toDateString()}</Text>
      <Text style={styles.titleLabel}>Phone Number : </Text>
      <Text style={styles.label}>{phoneNumber}</Text>
      <Text style={styles.titleLabel}>Address : </Text>
      <Text style={styles.label}>{address}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={() => {
            dispath(logOut());
          }}>
          <Text style={styles.allOrderBtnText}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  titleLabel: {
    fontSize: 15,
    color: '#4CAF50',
    fontFamily: 'Roboto-Bold',
  },
  sectionTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    marginBottom: 5,
  },
  orders: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '100%',
    justifyContent: 'space-between',
  },
  allOrderBtn: {
    backgroundColor: '#4CAF50',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    alignSelf: 'flex-start',
    marginHorizontal: 5,
  },
  logoutBtn: {
    backgroundColor: 'orange',
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    alignSelf: 'flex-start',
    marginHorizontal: 5,
  },
  allOrderBtnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MyProfileScreen;
