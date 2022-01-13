import React from 'react'
import { View, Text, ScrollView,Image } from 'react-native'
import OrderCard from '../Components/SubComponents/OrderCard'


export default function Orders() {
    return (
        <ScrollView>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
        </ScrollView>
       
    )
}
