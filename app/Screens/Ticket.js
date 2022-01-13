import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function Ticket() {
    const navigation = useNavigation();
    return (
        <View style={{flex:1}}>
            <View style={{}}>
                

                
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:1,backgroundColor:'white'}}>
                    <Text>Create a Ticket</Text>
                    <Button>
                    <Ionicons name="add-circle-outline" size={24} color="black" />
                    </Button>
                </View>
                <View style={{marginTop:2,backgroundColor:'white',}}>
                <TouchableOpacity onPress={()=>navigation.navigate("Chat")}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',margin:5}}>
                        <View>
                        <Text   style={{fontSize:12,fontWeight:'bold'}}>Transaction Failed due to Bank server Problems Transaction Failed due to Bank server Problem</Text>
                        <Text  style={{fontSize:10}}>#4569845</Text>
                        <Text style={{fontSize:10}}>1/12/22</Text>
                        <Text style={{fontSize:7 ,color:'green'}}>Status:Closed</Text>
                        </View>
                      
                        
                    </View>
                    </TouchableOpacity>
                    
                   
                </View>

            </View>
            
        </View>
    )
}
