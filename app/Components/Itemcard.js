import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Itemcard() {
    
    return (
        <View style={{backgroundColor:'#fff',flexDirection:'row',height:150,borderBottomWidth:1,borderBottomColor:'#e5e4e2'}}>
        <View style={{flex:1,marginLeft:30,marginTop:20}}>
     <Image style={{height:100,width:100,borderRadius:20}} source={{uri:"https://cdn.pixabay.com/photo/2020/09/06/14/07/biryani-5549075_960_720.jpg"}}/>
     
        </View>
       
        <View style={{flex:1,marginTop:10}}>
           
           <View style={{margin:1}}>
           <Image source={require('../Assets/images/non.png')} style={{height:10,width:10,padding:7}}/>
           <Text  style={{fontSize:12,fontWeight:'600'}}>Family Dum Chicken Biryani Family Dum Chicken Biryani</Text>
           <View style={{}}>

            </View>
           </View>
        
        <Text style={{fontSize:12,marginTop:10,color:'grey'}}>€ 30</Text>
     
        <View style={{marginTop:10}}>
            
        <TouchableOpacity style={{backgroundColor:'blue',width:90,alignItems:'center',padding:10,borderRadius:30}}>
                <Text style={{color:'white',fontWeight:'bold',fontSize:10}}>ADD</Text>
            </TouchableOpacity>
          
       {/* <View style={{flexDirection:'row',alignItems:'center'}}>
       <TouchableOpacity>
       <AntDesign name="minuscircleo" size={20} color="black" />
       </TouchableOpacity>
        <Text style={{fontSize:20}}>1</Text>
       <TouchableOpacity>
       <AntDesign name="pluscircle" size={20} color="black" />
       </TouchableOpacity>
       </View> */}
      
        </View>
        
        </View>
        
     </View>
    )
}
