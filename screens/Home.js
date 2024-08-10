import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Icon from "react-native-feather";
import {themeColors} from "../themes";
import Categories from "../components/Categories";

export default function Home() {
  return (
  <SafeAreaView className="bg-white">
    <StatusBar className="dark-content"/>
            {/* status bar*/}
        <View className="flex-row items-center space-x-2 px-4 pb-8">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300 ">
                <Icon.Search width="25" height="25" stroke="gray"/>
                <TextInput placeholder='Search here' className="ml-2 mr-2 flex-1"/>
                <View className="flex-row items-center space-x-1 border-6 border-l-2 pl-2 border-gray-300 ">
                    <Icon.MapPin height="20" width="20" stroke="gray"/>
                    <Text className="text-gray-600">Duliajan , Assam</Text>
                    </View>
            </View>
            <View style={{backgroundColor: themeColors.bgColor(1)}}className="p-3 rounded-full">
                <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="gray"/>
            </View>
        </View>

            {/* Categories */}
            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingBottom:20}}>
                <Categories/>

            </ScrollView>


  </SafeAreaView>
  );
}
