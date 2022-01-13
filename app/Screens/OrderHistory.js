import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import { AntDesign } from '@expo/vector-icons';
import OrderItem from '../Components/SubComponents/OrderItem'

export default function OrderHistory() {
    return (
        <ScrollView style={{flex:1}}>
            <View style={{flex:1,backgroundColor:'white'}}>

           
            <View style={{flexDirection:'row',justifyContent:'space-between',margin:20}}>
                <View>
                <Text style={{fontSize:12}}>JSP Restaurant</Text>
                <Text style={{fontSize:10}}>Nagole</Text>
                </View>

                <View>
                    <Button style={{}} mode="contained">
                        <AntDesign name="download" size={10} color="white" />
                    </Button>
                </View>
           
            </View>
<OrderItem/>
<View style={{padding:20}}>
<View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30,}}>
            <Text style={{fontSize:10}}>
               1/01/2022
            </Text>
            <Text style={{fontSize:12}}>
            € 400
            </Text>
            </View>
                <View style={{borderTopWidth:1,borderTopColor:'grey',marginTop:30,}}>

             
            <View style={{margin:10}}>
            <Text style={{fontSize:12,fontWeight:'bold'}}>
                Order Details
            </Text>
            <Text style={{fontSize:10}}>
         Order Number:9953456852
            </Text>
            <Text style={{fontSize:10}}>
           Deliveried to: Nagole,Hyderabad
            </Text>
            <Text style={{fontSize:10}}>
         Phone Number:9953456852
            </Text>
            </View>
            </View>
            <View style={{flexDirection:'row-reverse'}}>
                <Button mode="contained" >
                 <Text style={{fontSize:7}}>Support</Text>
                </Button>
    
</View>
</View>

</View>
        </ScrollView>
    )
}
