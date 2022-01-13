import React from 'react'
import { View, Text,Dimensions, TouchableOpacity,ImageBackground, Image,Modal,Pressable,Alert,StyleSheet} from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import {uigold} from '../Constants/Colors'
import {window} from '../Constants/Layout'

export default function Login({navigation}) {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <View style={{flex:1}}>
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{fontSize:21}}>Verify OTP</Text>
            <View style={{flex:1}}>
            <TextInput style={{minWidth:60}} selectionColor="red" activeUnderlineColor="orange" backgroundColor="#F5F5F5" keyboardType="numeric"
               label="OTP" />
            </View>
            <TouchableOpacity style={{width:Dimensions.get('screen').width/2,marginTop:30}}  onPress={()=>{setModalVisible(false)
              navigation.navigate('Home1')}}>
                 <ImageBackground source={require('../Assets/images/2.png')} style={{width:"100%",height:40,overflow: "hidden",borderRadius:30}} >
              
                        <Text style={{textAlign:'center',margin:7,color:"white",fontSize:15,fontWeight:'bold'}}>LOGIN</Text>
                  
                    </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:Dimensions.get('screen').width/2,marginTop:30}}  onPress={()=> setModalVisible(true)}>
                 <ImageBackground source={require('../Assets/images/2.png')} style={{width:"100%",height:40,overflow: "hidden",borderRadius:30}} >
              
                        <Text style={{textAlign:'center',margin:7,color:"white",fontSize:21,fontWeight:'bold'}}>RE-SEND</Text>
                  
                    </ImageBackground>
                    </TouchableOpacity>
          </View>
        </View>
      </Modal>



             <View style={{flex:1,backgroundColor:'#F5F5F5',justifyContent:'center',alignItems:'center'}}>
                 <Image source={require('../Assets/images/logo2.png')} style={{width:100,height:100}}/>
                
             </View>
             <View style={{flex:1,}}>
               <View style={{marginRight:10,marginLeft:10}}>
               <TextInput  selectionColor="red" activeUnderlineColor="orange" backgroundColor="#F5F5F5" keyboardType="numeric"
               label="Mobile Number" />
              <Button  style={{marginLeft:60,marginRight:60,marginTop:20,backgroundColor:'orange'}}  mode="contained" onPress={() =>setModalVisible(!modalVisible)}>Get OTP</Button>
               </View>
            
                
                 <View style={{alignItems:'center',justifyContent:'center',margin:20,width:window}}>
                     <Text style={{fontSize:10}}>
                         By Clicking,I accept the  </Text> 
                         <Text style={{fontWeight:'bold',fontSize:10}}>Terms & Conditions & Privacy Policy</Text> 
                   
                 </View>
                 
                 
              
             </View>
        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent:'center',
      height:400,
      marginTop: 22
    },
    modalView: {
      margin: 20,
      height:300,
      backgroundColor: "#F5F5F5",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });