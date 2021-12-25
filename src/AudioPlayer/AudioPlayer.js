import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image, TouchableOpacity, Animated, SafeAreaView, Platform } from 'react-native';
import TrackPlayer, { State } from 'react-native-track-player';
import { MyPlayerBar } from './progress';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons';
import FlatListStyle1 from '../FlatLists/FlatListStyle1';
import { Context } from '../Context/context';
import { styles } from './style';
import { isIOS } from '../Constants/Units'

export default class AudioPlayer extends React.Component {

    static contextType = Context;
    
    constructor() {
        super();
        this.state = {
          leftSeconds : 0,
          loading : true,
          endHour : '00', 
          endMinutes : '00',
          endSeconds : '00',
          startHour : '00', 
          startMinutes : '00',
          startSeconds : '00',
          position : 0,
          state : '',
          img : '',
          pauseORPlay : 'Play',
          controlBtnsOpacity : new Animated.Value(1),
          audioName : '',
          categoryName : '',
       }
    }

    loading = async () => {
      try{
        let state = await TrackPlayer.getState();
        console.log(state)
        console.log(State.None)
        let myState;
        let iosCondition = (state === State.None) ? true : false;
        let androidCondition = (state !== State.None.toString()) ? true : false;
        let condition = isIOS ? iosCondition : androidCondition;
        if(condition)
        this.setState({
          state,
          loading : false,
        })
        else{
          // await this.loading();
        }
      }catch{(err) => console.log(err)}
    }

    create_Hours_Minutes_Seconds = (position , duration) => {

      let endSec = Math.round(duration - position);
      
      let endHour   = Math.floor(endSec / 3600); // get endHour
      let endMinutes = Math.floor((endSec - (endHour * 3600)) / 60); // get endMinutes
      let endSeconds = endSec - (endHour * 3600) - (endMinutes * 60); //  get endSeconds
      // add 0 if value < 10; Example: 2 => 02
      if (endHour   < 10) {endHour   = "0"+endHour;}
      if (endMinutes < 10) {endMinutes = "0"+endMinutes;}
      if (endSeconds < 10) {endSeconds = "0"+endSeconds;}
      this.setState({
        endHour,
        endMinutes,
        endSeconds,
      })
      
      let startSec = Math.round(position);

      let startHour   = Math.floor(startSec / 3600); // get startHour
      let startMinutes = Math.floor((startSec - (startHour * 3600)) / 60); // get startMinutes
      let startSeconds = startSec - (startHour * 3600) - (startMinutes * 60); //  get startSeconds
      // add 0 if value < 10; Example: 2 => 02
      if (startHour   < 10) {startHour   = "0"+startHour;}
      if (startMinutes < 10) {startMinutes = "0"+startMinutes;}
      if (startSeconds < 10) {startSeconds = "0"+startSeconds;}
      this.setState({
        startHour,
        startMinutes,
        startSeconds,
      })

    }

    async componentDidMount (){
      await TrackPlayer.setupPlayer({})
      await this.loading();
      this.onPlay = TrackPlayer.addEventListener('remote-play', async () => {
        await TrackPlayer.play();
        this.setState({
          paused: false,
          stop: false,
        });
      });
  
      this.onStop = TrackPlayer.addEventListener('remote-stop', () =>
        TrackPlayer.destroy(),
      );

      this.onPause = TrackPlayer.addEventListener('remote-pause' , async () => {
        await TrackPlayer.pause();
      })

      try{
        await TrackPlayer.add(this.context.tracks);
        console.log(this.context.tracks)
        
        let trackIndex = await TrackPlayer.getCurrentTrack();
        console.log('trackIndex = ' + trackIndex)
        let trackObject;
        if(trackIndex !== null)
          trackObject = await TrackPlayer.getTrack(trackIndex);

        this.setState({
          audioName : trackObject.artist,
          categoryName : trackObject.album,
          img : trackObject.artwork
        })
        console.log(`Title: ${trackObject.title}`);
        console.log(`${duration - position} seconds left.`);

      }
      catch{(err) => console.log(err)}

      setInterval(async () => {
        let position = await TrackPlayer.getPosition();
        let duration = await TrackPlayer.getDuration();
        this.create_Hours_Minutes_Seconds(position , duration);
      } , 1000)

    }

    async componentWillUnmount() {
      this.onPlay.remove();
      this.onPause.remove();
      this.onStop.remove();
      this.setState = (state,callback)=>{
        return;
      };
      await TrackPlayer.stop();
      await TrackPlayer.removeUpcomingTracks();
    }

    controlBtnsOpacity = (opacityValue) => {
      console.log('opacity func' + opacityValue)
      Animated.timing(this.state.controlBtnsOpacity , {
        toValue : opacityValue,
        duration : 1000,
        useNativeDriver : true
      }).start()
    }
    
