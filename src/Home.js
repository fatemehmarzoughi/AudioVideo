import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
    constructor() {
        super();
    }
    render()
    {
        return (
            <View style={styles.container}>
                <Text onPress={() => this.props.navigation.navigate('AudioPlayer')}>AudioPlayer</Text>
                <Text></Text>
                <Text></Text>
                <Text onPress={() => this.props.navigation.navigate('VideoPlayer')}>VideoPlayer</Text>
            </View>
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
