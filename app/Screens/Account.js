import React from 'react'
import { View, Text,Image, TouchableOpacity,TextInput } from 'react-native'

import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper';

export default function Account() {
    const navigation = useNavigation();

const [displayName,SetdisplayName] =React.useState(null)
const [email,Setemail] =React.useState(null)


  return (
    <View style={{flex:1,marginTop:5}}>
     <View style={{flex:1,}}>
       <View style={{flexDirection:'row',justifyContent:'space-between',padding:30,backgroundColor:'#fff',}}>
         <View>
         <TextInput style={{fontSize:12}} value='Shiva JSP'/>
         <TextInput style={{fontSize:10}} value="email@email.com" />
                  <TextInput style={{fontSize:10}} value="974255455"/>
        <Button mode="contained" style={{marginTop:10}}  >
        <Text style={{fontSize:7}} >Update Profile</Text>
      </Button>
         </View>
         
       <Image style={{height:100,width:100,borderRadius:90,}} source={{uri:"https://cdn.pixabay.com/photo/2016/11/29/03/36/woman-1867093_960_720.jpg"}} />
     </View>
     <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#fff',marginTop:10,padding:30,marginBottom:10,height:90}}>
    
     <View>
         <TouchableOpacity onPress={()=>navigation.navigate("Orders")}>
         <Ionicons style={{alignSelf:"center"}} name="document-text" size={24} color="black" />
     <Text style={{textAlign:'center',}}>Orders</Text>
         </TouchableOpacity>
     
       </View>
       <View>
       <Feather style={{alignSelf:"center"}}  name="settings" size={27} color="black" />
       <Text style={{textAlign:'center',}}>Settings</Text>
       </View>
       <View>
       <TouchableOpacity onPress={()=>navigation.navigate("Ticket")}>
       <MaterialIcons style={{alignSelf:"center"}}  name="report" size={27} color="black" />
       <Text style={{textAlign:'center',}}>Tickets</Text>
       </TouchableOpacity>
       </View>
     
     
    
     
     
     </View>
     </View>
     {/* <View style={{flex:2}}>
       <Button name="Edit" style={{width:200,alignSelf:'center',padding:10}}/>
       <Button name="Logout" style={{width:200,alignSelf:'center',marginTop:10,padding:10}} onPress={()=>dispatch(LogoutRequest())}  />
     </View> */}
    </View>
  )
}
