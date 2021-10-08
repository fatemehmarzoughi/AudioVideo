import React from 'react';

export const Context = React.createContext({
    loading : false,
    changeLoadingStateToTrue : () => {},
    changeLoadingStateToFalse : () => {},
    tracks : [
        {
          id: '1',
          url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
          title: 'Keys of moon',
          artist: 'The Epic Hero',
          artwork: 'https://picsum.photos/id/1003/200/300',
          album: 'Birds in the sky',
          duration: 149,
        },
        {
          id: '2',
          url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
          title: 'Keys of moon2',
          artist: 'The Epic Hero2',
          artwork: 'https://picsum.photos/id/1003/200/300',
          album: 'Birds in the sky',
          duration: 149,
        },
      ],
})