    play_pause = async  () => {
      const state = await TrackPlayer.getState();
      let conditionInIOS = (state === 'playing') ? true : false;
      let conditionInAndroid = (state === 3) ? true : false;
      let condition = isIOS ? conditionInIOS : conditionInAndroid;
      if(condition)
      {
        TrackPlayer.pause();
        this.setState({pauseORPlay : 'Play'})
        this.controlBtnsOpacity(1);
      }
      else
      {
        TrackPlayer.play();
        this.setState({pauseORPlay : 'Pause'})
        this.controlBtnsOpacity(0);
      }

      console.log(`state = ${state}`)
    }

    skipToNext = async () => {
      console.log('skip to next')
      try{
        let state = await TrackPlayer.getState();
        let conditionInIOS = (state === 'playing') ? true : false;
        let conditionInAndroid = (state === 3) ? true : false;
        let condition = isIOS ? conditionInIOS : conditionInAndroid;
        console.log(condition)
        if(condition)
        {
          console.log('skip to next inside if')
          TrackPlayer.pause();
          this.setState({pauseORPlay : 'Play'})
          this.controlBtnsOpacity(1);
        }
          await TrackPlayer.skipToNext();
          let trackIndex = await TrackPlayer.getCurrentTrack();
          let trackObject = await TrackPlayer.getTrack(trackIndex);
          this.setState({
            audioName : trackObject.artist,
            categoryName : trackObject.album,
            img : trackObject.artwork
          })
          
      }
      catch{(err) => console.log(err)}
    }

    skipToPrevious = async () => {
      try{
        let state = await TrackPlayer.getState();
        let conditionInIOS = (state === 'playing') ? true : false;
        let conditionInAndroid = (state === 3) ? true : false;
        let condition = isIOS ? conditionInIOS : conditionInAndroid;
        console.log(State.Playing)
        if(condition)
        {
          TrackPlayer.pause();
          this.setState({pauseORPlay : 'Play'})
          this.controlBtnsOpacity(1);
        }
        await TrackPlayer.skipToPrevious();
        let trackIndex = await TrackPlayer.getCurrentTrack();
        let trackObject = await TrackPlayer.getTrack(trackIndex);
        this.setState({
          audioName : trackObject.artist,
          categoryName : trackObject.album,
          img : trackObject.artwork
        })
      }
      catch{(err) => console.log(err)}
    }


    render()
    {
        return (
          <View style={styles.container}>
            <>
            {(this.state.loading) ? (
              <Text>loading = {this.state.loading}</Text>
            ) : (
              <View style={styles.AudioContainer}>
              <Image 
                 style={[styles.audioImg]} 
                 source={require('../images/images.jpeg')}
              />
              <TouchableOpacity 
                  style={styles.controlBtnsWithSlider2} 
                  onPress={() => this.controlBtnsOpacity(1) } 
              >
                  <Animated.View style={[styles.controlBtnsWithSlider,{opacity : this.state.controlBtnsOpacity}]}>
                    <View onPress={() => this.controlBtnsOpacity(1)} style={[styles.controlBtns]}>
                     <Icon style={styles.previous} onPress={() => this.skipToPrevious()} name="redo" size={50} color='#333' />
                     <TouchableOpacity style={styles.play} onPress={() => this.play_pause()}>
                       <Text style={styles.playTxt}>{this.state.pauseORPlay}</Text>
                     </TouchableOpacity>
                     <Icon style={styles.next} onPress={() => this.skipToNext()} name="redo" size={50} color='#333' />
                    </View>
                    <MyPlayerBar />
                    <>
                    {(this.state.endHour == '00') ? (
                      <View onPress={() => this.controlBtnsOpacity(1)} style={styles.timeContainer}>
                        <Text>{this.state.endMinutes}:{this.state.endSeconds}</Text>
                        <Text>{this.state.startMinutes}:{this.state.startSeconds}</Text>
                      </View>
                    ) : (
                      <View onPress={() => this.controlBtnsOpacity(1)} style={styles.timeContainer}>
                         <Text>{this.state.endHour}:{this.state.endMinutes}:{this.state.endSeconds}</Text>
                         <Text>{this.state.startHour}:{this.state.startMinutes}:{this.state.startSeconds}</Text>
                      </View>
                    )}
                    </>
                  </Animated.View>
              </TouchableOpacity>
              <View style={styles.cutPicLeft1}>
                <View style={styles.cutPicLeft2}></View>
              </View>
              <View style={styles.imgBottomCover}></View>
              <View style={[styles.cutPicRight1 ]}>
                <View style={[styles.cutPicRight2 ]}></View>
              </View>
              <SafeAreaView>
                <View style={styles.title}>
                   <Text style={styles.mainTitle}>{this.state.audioName}</Text>
                   <Text style={styles.subTitle}>{this.state.categoryName}</Text>
                </View>
                <Text style={styles.youMayAlsopLike} >You may also like</Text>
                <FlatListStyle1 tracks = {this.context.tracks} />
              </SafeAreaView>
            </View>
            )}
            </>
          </View>
        );  
    } 
}

