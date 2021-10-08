import TrackPlayer, { useProgress } from 'react-native-track-player';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Dimensions} from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './style';

export const MyPlayerBar = () => {
    const progress = useProgress();
    // let trackIndex = await TrackPlayer.getCurrentTrack();
    // let trackObject = await TrackPlayer.getTrack(trackIndex);
    // const context = useContext(Context)

    // if(progress.buffered == trackObject.duration)
    // {
    //     context.changeLoadingStateToFalse();
    // }

    return (
            <View style={styles.SliderContainer}>
                {/* <Text>{progress.buffered}</Text>
                <Text>{progress.position}</Text> */}

                <Slider
                   style={styles.slider}
                   minimumValue={0}
                   maximumValue={progress.buffered}
                   minimumTrackTintColor="purple"
                   maximumTrackTintColor="gray"
                   thumbTintColor="purple"
                   value={progress.position}
                   step={0.5}
                   onValueChange={async (val) => {
                    const state = await TrackPlayer.getState();
                    if(state === State.Playing)
                    {
                        TrackPlayer.pause();
                        TrackPlayer.seekTo(val);
                        TrackPlayer.play();
                    }
                    else
                    {
                     TrackPlayer.seekTo(val);
                    }
                  }}
                />

            </View>
        );

}