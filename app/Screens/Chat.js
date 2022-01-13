import React from 'react'
import { View, Text,TextInput } from 'react-native'
import { Button } from 'react-native-paper'

export default function Chat() {
    return (
        <View style={{flex:1,justifyContent:'space-between'}}>
            <View>
            <View style={{flexDirection:'row',borderRadius:20,margin:5,justifyContent:'flex-end'}}>
                <View><Text style={{color:'white',backgroundColor:'blue',padding:5,borderRadius:20,fontSize:10}}>message.text</Text>
            {/* <Text style={{fontSize:9}}>123</Text> */}
            </View>
            
        </View>

        <View style={{flexDirection:'row',borderRadius:20,margin:5,justifyContent:'flex-start'}}>
                <View><Text style={{color:'white',backgroundColor:'blue',padding:5,borderRadius:20,fontSize:10}}>message.text</Text>
            {/* <Text style={{fontSize:9}}>123</Text> */}
            </View>
            </View>
      
            
        </View>
        <View>
            <View style={{borderColor:'blue',borderWidth:1,marginBottom:10,padding:5,margin:10,flexDirection:"row",justifyContent:'space-between'}}>
            <TextInput style={{minWidth:60}} placeholder="text"/>
            <Button mode="contained">
                <Text style={{fontSize:10}} >
                    Send
                </Text>
            </Button>
            </View>
            
        </View>
        </View>
    )
}
