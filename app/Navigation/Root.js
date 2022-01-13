import React from 'react'
import { View, Text,Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Login from '../Screens/Login'
import Home from '../Screens/Home'
import Restaurant from '../Screens/Restaurant';
import Cart from '../Screens/Cart';
import Orders from '../Screens/Orders';
import OrderHistory from '../Screens/OrderHistory';
import Categories from '../Screens/Categories';
import Header from '../Components/MainComponents/Header';
import Account from '../Screens/Account';
import Address from '../Screens/Address';
import Ticket from '../Screens/Ticket';
import Chat from '../Screens/Chat';


const Stack = createNativeStackNavigator();
const HomeStack = createBottomTabNavigator();

const UserScreen =()=>(

    <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Home1" component={HomeStackScreen} options={{headerShown:false}} />
           <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Orders" component={Orders} />
          <Stack.Screen name="Address" component={Address} />
          <Stack.Screen name="Ticket" component={Ticket} />
          <Stack.Screen name="Chat" component={Chat} />

         
          <Stack.Screen name="OrderHistory" component={OrderHistory} />             
           <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>     
         <Stack.Screen name="Restaurant" component={Restaurant} /> 
         <Stack.Screen name="Categories" component={Categories} /> 
        
        
       
    </Stack.Navigator>
)



const HomeStackScreen = ({navigation})=>(
   
    <HomeStack.Navigator initialRouteName="Home"
   
    screenOptions={({ route }) => ({
      
        tabBarIcon: ({ focused, color, size }) => {
         
          let iconName;
              if (route.name === 'Home') {
                 iconName = focused
                   ? 'ios-home'
                   : 'ios-home-outline';
              }else if (route.name === 'Account') {
                 iconName = focused ? 'person' : 'person-outline';
              }
              else if (route.name === 'Orders') {
              iconName = focused ? 'document-text' : 'document-text-outline';
           }
         
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        
        tabBarActiveTintColor: '#DAA520',
        tabBarInactiveTintColor: 'gray',
      })}
    
    >
        
        <HomeStack.Screen name="Home" component={Home}options={{headerShown:false}} />
        <HomeStack.Screen name="Orders" component={Orders}/>
       

             <HomeStack.Screen name="Account" component={Account} options={{
                  title: 'Account',
                  headerShown: true,
                  headerStyle: {
                  backgroundColor: '#fff',
               },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        
    </HomeStack.Navigator>
)

export default function Root() {
    return (
        <NavigationContainer>
            <UserScreen/>
        </NavigationContainer>
    )
}
