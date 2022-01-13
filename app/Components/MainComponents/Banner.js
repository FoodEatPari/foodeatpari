import React from 'react'
import { View, Text, Image,Dimensions,ScrollView } from 'react-native'


export default function Banner() {
  const {width,height} = Dimensions.get("screen")
    return (
       
     <ScrollView horizontal pagingEnabled>
        <Image style={{height:height/4,width:width}} source={{uri:"https://cdn.pixabay.com/photo/2017/06/01/07/15/food-2362678_960_720.jpg"}} />

        <Image style={{height:height/4,width:width}} source={{uri:"https://cdn.pixabay.com/photo/2017/06/01/07/15/food-2362678_960_720.jpg"}} />
        <Image style={{height:height/4,width:width}} source={{uri:"https://cdn.pixabay.com/photo/2017/06/01/07/15/food-2362678_960_720.jpg"}} />
       </ScrollView>
       )
}
