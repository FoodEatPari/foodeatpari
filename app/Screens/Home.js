import React from 'react'
import { View, Text,Image,Dimensions,ScrollView,Platform, } from 'react-native'
import { Feather } from '@expo/vector-icons';
import Categories from '../Components/MainComponents/Categories'
import { BackgroundCarousel } from '../Components/MainComponents/BackgroundCarousel'
import RestaurantCard from '../Components/MainComponents/RestaurantCard';
import Header from '../Components/MainComponents/Header';
import ModalCard from '../Components/SubComponents/ModalCard';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import instance  from '../Config/Axios';
export default function Home() {
  const [modalVisible, setModalVisible] = React.useState(true);
  const [location, setLocation] = React.useState(null);
  const [address,setAddress]=React.useState(null)
  const [errorMsg, setErrorMsg] = React.useState(null);
  console.log(address)
  const images = [
    "https://cdn.pixabay.com/photo/2021/01/16/09/05/meal-5921491_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/07/04/13/23/green-curry-6386360_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg",
    ,


    "https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg"
  ];

 const  helloapi =async()=>{
  instance.post('/hello')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
 }


  React.useEffect(() => {

  

    (async () => {
      
      if (Platform.OS === 'android' && !Constants.isDevice) {
        setErrorMsg(
          'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
        );
        return;
      }
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let {coords}= await Location.getCurrentPositionAsync({});
const {latitude,longitude} =coords
      const rget = await Location.reverseGeocodeAsync({latitude,longitude})
      const {streetNumber,street,district,city,}=rget[0]
      setAddress(`${streetNumber+","+street+","+district+","+city}`)
      
      
    })();
  }, []);

    return (
        <ScrollView style={{flex:1}}>
    <Header address={address} modalVisible={modalVisible} setModalVisible={()=>setModalVisible(!modalVisible)}/>
      <ModalCard address={address} modalVisible={modalVisible} setModalVisible={()=>setModalVisible(!modalVisible)}/>
          <View style={{}}>
           
          <BackgroundCarousel images={images} />
          </View>
     
       
            <View  style={{backgroundColor:'white'}}>
            <Categories/>
            </View>
        <View style={{flex:1,backgroundColor:'white'}}>

        
            <View style={{backgroundColor:'#f7f7f7',padding:10,}}>
            <View style={{flexDirection:'row'}}>
            <Feather name="map-pin" size={18} color="black" />
            <Text style={{fontSize:15,marginLeft:5}}>Restaurants near to you</Text>
            </View>
            </View>
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
