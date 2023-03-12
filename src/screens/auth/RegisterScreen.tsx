import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { show } from '../../components/GlobalMessage';
import { EMessageTypes } from '../../components/GlobalMessage/typeAndInterface';
import AuthenticationServices, { IUserRegisterParams } from '../../services/authentication.services';
import { useAppDispatch } from '../../store';
import { setUserData } from '../../store/auth/authActions';

const RegisterScreen = () => {
  const [user, setUser] = useState<IUserRegisterParams>({
    name: 'Random Name 1',
    username: 'mducnguyen12',
    phoneNumber: '092049045',
    dateOfBirth: '23/06/2007',
    address: 'So 3 Cau Giay HN',
    password: '123', // Khởi tạo trường password
  });

  const dispatch = useAppDispatch();

  const handleRegister = async () => {
    const res = await AuthenticationServices.registerApi(user);
    if (res.data) {
      console.log(res.data);
      show('Register successfully', EMessageTypes.success);
      setTimeout(() => {
        dispatch(setUserData(res.data ?? null));
      }, 500);
    } else {
      console.log('res : ', res);
      show('Register fail', EMessageTypes.failed);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Đăng ký tài khoản</Text>
      <TextInput
        style={styles.input}
        placeholder='Họ và tên'
        onChangeText={(name) => setUser({ ...user, name })}
        value={user.name}
      />
      <TextInput
        style={styles.input}
        placeholder='Tên đăng nhập'
        onChangeText={(username) => setUser({ ...user, username })}
        value={user.username}
      />
      <TextInput
        style={styles.input}
        placeholder='Số điện thoại'
        onChangeText={(phoneNumber) => setUser({ ...user, phoneNumber })}
        value={user.phoneNumber}
      />
      <TextInput
        style={styles.input}
        placeholder='Ngày sinh'
        onChangeText={(dateOfBirth) => setUser({ ...user, dateOfBirth })}
        value={user.dateOfBirth}
      />
      <TextInput
        style={styles.input}
        placeholder='Địa chỉ'
        onChangeText={(address) => setUser({ ...user, address })}
        value={user.address}
      />
      <TextInput
        style={styles.input}
        placeholder='Mật khẩu'
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
        value={user.password}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    width: '80%',
  },
  button: {
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 4,
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
