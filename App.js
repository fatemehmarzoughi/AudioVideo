import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import VideoPlayer from './src/VideoPlayer/VideoPlayer';
import AudioPlayer from './src/AudioPlayer/AudioPlayer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ContextProvider from './src/Context/contextProviider';
const Stack = createStackNavigator();

export default class App extends React.Component{
  constructor(){
    super();

  }
  render(){
    return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
           name = "Home"
           component = {Home}
          />
          <Stack.Screen
           name = "AudioPlayer"
           component = {AudioPlayer}
          />
          <Stack.Screen
           name = "VideoPlayer"
           component = {VideoPlayer}
          />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
