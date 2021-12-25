import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../Context/context';

export default class VideoPlayer extends React.Component {

  static contextType = Context;

    constructor() {
        super();
    }
    render()
    {
        return (
            <Text>VideoPlayer</Text>
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
