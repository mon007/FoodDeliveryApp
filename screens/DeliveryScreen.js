import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '@/themes';
import { useNavigation } from 'expo-router';
import { featured } from '@/constants';
import MapView, {Marker} from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestuarant } from '@/slices/RestuarantSlice';
import { emptyCart } from '@/slices/CartSlice';



function DeliveryScreen() {
  const restaurant = useSelector(selectRestuarant);
  const navigation = useNavigation();
 const dispatch = useDispatch()
  const cancelOrder = () => {
    navigation.navigate('Home');
    dispatch(emptyCart())
  }
  return (
  <View className="flex-1">
    <MapView
      initialRegion={{
        latitude:restaurant.lat,
        longitude:restaurant.lng,
        latitudeDelta:0.01,
        longitudeDelta:0.01
      }}
      className="flex-1"
      mapType='standard'>

        <Marker coordinate={{
          latitude: restaurant.lat,
          longitude:restaurant.lng
        }}
        title={restaurant.name}
        description={restaurant.description}
        pinColor={themeColors.bgColor(1)}/>
        </MapView>

        <View className="rounded-t-3xl -mt-12 bg-white relative">
          <View className="flex-row justify-between px-5 pt-10">
            <View>
              <Text className="text-lg text-gray-700 font-semibold">
                Estimated Arrival
              </Text>
              <Text className="text-3xl text-gray-700 font-extrabold">
                20-30 minutes
              </Text>
              <Text className="text-2 text-gray-700 font-semibold">
                Your order is on the way
              </Text>
            </View>
            <Image source={require('../assets/images/categories/icons8-pizza-96.png')} className="w-24 h-24"/>
          </View>
          <View style={{backgroundColor:themeColors.bgColor(0.8)}} className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2">
            <View className="p-1 rounded-full" style={{backgroundColor:'rgba(255,255,255,0.4'}}>
            <Image source={require('../assets/images/categories/icons8-pizza-96.png')} className="w-16 h-16 rounded-full"/>
            </View>
            <View className="flex-1 ml-3">
              <Text className="text-lg font-bold text-white">
                Riders name
              </Text>
              <Text className="font-semibold text-white">
                Your rider
              </Text>
            </View>
            <View className="flex-row items-center space-x-3 mr-3"> 
                <TouchableOpacity onPress={()=>navigation.navigate('Home')} className="bg-white p-2 rounded-full">
                  <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={cancelOrder}  className="bg-white p-2 rounded-full">
                  <Icon.X stroke={'red'} strokeWidth={4}/>
                </TouchableOpacity>
            </View>
          </View>
        </View>
  </View>
  );
}

export default DeliveryScreen;