import React from 'react'
import { View, Text,Image,TouchableOpacity,ScrollView } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Categories() {
    const navigation = useNavigation();
   

   const array=[
       {id:1,Categoryname:'Biryani',uri:"https://cdn.pixabay.com/photo/2021/01/22/19/48/grilled-5940974_960_720.jpg"},
       {id:2,Categoryname:'Pizza',uri:"https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg"},
       {id:3,Categoryname:'Rice',uri:"https://cdn.pixabay.com/photo/2021/01/16/09/05/meal-5921491_960_720.jpg"},
       {id:4,Categoryname:'IceCreams',uri:"https://cdn.pixabay.com/photo/2018/05/01/18/19/eat-3366425_960_720.jpg"},
       {id:5,Categoryname:'Curries',uri:"https://cdn.pixabay.com/photo/2021/07/04/13/23/green-curry-6386360_960_720.jpg"},
       {id:6,Categoryname:'Burger',uri:"https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg"},
       {id:6,Categoryname:'Break fast',uri:"https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg"}
    ]

return(
    
        <View style={{flex:1,}} >
        <View style={{backgroundColor:'white',padding:10,marginTop:5}}>
            <Text style={{fontSize:20}}>Categories</Text>

        </View>


        <ScrollView horizontal  showsHorizontalScrollIndicator={false}>
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Categories')}>
            <Image style={{height:60,width:60,borderRadius:60,borderColor:'white',borderWidth:1,alignSelf:'center'}} source={{uri:'https://cdn.pixabay.com/photo/2021/01/22/19/48/grilled-5940974_960_720.jpg'}}/>
            <Text style={{textAlign:'center',margin:10}} >Biryani</Text>
            </TouchableOpacity>
        </View>
        <View>
            <Image style={{height:60,width:60,borderRadius:60,borderColor:'white',borderWidth:1,alignSelf:'center'}} source={{uri:'https://cdn.pixabay.com/photo/2021/07/04/13/23/green-curry-6386360_960_720.jpg'}}/>
            <Text style={{textAlign:'center',margin:10}} >Curries</Text>
        </View>
        <View>
            <Image style={{height:60,width:60,borderRadius:60,borderColor:'white',borderWidth:1,alignSelf:'center'}} source={{uri:'https://cdn.pixabay.com/photo/2021/01/16/09/05/meal-5921491_960_720.jpg'}}/>
            <Text style={{textAlign:'center',margin:10}} >Rice</Text>
        </View>
        <View>
            <Image style={{height:60,width:60,borderRadius:60,borderColor:'white',borderWidth:1,alignSelf:'center'}} source={{uri:'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg'}}/>
            <Text style={{textAlign:'center',margin:10}} >Break Fast</Text>
        </View>
        <View>
            <Image style={{height:60,width:60,borderRadius:60,borderColor:'white',borderWidth:1,alignSelf:'center'}} source={{uri:'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg'}}/>
            <Text style={{textAlign:'center',margin:10}} >Break Fast</Text>
        </View>
        <View>
            <Image style={{height:60,width:60,borderRadius:60,borderColor:'white',borderWidth:1,alignSelf:'center'}} source={{uri:'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg'}}/>
            <Text style={{textAlign:'center',margin:10}} >Break Fast</Text>
        </View>
        <View>
            <Image style={{height:60,width:60,borderRadius:60,borderColor:'white',borderWidth:1,alignSelf:'center'}} source={{uri:'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg'}}/>
            <Text style={{textAlign:'center',margin:10}} >Break Fast</Text>
        </View>
        <View>
            <Image style={{height:60,width:60,borderRadius:60,borderColor:'white',borderWidth:1,alignSelf:'center'}} source={{uri:'https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg'}}/>
            <Text style={{textAlign:'center',margin:10}} >Break Fast</Text>
        </View>
        </ScrollView>
        
        </View>

)
}
