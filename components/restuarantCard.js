import { themeColors } from '@/themes';
import { useNavigation } from 'expo-router';
import * as React from 'react';
import { View, Image,TouchableWithoutFeedback,Text } from 'react-native';
import * as Icon from "react-native-feather";

function RestuarantCard({item}) {
    const navigation = useNavigation();
  return (
 <TouchableWithoutFeedback
    onPress={()=>navigation.navigate('Restuarant',{...item})}>
    <View className = "mr-6 bg-gray-100 rounded-3xl shadow-lg" style={{shadowColor:themeColors.bgColor(0.8),shadowRadius:7}}>
        <Image className="h-36 w-40 rounded-t-3xl" source = {item.image}/>
        <View className="px-3 pb-4 space-y-2">
            <Text className = "text-lg font-bold pt-2">
                {item.name}
            </Text>
            <View className="flex-row items center space-x-1">
                <Text className="text-gray-700">
                    ({item.reviews}review) . <Text className="font-semibold">{item.category}</Text>
                </Text>

</View>
<View className="flex-row items-center space-x-1">
    <Icon.MapPin color="gray" height="15" width="15"/>
    <Text className="text-gray-700 text-xs">{item.address}</Text>

</View>
        </View>
       
    </View>
 </TouchableWithoutFeedback>
  );
}

export default RestuarantCard;