import React, { useState } from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Additem } from '../../Redux/Cart/CartActions';
import { useSelector,useDispatch } from 'react-redux'

export default function Itemcard({props}) {
   const cart = useSelector(state=>state.cart_store.cart)
   const {itemname,item_price,restaurantid,_id,item_type} =props
   const [added,setadded]=useState(false)
   
   console.log(itemname)
   const dispatch = useDispatch()
    
   const Addtocart =()=>{
      setadded(true)
      dispatch(Additem({
         _id:_id,
         itemname:itemname,
         restaurantid:restaurantid,
         item_price,
         item_type:item_type,
         qty:0
      }))
   }

    return (
        <View style={{backgroundColor:'#fff',flexDirection:'row',height:150,borderBottomWidth:1,borderBottomColor:'#e5e4e2'}}>
        <View style={{flex:1,marginLeft:30,marginTop:20}}>
     <Image style={{height:100,width:100,borderRadius:20}} source={{uri:"https://cdn.pixabay.com/photo/2020/09/06/14/07/biryani-5549075_960_720.jpg"}}/>
     
        </View>
       
        <View style={{flex:1,marginTop:10}}>
           
           <View style={{margin:1}}>
              {item_type==1?( <Image source={require('../../Assets/images/non.png')} style={{height:10,width:10,padding:7}}/>):( <Image source={require('../../Assets/images/veg.png')} style={{height:10,width:10,padding:7}}/>)}
          
           <Text  style={{fontSize:12,fontWeight:'600'}}>{itemname}</Text>
           <View style={{}}>

            </View>
           </View>
        
        <Text style={{fontSize:12,marginTop:10,color:'grey'}}>€{item_price}</Text>
     
        <View style={{marginTop:10}}>
            
            {cart.find(o => o._id ==_id)?( <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',padding:2,borderColor:'#DAA520',borderWidth:1,borderRadius:10,width:90,}}>
       <TouchableOpacity>
       <AntDesign name="minus" size={15} color="#DAA520" />
       </TouchableOpacity>
        <Text style={{fontSize:20,minWidth:40,textAlign:'center',color:'#DAA520'}}>1</Text>
       <TouchableOpacity>
       <AntDesign name="plus" size={15} color="#DAA520" />
       </TouchableOpacity>
       </View>):(<TouchableOpacity style={{backgroundColor:'blue',width:90,alignItems:'center',padding:10,borderRadius:30}} onPress={()=>Addtocart()}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:10}}>ADD</Text>
            </TouchableOpacity>)}
        
          
           
      
        </View>
        
        </View>
        
     </View>
    )
}
