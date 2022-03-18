import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function CartItem({props}) {
    const {itemname,item_price} =props
    console.log(props)
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:'white',paddingBottom:20,paddingTop:5,}}>
        <View style={{flexDirection:'row',marginLeft:20,marginTop:10}}>
        
        <Image source={require('../../Assets/images/non.png')} style={{height:10,width:10,marginTop:2}}/>
        
        <View style={{flexDirection:'column'}}>
        <Text style={{marginLeft:1,fontSize:10}}> {itemname}</Text>
        <Text style={{marginLeft:1,fontSize:10,fontWeight:'bold'}}> € {item_price}</Text>
        </View>
        </View>
        <View style={{marginRight:20,marginTop:5}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',padding:2,borderColor:'#DAA520',borderWidth:1,borderRadius:10}}>
       <TouchableOpacity>
       <AntDesign name="minus" size={15} color="#DAA520" />
       </TouchableOpacity>
        <Text style={{fontSize:20,minWidth:40,textAlign:'center',color:'#DAA520'}}>1</Text>
       <TouchableOpacity>
       <AntDesign name="plus" size={15} color="#DAA520" />
       </TouchableOpacity>
       </View>
       

        </View>
        
    </View>

    )
}
