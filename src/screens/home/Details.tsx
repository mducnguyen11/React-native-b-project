import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {User} from "../profile/ProfileStack";
import back from  '../../assets/icons/back.png';
import heart from '../../assets/icons/heart.png'

const screenWidth = Dimensions.get('window').width
const Details = ({route, navigation}) => {

  const data : User = route.params.data

  return <View style={{flex : 1}}>
      <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{margin: 10}}>
          <Image style={{width: 20, height: 20}} source={back}/></TouchableOpacity>
        <Image style={{width: 20, height: 20, marginHorizontal: 10}} source={heart}/>
      </View>
      <Text style={{fontWeight: '700', fontSize: 20, color:'#333333', marginVertical: 15, marginHorizontal: 15}}>{data.name}</Text>
    <View style={{borderBottomWidth: 1, borderColor:'#333333'}}/>
    <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
        <Text style={{marginLeft: 15,fontWeight: '500', fontSize: 20, color:'#333333', marginVertical: 10}}>About</Text>
        <Image style={{width: 20, height: 20, marginHorizontal: 10,transform: [{ rotate: '180deg'}] }} source={back}/>
    </View>
    <View style={{borderBottomWidth: 1, borderColor:'#333333'}}/>
    <View style={{borderBottomWidth: 0, borderTopWidth: 0 , borderColor: '#333333', alignItems: 'center'}}>
      <Image style={{width: screenWidth - 20, height: 250, marginVertical: 15}} source={{uri : data.image}} />
      <Text style={{fontWeight: '500', marginHorizontal: 15, textAlign: 'left', marginBottom: 20}}> Life is like riding a bicycle. To keep your balance, you must keep moving.</Text>
    </View>
    <View style={{borderBottomWidth: 1, borderColor:'#333333'}}/>
    <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
      <Text style={{marginLeft: 15,fontWeight: '500', fontSize: 20, color:'#333333', marginVertical: 10}}>Contact</Text>
      <Image style={{width: 20, height: 20, marginHorizontal: 10,transform: [{ rotate: '180deg'}] }} source={back}/>
    </View>
    <View style={{borderBottomWidth: 1, borderColor:'#333333'}}/>
    <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}}>
      <Text style={{marginLeft: 15,fontWeight: '500', fontSize: 20, color:'#333333', marginVertical: 10}}>Works</Text>
      <Image style={{width: 20, height: 20, marginHorizontal: 10,transform: [{ rotate: '180deg'}] }} source={back}/>
    </View>
    <View style={{borderBottomWidth: 1, borderColor:'#333333'}}/>
  </View>
}

export  default Details