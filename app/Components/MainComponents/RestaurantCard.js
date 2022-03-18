import React from 'react'
import { View, Text,Image, TouchableOpacity,TouchableHighlight,Pressable  } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
export default function RestaurantCard({props}) {
 
  const {restaurantname,address2} = props
  console.log(address2)
  const navigation = useNavigation();
    return (
      <TouchableOpacity  onPress={()=>navigation.navigate('Restaurant',{restaurantdata:props})} activeOpacity={0.7}
      underlayColor="#DDDDDD"
    > 
        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',backgroundColor:'#f7f7f3',padding:10,borderRadius:20,marginTop:10}} >
          <View >
          <Image  style={{height:100,width:100,borderRadius:15,borderColor:'white',borderWidth:1,alignSelf:'center'}} source={{uri:"https://cdn.pixabay.com/photo/2021/01/22/19/48/grilled-5940974_960_720.jpg"}}/>
         <View style={{height:20,backgroundColor:'white',marginTop:-21,width:100,borderRadius:3,borderWidth:1,borderColor:'#DAA520'}}>
        <Text style={{fontWeight:'bold',fontSize:12,textAlign:'center'}}>50% Off</Text>
        </View>
         </View>
          <View style={{flex:1,justifyContent:'flex-start',marginLeft:40}}>
        <View style={{flex:1,justifyContent:'space-between'}}>
        <Text style={{fontSize:15}}>{restaurantname}</Text>
        <Text   style={{fontSize:10,fontWeight:'bold'}}>Nagole</Text>
        <Text style={{fontSize:10,}}>Biryani, Tandoor, Chinese, Indian, Desserts, Kebabs, Mughlai</Text>
        

        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>

            <View style={{flexDirection:'row',}}>
                <Text style={{fontSize:12,}}>30 mins </Text>
                <Feather name="clock" size={17} color="black" />
            </View>
            <View style={{flexDirection:'row',backgroundColor:'#DAA520',width:20,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:7,textAlign:'center',color:'white'}}>4</Text>
          <AntDesign name="star" size={7} color="white" />
            </View>
        
        </View>
        
        </View>
       
          </View>
      </View>
      </TouchableOpacity>
    )
}
