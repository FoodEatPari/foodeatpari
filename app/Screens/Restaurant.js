import React from 'react'
import { View, Text,ScrollView,Image, TouchableOpacity,Switch } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Itemcard from '../Components/SubComponents/Itemcard';
import Category from '../Components/SubComponents/Category';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import instance from '../Config/Axios';
import Additem from '../Redux/Cart/CartActions'
import { useSelector,useDispatch } from 'react-redux'

export default function Restaurant({route,navigation}) {
  const cart = useSelector(state=>state.cart_store.cart)
  const dispatch = useDispatch()
    const {restaurantname,_id,rating} = route.params.restaurantdata
    const [isEnabled, setIsEnabled] = React.useState(false);
    const [items,setitems]=React.useState([])
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  const  getitems =async(isMounted)=>{
    if(isMounted){
     instance.get(`/items/GetitembyRestaurent/${_id}`)
     .then(function (response) {
       // handle success
       console.log(response.data);
       setitems(response.data)
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
    }
   
  }

  React.useEffect(() => {
    let isMounted = true
    getitems(isMounted)
    return (()=>{
      isMounted = false
      setitems([])
    })
  }, [])    
  
  

  React.useEffect(() => {
    navigation.setOptions({
        headerRight: () => (
        <View style={{flexDirection:'row',padding:10}}>
         <TouchableOpacity style={{marginTop:10,marginRight:10}}  onPress={() =>navigation.navigate("Cart") } >
          <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
        
        
          <Ionicons name="cart" size={24} color="black" />
        <View style={{backgroundColor:'#E3735E',borderRadius:90,padding:5,marginLeft:-5,marginTop:-10}}>
          <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>{cart.length}</Text>
          </View>
        </View>
           </TouchableOpacity>
          
        </View>)})
      return () => {
          
      }
  }, [cart])
    return (
        <ScrollView style={{flex:1,borderBottomRightRadius:0,borderBottomLeftRadius:0}}>
            <View style={{flex:1,backgroundColor:'#fff',borderBottomLeftRadius:1,borderBottomRightRadius:1}}>

            
                <View style={{flexDirection:'row',padding:30,justifyContent:'space-between'}}>
                     <View style={{}}>
                            <Text style={{fontSize:25,}}>{restaurantname}</Text>
                            <Text>Dilshuknagar,Hyderabad</Text>
                     </View>
                    <View style={{flexDirection:'row'}}>
                         <Text style={{fontSize:20}}>{rating ==0? "No rating" : rating}</Text>
                        <AntDesign name="star" size={25} color="green" />
                    </View>
               </View>
               <View style={{padding:10,flexDirection:'row',justifyContent:'space-around'}}>
                   <View>
                   <MaterialIcons name="delivery-dining" size={25} color="black" style={{alignSelf:'center',margin:1}}/>
                   <Text style={{}}>Delivery in 15mins</Text>
                   </View>
                   <View>
                   <AntDesign name="clockcircle" size={24} color="black" style={{alignSelf:'center',margin:1}} />
                   <Text style={{}}>Food 30mins</Text>
                       </View>
                       
                      
              
               </View>
                {/* offers section */}
                <ScrollView horizontal style={{padding:10}}  showsHorizontalScrollIndicator={false}>
                <View style={{borderWidth:1,width:120,borderColor:"#e5e4e2",height:40,margin:5,justifyContent:'center'}}>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <MaterialIcons name="local-offer" size={14} color="#DAA520" />
                            <Text style={{fontSize:10,fontWeight:'bold'}}>
                                60 OFF Upto 120
                            </Text>
                            </View>
                            <View>
                            <Text style={{fontSize:12,fontWeight:'bold',textAlign:'center'}}>Try 60CODE</Text>
                            </View>
                        
                            
                        </View>
                        <View style={{borderWidth:1,width:120,borderColor:"#e5e4e2",height:40,margin:5,justifyContent:'center'}}>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <MaterialIcons name="local-offer" size={14} color="#DAA520" />
                            <Text style={{fontSize:10,fontWeight:'bold'}}>
                                60 OFF Upto 120
                            </Text>
                            </View>
                            <View>
                            <Text style={{fontSize:12,fontWeight:'bold',textAlign:'center'}}>Try 60CODE</Text>
                            </View>
                        
                            
                        </View>
                        <View style={{borderWidth:1,width:120,borderColor:"#e5e4e2",height:40,margin:5,justifyContent:'center'}}>
                            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                            <MaterialIcons name="local-offer" size={14} color="#DAA520" />
                            <Text style={{fontSize:10,fontWeight:'bold'}}>
                                60 OFF Upto 120
                            </Text>
                            </View>
                            <View>
                            <Text style={{fontSize:12,fontWeight:'bold',textAlign:'center'}}>Try 60CODE</Text>
                            </View>
                        
                            
                        </View>

                      

                        
                       </ScrollView>

                       <View style={{flexDirection:'row',alignItems:'center',margin:10}}>
                       <Switch
                         trackColor={{ false: "#767577", true: "#81b0ff" }}
                          thumbColor={isEnabled ? "green" : "#f4f3f4"}
                           ios_backgroundColor="#3e3e3e"
                           onValueChange={toggleSwitch}
                           value={isEnabled}
      />
      <Text>Veg</Text>
                       </View>
               </View>
               <View style={{flex:1}}>


               {items.map((item,index)=>{
              
              return(
               

                 <Itemcard props={item} key={item._id.toString()}/>
          
        
          )})}



</View>
           </ScrollView>
    )
}
