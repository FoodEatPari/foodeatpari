import React from 'react'
import { View, Text,TouchableOpacity, Button, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Address({modalVisible,setModalVisible,address}) {
    console.log(address)
    const [text, onChangeText] = React.useState(address);
    return (
        <View style={{flex:1,backgroundColor:"white"}}>
            <View style={{flex:1,margin:10,}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontSize:20,margin:10}}>Select a Location</Text>
            <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)}>
            <AntDesign name="closecircleo" size={24} color="orange" />
            </TouchableOpacity>
         
            </View>
           
            
         <View style={{marginTop:20,}}>
             <View  style={{flexDirection:'row',justifyContent:'space-between',borderWidth:1,borderColor:'#e5e4e2',padding:10}}>
                 <View>
                 <TouchableOpacity  style={{flexDirection:'row',}}>
                <Ionicons name="locate" size={17} color="red" />
                <View>
                <Text style={{fontSize:10,fontWeight:'800'}} >Use Location for Auto Detection </Text> 
             <TextInput style={{fontSize:10}} value={text}  onChangeText={onChangeText} />
                </View>
             
                 </TouchableOpacity>
                 </View>
                 <View>
                     <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'red',padding:5}}>
                     <Text style={{color:'white',fontSize:10}}>Save</Text>
                     </TouchableOpacity>
                   
                     
                     </View>
               
     
             </View>

             <View style={{marginTop:20}}>
             <Text style={{fontSize:10,fontWeight:"bold"}}>Saved Addressess</Text>
             <TouchableOpacity>
             <View  style={{flexDirection:'row',borderWidth:1,borderColor:'#e5e4e2',padding:10,marginTop:10,justifyContent:'space-between'}}>
                 <Text style={{fontSize:12}}>
                     Nagole,Hyderbad-530001
                 </Text>
                 <TouchableOpacity>
                 <Entypo name="dots-three-horizontal" size={15} color="black" />
                 </TouchableOpacity>
                 
             </View>
             </TouchableOpacity>
             <View >

             </View>
             </View>
         
         </View> 
         </View>
        </View>
    )
}
