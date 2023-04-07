import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, FlatList, ScrollView } from 'react-native';
import { ROUTE_HOMEPAGE_SECOND_SCREEN } from '../../navigation/Routes';
import { HomeParamList } from './HomeStackNavigator';
import searchIc from '../../assets/icons/search-interface-symbol.png';
import Button from './Button';
import { Dimensions } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Post from './Post';

type HomePageRouteProp = RouteProp<HomeParamList, 'ROUTE_HOMEPAGE'>;
type HomePageNavigationProp = StackNavigationProp<HomeParamList, 'ROUTE_HOMEPAGE'>;

interface Props {
  navigation: HomePageNavigationProp;
  route: HomePageRouteProp;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// const data = [
//   "https://images.pexels.com/photos/927497/pexels-photo-927497.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/1068554/pexels-photo-1068554.jpeg?auto=compress&cs=tinysrgb&w=600",
//   "https://images.pexels.com/photos/2578370/pexels-photo-2578370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408",
//   "https://images.pexels.com/photos/3973557/pexels-photo-3973557.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2",
//   "https://images.pexels.com/photos/1904354/pexels-photo-1904354.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2",
//   "https://media.istockphoto.com/id/1170804921/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-r%C3%B9a-v%E1%BB%9Bi-tr%C6%B0%E1%BB%9Dng-c%C3%A1.jpg?b=1&s=612x612&w=0&k=20&c=KJdt2nxHUjVjZ0BGp3MAdEVNnlAlfhWBpLVImaZXznw="
// ]

const data = [
  {
    title: 'The lizard is staring at something',
    image: 'https://images.pexels.com/photos/927497/pexels-photo-927497.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: '2 pandas accidentally got lost in my garden',
    image:
      'https://c1danghaihp.edu.vn/wp-content/uploads/2022/12/1671646095_410_Hinh-anh-Gau-Truc-cute-de-thuong-dep-nhat.jpg',
  },
  {
    title: 'I just took a picture of this creature, is it a dragon?',
    image:
      'https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8xMDQ1NjEzMy9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcyNTczMjIwNX0.hf9VoE2E76CzGVDBxfrmRxMUxX_vvTHIiIUk-_LuRuU/img.jpg?width=400&height=209',
  },
  {
    title: 'I feel sad every time it rains',
    image: 'https://danviet.mediacdn.vn/thumb_w/650/296231569849192448/2023/1/24/base64-16745651304841054353937.png',
  },
];

const HomepageScreen: FC<Props> = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.headerContainer}>
        <TextInput placeholder={'Search here ...'} style={styles.headerInput} />
        <View style={styles.searchBtn}>
          <Image style={{ tintColor: '#ffffff' }} source={searchIc} />
        </View>
      </View>
      <View style={styles.buttons}>
        <Button />
        <Button isActive={true} title={'New'} />
        <Button title={'Top'} />
      </View>
      {data.map((item, index) => (
        <Post key={index} title={item.title} image={item.image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    marginVertical: 10,
    marginLeft: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#DDDDDD',
    padding: 12,
    paddingVertical: 16,
  },
  headerInput: {
    height: 44,
    flexGrow: 1,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 22,
    paddingHorizontal: 20,
  },
  searchBtn: {
    height: 44,
    width: 44,
    borderRadius: 22,
    backgroundColor: '#FD5B32',
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 16,
    paddingHorizontal: 12,
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  image: {
    width: windowWidth / 2 - 10,
  },
});

export default HomepageScreen;
