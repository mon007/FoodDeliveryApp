import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '@/themes';
import { useNavigation } from 'expo-router';
import { featured } from '@/constants';



function OrderPreparingScreen() {
    const navigation = useNavigation();
    React.useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Delivery')
        },2000)
    },[])
  return (
  <View className="flex-1 bg-white justify-center items-center">
    <Image source={require('../assets/images/restaurants/download (7).jpeg')} className="h-30 w-30"/>
  </View>
  );
}

export default OrderPreparingScreen;