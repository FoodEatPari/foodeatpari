import React from 'react'
import { View, Text,ScrollView } from 'react-native'
import RestaurantCard from '../Components/MainComponents/RestaurantCard'

export default function Categories() {
    return (
        <ScrollView style={{flex:1}}>
        <View style={{flex:1,backgroundColor:'white'}}>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </View>
        </ScrollView>
    )
}
