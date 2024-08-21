import { selectCartItems, selectCartTotal } from '@/slices/CartSlice';
import { themeColors } from '@/themes';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Image,TouchableWithoutFeedback,Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

function CartIcon() {
    const navigation = useNavigation();
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    if(!cartItems.length) return;
  return (
<View className="absolute bottom-5 w-full z-50">
   <TouchableOpacity
    onPress={()=>navigation.navigate('CartScreen')}
    className="flex-row justify-between items-center mx-5 rounded-full px-4 py-3 shadow-lg"
    style={{backgroundColor: themeColors.bgColor(1)}}>
    <View className="p-2 px-4 rounded-full" style={{backgroundColor:'rgba(255,255,255,0.3)'}}>
        <Text className="font-extrabold text-white text-lg">{cartItems.length}</Text>
    </View>
    <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
    <Text className="font-extrabold text-white text-lg">Rs{cartTotal}</Text>

   </TouchableOpacity>
</View>
  );
}

export default CartIcon;