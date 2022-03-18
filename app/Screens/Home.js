import React from 'react'
import { View, Text,Image,Dimensions,ScrollView,Platform,RefreshControl } from 'react-native'
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
  const [refreshing, setRefreshing] = React.useState(false);
  const [restauransts,setrestaurants]=React.useState([])


  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
   
    wait(500).then(() => setRefreshing(false));
  }, []);


  console.log(address)
  const images = [
    "https://cdn.pixabay.com/photo/2021/01/16/09/05/meal-5921491_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/07/04/13/23/green-curry-6386360_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg",
    ,


    "https://cdn.pixabay.com/photo/2016/11/06/23/31/breakfast-1804457_960_720.jpg"
  ];

 const  helloapi =async(isMounted)=>{
   if(isMounted){
     if(location){
      await instance({
        method:'post',
        url:`/restaurant/GetNearrestaurants`,
        data:{
          daddress:location
        }
       
      })
      .then(function (response) {
        // handle success
        // console.log(response.data,"ikhguguy");
        setrestaurants(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     }
  
   }
  
 }

 React.useEffect(() => {
  let isMounted = true
  helloapi(isMounted)
  return (()=>{
    isMounted = false
    setrestaurants([])
  })
}, [refreshing,location])    


const getGeoLoc =async(isMounted)=>{

  if(isMounted){
  try{
    if (Platform.OS === 'android' && !Constants.isDevice) {
      alert(
        'Oops, this will not work on Snack in an Android emulator. Try it on your device!'
      );
      
    }
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access location was denied');
     
    }
    let {coords}= await Location.getCurrentPositionAsync({});
    const {latitude,longitude} =coords
  
    setLocation(`${latitude+","+longitude}`)
    const rget = await Location.reverseGeocodeAsync({latitude,longitude})

    const {streetNumber,street,district,city,}=rget[0]
    if( district && city ){
      setAddress(`${district+","+city}`)
    }else{
      setAddress("Please select ur region")
      
    }
     
   }catch(e){
    alert('We could not find your position. Please make sure your location service provider is on');
    console.log('Error while trying to get location: ', e);
  }
}
    
}
  React.useEffect(() => {

   
    let isMounted = true
    getGeoLoc(isMounted)
  return (()=>{
    isMounted = false
    setAddress("")
    setLocation("")
  })
  }, [refreshing]);


console.log(location)
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
            
            {restauransts.map((item,index)=>{
              
              return(
               

                 <RestaurantCard props={item} key={item._id.toString()}/>
          
        
          )})}
            
            </View>
        </ScrollView>
    )
}
