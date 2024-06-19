import { StatusBar } from 'expo-status-bar';
import { View, Text, ScrollView,  FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/Searchinput'


const Home = () => {
  return (
    <SafeAreaView className ="bg-primary w-full h-full">
     <ScrollView contentContainerStyle={{ height: '100%'}}>

        <SearchInput/>
        <Text style={{ flex: 0.1, fontWeight: 'bold', color: 'white' }}>Welcome back</Text>
        
       
        
  
       


       </ScrollView>
    </SafeAreaView>
  )
}

export default Home