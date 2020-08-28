import React,{useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button} from 'react-native'
import Home from './Components/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import WorkTrips from './Components/WorkTrips'
import Trainings from './Components/Trainings'

const App=()=>{
  const Tab = createBottomTabNavigator();
  return(
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="WorkTrips" component={WorkTrips} />
      <Tab.Screen name="Trainings" component={Trainings} />
    </Tab.Navigator>
  </NavigationContainer>
  )

}
const styles=StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },
  
})
export default App;
