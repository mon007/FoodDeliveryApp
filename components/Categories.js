import {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import {categories} from '../constants/index';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);
  return (
  <View className = "mt-4">
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="overflow-visible"
      contentContainerStyle={
        {
          paddingHorizontal:15
        }
      }>
{
  categories.map((category, index) => {
    let isActive = category.id === activeCategory;
    let btnClass = isActive ? 'p-1 rounded-full shadow bg-gray-200 bg-gray-600' : 'p-1 rounded-full shadow bg-gray-200 bg-gray-200';
    let txtClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-200';
    return (
      <View key={index} className=" flex justify-center items-center mr-6">
        <TouchableOpacity className={btnClass} onPress={()=>setActiveCategory(category.id)}>
          <Image style={{height:45, width:45}} source={category.image}/>
        </TouchableOpacity>
        <Text className={"text-sm" + txtClass}>{category.name}</Text>
      </View>
    )

  })
}
    </ScrollView>
   
  </View>
  );
}

export default Categories;