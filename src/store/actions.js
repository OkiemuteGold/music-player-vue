import allSongs from "../api/songs";

// GET PRODUCTS FROM API
let songs = allSongs.songs();

// GET ALL SONGS
export const getAllSongs = ({
  commit
}) => {
  commit("GET_ALL_SONGS", songs);
};

// ADD TO CURENT SONG
export const addToCurrentSong = ({
  commit
}) => {
  commit("ADD_TO_CURRENT_SONG", songs);
};

// PLAY SONG
export const playSong = ({
  commit
}, song) => {
  commit("PLAY_SONG", song);
};
// PAUSE SONG
export const pauseSong = ({
  commit
}) => {
  commit("PAUSE_SONG");
};
// NEXT SONG
export const nextSong = ({
  commit
}) => {
  commit("NEXT_SONG");
};

// PREVIOUS SONG
export const prevSong = ({
  commit
}) => {
  commit("PREV_SONG");
};

// REPEAT SONG
export const repeatSong = ({
  commit
}) => {
  commit("REPEAT_SONG");
};

// RANDOM SONG
export const playRandomSong = ({
  commit
}) => {
  commit("PLAY_RANDOM_SONG");
};

// OPEN SORTING
export const openSortDiv = ({
  commit
}) => {
  commit("OPEN_SORT_DIV");
};

// CLOSE SORTING
export const closeSortDiv = ({
  commit
}) => {
  commit("CLOSE_SORT_DIV");
};

// GET ALL ARTIST
export const getAllArtist = ({
  commit
}) => {
  commit("GET_ALL_ARTIST");
};

// SHOW HOMEPAGE
export const showHomePage = ({
  commit
}) => {
  commit("SHOW_HOME_PAGE");
};

// SHOW ARTIST PAGE
export const showArtistPage = ({
  commit
}) => {
  commit("SHOW_ARTIST_PAGE");
};

// SHOW PLAYLIST PAGE
export const showPlaylistPage = ({
  commit
}) => {
  commit("SHOW_PLAYLIST_PAGE");
};

// SHOW BLACKLIST PAGE
export const showBlacklistPage = ({
  commit
}) => {
  commit("SHOW_BLACKLIST_PAGE");
};

// SHOW FAVOURITE PAGE
export const showFavouritePage = ({
  commit
}) => {
  commit("SHOW_FAVOURITE_PAGE");
};

// SHOW DEVELOPER PAGE
export const showDeveloperPage = ({
  commit
}) => {
  commit("SHOW_DEVELOPER_PAGE");
};

// ADD SONGS AS FAVOURITES
export const addAsFavourite = ({
  commit
}, song) => {
  commit("ADD_AS_FAVOURITE", song);
};

// GET ARTIST SONGS
export const getArtistSong = ({
  commit
}, song) => {
  commit("GET_ARTIST_SONG", song);
};

// CHANGE VOLUME
export const changeVolume = ({
  commit
}, event) => {
  commit("CHANGE_VOLUME", event);
};

// SEARCH SONGS
export const searchSongs = ({
  commit
}, song) => {
  commit("SEARCH_SONGS", song);
};

// DELETE SONGS
export const deleteSong = ({
  commit
}, song) => {
  commit("DELETE_SONG", song);
};

// OPEN PLAYLIST PROPERTISE
export const openPlaylistPropertise = ({
  commit
}, song) => {
  commit("OPEN_PLAYLIST_PROPERTISE", song);
};

// CLOSE PLAYLIST PROPERTISE
export const closePlaylistPropertise = ({
  commit
}) => {
  commit("CLOSE_PLAYLIST_PROPERTISE");
};

// SHOW PLAYING MUSIC
export const showPlayingMusic = ({
  commit
}) => {
  commit("SHOW_PLAYING_MUSIC");
};

// REMOVE PLAYING MUSIC
export const removePlayingMusics = ({
  commit
}) => {
  commit("REMOVE_PLAYING_MUSIC");
};

// SHOW PLAYING SONG PROPERTISE
export const showPlayingMusicPropertises = ({
  commit
}) => {
  commit("SHOW_PLAYING_SONG_PROPERTISES");
};

// SHOW PLAYING SONG PROPERTISE
export const showCurrentSongProperties = ({
  commit
}) => {
  commit("SHOW_CURRENT_SONG_PROPERTIES");
};

// HIDE PLAYING SONG PROPERTISE
export const hideCurrentSongProperties = ({
  commit
}) => {
  commit("HIDE_CURRENT_SONG_PROPERTIES");
};

// DOWNLOAD_SONG
export const dowloadSong = ({
  commit
}, song) => {
  commit("DOWNLOAD_SONG", song);
};

// SORT MUSIC BY TITLE
export const sortByTitle = ({
  commit
}) => {
  commit("SORT_BY_TITLE");
};

// ASCENDING / DESENDING 
export const toggleAscending = ({
  commit
}) => {
  commit("TOGGLE_ASCENDING");
};

// SORT MUSIC BY RANDOM
export const sortByRandom = ({
  commit
}) => {
  commit("SORT_BY_RANDOM");
};

// SORT MUSIC BY MODIFIED DATE
export const sortByDateCreated = ({
  commit
}) => {
  commit("SORT_BY_DATE_CREATED");
};

// SORT MUSIC BY ARTIST
export const sortByArtist = ({
  commit
}) => {
  commit("SORT_BY_ARTIST");
};