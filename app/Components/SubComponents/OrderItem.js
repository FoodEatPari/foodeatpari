import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


export default function OrderItem() {
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',margin:5}}>
        <View style={{flexDirection:'row',marginLeft:20}}>
        
        <Image source={require('../../Assets/images/non.png')} style={{height:10,width:10,marginTop:2}}/>
        
        <View style={{flexDirection:'column'}}>
        <Text style={{marginLeft:1,fontSize:10}}> Biryani Chicken Biryani Biryani Chicken</Text>
       
        </View>
        </View>
        <View style={{marginRight:20}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                <Text style={{marginLeft:1,fontSize:10,fontWeight:'bold'}}>2 x € 30</Text>
       </View>

        </View>
        
    </View>
    )
}
