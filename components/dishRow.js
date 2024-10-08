import { addToCart, removeFromCart, selectCartItemsById } from '@/slices/CartSlice';
import { themeColors } from '@/themes';
import { useNavigation } from 'expo-router';
import * as React from 'react';
import { View, Image,TouchableWithoutFeedback,Text, TouchableOpacity } from 'react-native';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';

function DishRow({items}) {
    const dispatch = useDispatch();
    const totalItems = useSelector(state=>selectCartItemsById(state,items.id));
    const handleIncrease = ()=>{
        dispatch(addToCart({...items}))
    }
    const handleDecrease = ()=>{
        dispatch(removeFromCart({id:items.id}))
    }
  return (
<View className = "flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-3">
    <Image className="rounded-3xl" style={{height:100,width:100}} source={items.image}/>
    <View className="flex flex-1 space-y-3">
        <View className="pl-3">
            <Text className="text-xl">{items.name}</Text>
            <Text className="text-gray-700">{items.description}</Text>
        </View>
<View className="flex-row justify-between pl-3 items-center">
    <Text className="text-gray-700 text-lg font-bold">
        Rs{items.price}
    </Text>
    <View className="flex-row items-center">
        <TouchableOpacity onPress={handleDecrease} disabled={!totalItems.length} className="p-1 rounded-full" style={{backgroundColor:themeColors.bgColor(1)}}>
            <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'}/>
        </TouchableOpacity>
        <Text className="px-3">{totalItems.length}</Text>
        <TouchableOpacity onPress={handleIncrease} className="p-1 rounded-full" style={{backgroundColor:themeColors.bgColor(1)}}>
            <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'}/>
        </TouchableOpacity>
    </View>

</View>
    </View>
</View>
  );
}

export default DishRow;