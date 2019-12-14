const songsReducer = () => {
  return [
    { title: 'Work it out', duration: '4:05'},
    { title: 'Don not let me down', duration: '5:30'},
    { title: 'Yesterday', duration: '3:15'},
    { title: 'She loves you', duration: '4:25'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};