import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { defaultStackOptions } from '../home/HomeStackNavigator';
import MyProfileScreen from './MyProfileScreen';
import {Image, StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity} from "react-native";

const screenWidth = Dimensions.get('window').width
export type ProfileParamList = {
  ROUTE_MY_PROFILE: undefined;
};

export interface User{
  name: string, image : string,
  year : number,
  active: boolean
}




const Profiles = ({navigation}) => {
  const data: User[] = [
    {name:"Lowa Lucinda", image:"https://images.pexels.com/photos/2773671/pexels-photo-2773671.jpeg?auto=compress&cs=tinysrgb&w=600", year: 5, active : true ,},
    { name:"Stephen Rishima", image:"https://images.pexels.com/photos/2553653/pexels-photo-2553653.jpeg?auto=compress&cs=tinysrgb&w=600", year: 5, active : false }
    ,{ name:"Bertha Eira", image:"https://images.pexels.com/photos/3087904/pexels-photo-3087904.jpeg?auto=compress&cs=tinysrgb&w=600", year: 5, active : false }
    ,{ name:"Farah Godiva", image:"https://images.pexels.com/photos/720598/pexels-photo-720598.jpeg?auto=compress&cs=tinysrgb&w=600", year: 5, active : false }
    ,{ name:"Jocasta Martha", image:"https://images.pexels.com/photos/3615455/pexels-photo-3615455.jpeg?auto=compress&cs=tinysrgb&w=600", year: 5, active : false }
    ,{ name:"Rishima Martha", image:"https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&w=600", year: 5, active : false }
  ]
  return <View style={{flex : 1 }}>
    <Text style={{fontWeight: '700', fontSize: 26, color:'#333333', marginVertical: 15}}>140 Photographers</Text>
    <FlatList showsVerticalScrollIndicator={false} numColumns={2} data={data} renderItem={({item}) => {
      return (<TouchableOpacity onPress={() => navigation.navigate("DETAILS", {data: item})} style={[styles.card, {backgroundColor: item.active ? '#f4c4fb' : '#ffffff'}]}>
        <Image style={{borderWidth: 2, borderColor:'#333333',borderRadius: 30,width: (screenWidth - 62)/2, height: 250, resizeMode:'cover'}} source={{uri : item.image}} />
        <Text style={{alignSelf: 'center', marginVertical: 15, fontWeight: '700', fontSize: 20 , color:'#333333'}}>{item.name}</Text>
        <Text style={{alignSelf: 'center', fontSize: 16, fontWeight: '500', marginBottom: 10}}>{item.year} year of experience</Text>
      </TouchableOpacity>)
    }} />
  </View>;
};

const styles = StyleSheet.create({
  card:{
    padding: 15,
    borderWidth: 1,
    borderColor: "#333333",
  },
})

export default Profiles;
