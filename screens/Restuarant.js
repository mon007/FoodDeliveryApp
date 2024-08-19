import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '@/themes';
import { useNavigation } from 'expo-router';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';



function Restuarant() {
  const { params } = useRoute();
  let items = params;
  const navigation = useNavigation();
  return (
    <View>
      <CartIcon/>
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-40" source={items.image} />
          <TouchableOpacity className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow" onPress={() => navigation.goBack()}>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className="bg-white -mt-12 pt-6">
          <View className="px-5">
            <Text className="text-3xl font-bold">{items.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items center space-x-1">
                <Text className="text-gray-700">
                  ({items.reviews}review) . <Text className="font-semibold">{items.category}</Text>
                </Text>

              </View>
              <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" height="15" width="15" />
                <Text className="text-gray-700 text-xs">{items.address}</Text>

              </View>
            </View>
            <Text className="text-gray-500 mt-2">{items.description}</Text>
          </View>
        </View>
        <View className="pb-36 bg-white">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>

          {/* dishes */}
          {items.dishes.map((dish, index)=> <DishRow items={{...dish}} key={index}/>)}
        </View>
      </ScrollView>
    </View>
  );
}

export default Restuarant;