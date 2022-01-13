import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Itemcard from '../Itemcard';
export default function Category() {
    const [active,Setactive]=React.useState(true)
    return (
        <>
        <TouchableOpacity  onPress={()=>Setactive(!active)} activeOpacity={0.7} >
        <View style={{backgroundColor:'#fff',marginTop:10,padding:10,flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{marginLeft:10,fontSize:20,fontWeight:'bold'}}>
            Biryani Rice
        </Text>
        
            {active?<AntDesign style={{marginRight:20}} name="up" size={20} color="black" />: <AntDesign style={{marginRight:20}} name="down" size={20} color="black" />}
       
      
       
    </View>
    </TouchableOpacity>
        {active?  <View>
            <Itemcard/>
            <Itemcard/>
            <Itemcard/>
            </View>:<View></View>}
   
  
    </>
    )
}
