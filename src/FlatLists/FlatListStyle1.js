import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { h3_Size, windowWidth } from '../Constants/Units';

export default class FlatListStyle1 extends React.Component{

    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <FlatList
            style={styles.flatlist}
            data={this.props.tracks}
            keyExtractor={(items, index) => index.toString()}
            renderItem = { ({item}) => (

                <TouchableOpacity style={styles.rowView} onPress={() => alert(`pressed ${item.id}`)}>
                  <View style={styles.rowViewImageAndName}>
                    <Image style={styles.flatListImg} source={require('../images/images.jpeg')} />
                    <View style={styles.titles}>
                       <Text style={styles.firstTitle}>{item.title}</Text>
                       <Text style={styles.secondTitle}>{item.album}</Text>
                    </View>
                  </View>
                  <Icon name="chevron-right" size={35} color='#333' />
                </TouchableOpacity>

            )}
           />
        )
    }
} 

const styles = StyleSheet.create({
    flatlist : {
        marginTop : 20,
      },
      flatListImg : {
        width : 80,
        height : 60,
        borderRadius : 5,
      },
      rowView : {
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        width : windowWidth - 20,
        marginRight : 10,
        marginLeft : 10,
        flexDirection : 'row',
        borderBottomColor : '#333',
        borderStyle : 'solid',
        borderBottomWidth : 0.25,
      },
      rowViewImageAndName: {
        display : 'flex',
        alignItems : 'flex-start',
        justifyContent : 'space-between',
        margin : 10,
        flexDirection : 'row',
      },
      titles : {
        marginLeft : 5,
      },
      firstTitle : {
        fontWeight : 'bold',
        fontSize : h3_Size,
        marginBottom : 3,
      },
})