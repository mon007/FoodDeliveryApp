import { themeColors } from '@/themes';
import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import RestuarantCard from './restuarantCard';

function FeaturedRow({title, description, restuarants}) {
  return (
  <View>
    <View className = "flex-row justify-between items-center p-4">
        <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color:themeColors.text}} className=""font-semibold>See All</Text>
        </TouchableOpacity>
    </View>
    <ScrollView 
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15
        }}
        className="overflow-visible py-5">
            {
                restuarants.map((restuarant, index)=>{
                    return(
                       <RestuarantCard
                       item={restuarant}
                       key = {index}/>
                    )
                })
            }
    </ScrollView>
   
  </View>
  );
}

export default FeaturedRow;