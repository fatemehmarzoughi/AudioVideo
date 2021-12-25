import TrackPlayer, { useProgress, State } from 'react-native-track-player';
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Slider from '@react-native-community/slider';
import { styles } from './style';

export const MyPlayerBar = () => {
    // let trackIndex = await TrackPlayer.getCurrentTrack();
    // let trackObject = await TrackPlayer.getTrack(trackIndex);
    // const context = useContext(Context)

    // if(progress.buffered == trackObject.duration)
    // {
    //     context.changeLoadingStateToFalse();
    // }
    const progress = useProgress()
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
                   step={0}
                   onValueChange={async (val) => {
                    const state = await TrackPlayer.getState();
                    console.log(state === State.Playing)
                    if(state === State.Playing)
                    {
                        await TrackPlayer.pause();
                        await TrackPlayer.seekTo(val);
                        await TrackPlayer.play();
                    }
                    else
                    {
                     await TrackPlayer.seekTo(val);
                    }
                  }}
                />

            </View>
    );

}