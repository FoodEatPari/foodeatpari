import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import OrderItem from './OrderItem'
import { useNavigation } from '@react-navigation/native';
import { Chip } from 'react-native-paper';

export default function OrderCard() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity  onPress={()=>navigation.navigate('OrderHistory')} activeOpacity={0.7}
        underlayColor="#DDDDDD"
      > 
        <View style={{margin:5,borderRadius:10,backgroundColor:"white",paddingBottom:10}}>
 
           
         
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <View style={{flexDirection:'row'}}>
             <Image style={{height:40,width:40,borderRadius:10,marginTop:10,marginLeft:15}} source={{uri:"https://cdn.pixabay.com/photo/2020/09/06/14/07/biryani-5549075_960_720.jpg"}}/>
         <View style={{marginTop:10,marginLeft:15}}>
                <Text style={{fontSize:12}}>
                    JSP Restaurant
                </Text>
                <Text style={{fontSize:10}}>
                    Nagole
                </Text>
            </View>
             </View>
         
             <View>
                 <TouchableOpacity style={{margin:10,backgroundColor:'green',padding:3,borderRadius:3}}>
                     <Text style={{textAlign:'center',color:'white',fontSize:10}}>
                     Delivered
                     </Text>
                 </TouchableOpacity>
  
             </View>
            
            </View>
         
             
           {/* Order Items */}


           <OrderItem/>
           <OrderItem/>
         


           <View style={{backgroundColor:'white'}}>
   
        <View>
            
            
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30}}>
            <Text style={{fontSize:12}}>
               1/01/2022
            </Text>
            <Text style={{fontSize:12}}>
            € 400
            </Text>
            </View>
           
        </View>
       
    </View>
           
           {/*  */}
           </View>
           </TouchableOpacity>

    )
}
