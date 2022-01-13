import React from 'react'
import { View, Text,Modal,StyleSheet, Dimensions } from 'react-native'
import Address from '../../Screens/Address';

export default function ModalCard({modalVisible,setModalVisible,address}) {
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
         
          setModalVisible(!modalVisible);
        }}
      >
          <View style={{flex:1,marginTop:Dimensions.get("screen").height/3,margin:1,borderColor:"#DAA520",borderWidth:3}}>
          <Address address={address} modalVisible={modalVisible} setModalVisible={()=>setModalVisible(!modalVisible)}/>
          </View>
     


      </Modal>
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