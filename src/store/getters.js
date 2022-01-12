// GET SONGS
export const getSongs = (state) => {
  return state.songs;
};

// GET SEARCH RESULT
export const getSearch = (state) => {
  return state.search;
};

// SHOW SEARCH PAGE
export const showSearch = (state) => {
  return state.showSearch;
};
// GET SEARCH INPUT VALUE
export const searcInput = (state) => {
  return state.searcInput;
};
// STATE LOADING
export const loading = (state) => {
  return state.loading;
};

// GET FAVOURITE SONGS
export const getfavourites = (state) => {
  return state.songs.filter((favourities) => favourities.favourite == true);
};

// GET STATE MUSIC REPEATING STATUS
export const isRepeatSong = (state) => {
  return state.repeatSong;
};

// GET STATE RANDOM MUSIC STATUS
export const isRandomSong = (state) => {
  return state.playRandomSong;
};

// GET FAVOURITE MUSIC STATUS
export const getFavouriteColor = (state) => {
  return (isAvaliable) => {
    return state.songs.filter((item) => item.id == isAvaliable.id);
  };
};

// GET BLACKLIST 
export const getBlacklists = (state) => {
  return state.blackist;
};

// GET SHOW PLAYING MUSIC
export const showPlayingMusics = (state) => {
  return state.showPlayingMusics;
};

// GET CURRENT PLAYING SONG PROPERTIES
export const showPlayingSongPropertises = (state) => {
  return state.showPlayingSongPropertises;
};

// REVEAL MUSIC PROPERTISE
export const revealProperties = (state) => {
  return state.revealProperties;
};

// SHOW HOMEPAGE
export const showHome = (state) => {
  return state.showHome;
};

// SHOW PLAYLIST
export const showPlaylist = (state) => {
  return state.showPlaylist;
};

// SHOW ARTIST
export const showArtist = (state) => {
  return state.showArtist;
};

// SHOW BLACKLIST
export const showBlacklist = (state) => {
  return state.showBlacklist;
};

// SHOW DEVELOPER PAGE
export const showDeveloper = (state) => {
  return state.showDeveloper;
};
// SHOW ARTIST SEARCH RESULT
export const otherSearch = (state) => {
  return state.otherSearch;
};
// OPEN SORTING CONTAINER
export const openSortDiv = (state) => {
  return state.openSortDiv;
};

// SHOW FAVOURITES PAGE
export const showFavourities = (state) => {
  return state.showFavourities;
};

// SHOW PLAYLIST PROPERTIES
export const showPlaylistPropertise = (state) => {
  return state.showPlaylistPropertise;
};

// SONG PROPERTIES
export const songPropertise = (state) => {
  return state.songPropertise;
};

// GET CURRENT SONG
export const current = (state) => {
  return state.current;
};

// GET MUSIC PLAYING STATUS
export const isPlaying = (state) => {
  return state.isPlaying;
};

// GET ARTIST PAGE
export const getArtist = (state) => {
  return state.artists.filter((artist) => {
    return state.artists.lastIndexOf(artist) == state.artists.indexOf(artist);
  });
};


// GET ARTIST NUMBER OF SONGS
export const getArtistNoOfSongs = (state) => {
  return (songNo) => {
    return state.songs.filter((song) => song.artist == songNo);
  };
};

// GET NOTIFICATION MESSAGE
export const notificationMessage = (state) => {
  return state.notificationMessage;
};

// GET CURRENT PAGE NAME AND MUSIC COUNT
export const getCurrentPageName = (state) => {
  let count = null;
  var getCount = state.songs.length;
  var theName = "Search Songs (" + getCount + ")";

  if (state.showFavourities == true) {
    count = state.songs.filter((favourities) => favourities.favourite == true);
    getCount = count.length;

    theName = "Search Favourite (" + getCount + ")";
  } else if (state.showBlacklist == true) {
    getCount = state.blackist.length;
    theName = "Search Blacklists (" + getCount + ")";
  } else if (state.showPlaylist == true) {
    getCount = state.playList.length;
    theName = "Search Playlist (" + getCount + ")";
  } else if (state.showArtist == true) {
    getCount = state.artists.length;
    theName = "Search Artist (" + Math.trunc(getCount / 2) + ")";
  } else {
    getCount = state.songs.length;
    theName = "Search Songs (" + getCount + ")";
  }

  return theName;
};