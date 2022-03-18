import React from 'react'
import { View, Text,Image, Button,ScrollView, TouchableOpacity } from 'react-native'

import CartItem from '../Components/SubComponents/CartItem'
import { useSelector,useDispatch } from 'react-redux'
export default function Cart() {
    const cart = useSelector(state=>state.cart_store.cart)

    return (
        <ScrollView style={{flex:1}}>
            <View style={{flexDirection:'row',backgroundColor:'white',paddingTop:10,paddingBottom:10}}>
            <Image style={{height:40,width:40,borderRadius:10,marginTop:10,marginLeft:15}} source={{uri:"https://cdn.pixabay.com/photo/2020/09/06/14/07/biryani-5549075_960_720.jpg"}}/>
            <View style={{marginTop:10,marginLeft:15}}>
                <Text style={{fontSize:12}}>
                    JSP Restaurant
                </Text>
                <Text style={{fontSize:10}}>
                    Nagole
                </Text>
            </View>
             <View>

             </View>
            </View>
    

{/* Cart Items */}
{cart.map((item,index)=>{
              
              return(
               

                 <CartItem props={item} key={item._id.toString()}/>
          
        
          )})}
   
  
   

    {/*  */}


    <View style={{backgroundColor:'white',marginTop:5,paddingBottom:20,paddingTop:20}}>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30}}>
        <Text style={{fontWeight:'bold'}}>Billing Details</Text>
        </View>
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30}}>
            <Text>
                Delivery Charges
            </Text>
            <Text>
               30
            </Text>
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30}}>
            <Text>
                Grand Total
            </Text>
            <Text>
               400
            </Text>
            </View>
           
        </View>
       
    </View>


    <View style={{backgroundColor:'white',marginTop:5,paddingBottom:20,paddingTop:20}}>
   
        <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:30,marginRight:30}}>
           
           <View>
           <Text style={{fontWeight:'bold'}}>
                Delivery Address
            </Text>
            <Text>
                Nagole,Hyderabad,5076001
            </Text>
            </View>
            <View>
                <TouchableOpacity style={{backgroundColor:'green',padding:5,borderRadius:15,width:100}}>
                <Text style={{color:'white',textAlign:'center',fontSize:10}}>
              Change
            </Text>
                </TouchableOpacity>
            
            </View>
            </View>
          
           
        </View>
       
    </View>


    <View style={{backgroundColor:'white',marginTop:5,paddingBottom:20,paddingTop:20}}>
   
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{borderRadius:30,backgroundColor:'#DAA520',width:100,padding:5}}>
                <Text style={{textAlign:'center',color:'white',fontSize:10}}>CheckOut</Text>
            </TouchableOpacity>
        </View>
          
       
    </View>

    
        </ScrollView>
    )
}
