import React from 'react'
import { View, Text,ImageBackground,TouchableOpacity  } from 'react-native'
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import {width} from '../../Constants/Layout'
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux'

export default function Header({modalVisible,setModalVisible,address}) {
  const navigation = useNavigation();
  const cart = useSelector(state=>state.cart_store.cart)
console.log(address)
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');


    return (
      <Appbar.Header style={{backgroundColor:'#DAA520'}}>
     
     <View style={{justifyContent:'space-between',flexDirection:'row',flex:1}}>
      <View>
      <TouchableOpacity style={{flex:1,flexDirection:'row',alignItems:'center'}} onPress={() =>setModalVisible(!modalVisible)}>      
            <Feather name="map-pin" size={20} color="white"  />
            <Text style={{color:"white",fontWeight:'bold',paddingLeft:5,fontSize:10}}>{address?address:""}</Text>
            </TouchableOpacity>
      </View>
      <View style={{}}>
      <Appbar.Action icon="cart" color='white' onPress={()=>navigation.navigate('Cart')} />
      <Text style={{marginTop:-40,marginLeft:30,backgroundColor:"red",borderRadius:90,textAlign:'center',color:'white',}}>{cart.length}</Text>
      </View>
       
       
     </View>
      

     
     
    </Appbar.Header>
       
    )
}
