import React, { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { useAppDispatch } from '../../store';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthenticationServices } from '../../services';
import { setUserData } from '../../store/auth/authActions';
import { show } from '../../components/GlobalMessage';
import { EMessageTypes } from '../../components/GlobalMessage/typeAndInterface';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { GuestNavigatorParamsList } from '../../navigation/GuestNavigation';
import { IUser } from '../../models/authModels';

type BookScreenRouteProp = RouteProp<GuestNavigatorParamsList, 'ROUTE_LOGIN'>;
type BookScreenNavigationProp = StackNavigationProp<GuestNavigatorParamsList, 'ROUTE_LOGIN'>;

interface Props {
  navigation: BookScreenNavigationProp;
  route: BookScreenRouteProp;
}

export const USER_DEFAULT_DATA: IUser = {
  address: '',
  cartId: '',
  id: '',
  dateOfBirth: '',
  name: '',
  orders: [],
  phoneNumber: '',
  token: 'fake token',
  username: '',
};

const LoginScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState('mducnguyen11');
  const [password, setPassword] = useState('123');

  const dispatch = useAppDispatch();

  const onLogin = useCallback(async () => {
    const res = await AuthenticationServices.loginApi({ username: username, password: password });

    if (res.data) {
      show('Login successfully', EMessageTypes.success);
      setTimeout(() => {
        dispatch(setUserData(USER_DEFAULT_DATA));
      }, 200);
    } else {
      show('Login fail', EMessageTypes.failed);
      setTimeout(() => {
        dispatch(setUserData(USER_DEFAULT_DATA));
      }, 200);
    }
  }, [username, password, dispatch]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder='User name'
        value={username}
        onChangeText={setUsername}
        autoCapitalize='none'
        keyboardType='email-address'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
            navigation.navigate('ROUTE_REGISTER');
          }}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: { flexDirection: 'row' },
  heading: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 4,
  },
  registerButton: {
    backgroundColor: 'orange',
    padding: 12,
    borderRadius: 4,
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default LoginScreen;
