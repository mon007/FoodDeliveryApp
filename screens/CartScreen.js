import * as React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '@/themes';
import { useNavigation } from 'expo-router';
import { featured } from '@/constants';



function CartScreen() {
  const navigation = useNavigation();
  const restaurant = featured.restuarants[0];
  return (
    <View className = "bg-white flex-1">
        <View className ="relative py-4 shadow-sm">
          <TouchableOpacity  style={{backgroundColor:themeColors.bgColor(1)}}  className="absolute z-10 rounded-full p-1 shadow top-5 left-2" onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft stroke="white" strokeWidth={3}/>
          </TouchableOpacity>
            <View>
                <Text className="text-center font-bold text-xl">Your Cart</Text>
                <Text className="text-center text-gray-500">{restaurant.name}</Text>
            </View>
            </View>
            <View className="flex-row px-4 items-center" style={{backgroundColor:themeColors.bgColor(0.2)}}>
                <Image source={require('../assets/images/categories/icons8-cupcake-emoji-96.png')} className="w-20 h-20 rounded-full"/>
                <Text className="flex-1 pl-4">Deliver in 30 minutes</Text>
                <TouchableOpacity>
                    <Text className="font-bold" style={{color:themeColors.text}}>Change</Text>
                </TouchableOpacity>
            </View>
       
    {/* dishes */}

    <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom:50
        }}
        className="bg-white pt-5">
            {
                restaurant.dishes.map((dish,index)=>{
                    return(
                        <View className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                            <Text className="font-bold" style={{color:themeColors.text}}>2 X</Text>
                            <Image className="h-14 w-14 rounded-full" source={dish.image}/>
                            <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                            <Text className="font-semibold text-base">{dish.price}</Text>
                            <TouchableOpacity className="p-1 rounded-full" style={{backgroundColor:themeColors.bgColor(1)}}>
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke='white'/>

                            </TouchableOpacity>
                        </View>
                    )
                })
            }
    </ScrollView>

{/* totals */}

    <View className=" p-6 px-8 rounded-t-3xl space-y-4" style={{backgroundColor:themeColors.bgColor(0.2)}}>
        <View className="flex-row justify-between">
            <Text className="text-gray-700">Subtotal</Text>
            <Text className="text-gray-700">Rs. 20</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700">Delivery fee</Text>
            <Text className="text-gray-700">Rs. 2</Text>
        </View>
        <View className="flex-row justify-between">
            <Text className="text-gray-700 font-extrabold">Order total</Text>
            <Text className="text-gray-700 font-extrabold">Rs. 22</Text>
        </View>
        <View>
            <TouchableOpacity   
                onPress={()=>navigation.navigate('Order')}
                 style={{backgroundColor:themeColors.bgColor(1)}} className="p-3 rounded-full">
                <Text className="text-white text-center font-bold text-lg">
                    Place Order
                </Text>
            </TouchableOpacity>
        </View>
    </View>

    </View>
  );
}

export default CartScreen;