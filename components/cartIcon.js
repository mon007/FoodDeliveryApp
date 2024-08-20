import { themeColors } from '@/themes';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Image,TouchableWithoutFeedback,Text, TouchableOpacity } from 'react-native';

function CartIcon() {
    const navigation = useNavigation();
  return (
<View className="absolute bottom-5 w-full z-50">
   <TouchableOpacity
    onPress={()=>navigation.navigate('CartScreen')}
    className="flex-row justify-between items-center mx-5 rounded-full px-4 py-3 shadow-lg"
    style={{backgroundColor: themeColors.bgColor(1)}}>
    <View className="p-2 px-4 rounded-full" style={{backgroundColor:'rgba(255,255,255,0.3)'}}>
        <Text className="font-extrabold text-white text-lg">3</Text>
    </View>
    <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
    <Text className="font-extrabold text-white text-lg">Rs{22}</Text>

   </TouchableOpacity>
</View>
  );
}

export default CartIcon;