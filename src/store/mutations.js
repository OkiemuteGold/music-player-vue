// STORE SONGS FROM API
export const GET_ALL_SONGS = (state, songs) => {
  state.songs = songs;
};

// STORE SONG TO CURRENT MUSIC
export const ADD_TO_CURRENT_SONG = (state, songs) => {
  state.current = state.songs[state.index];
  state.player.src = state.current.src;
};

// PLAY SONG
export const PLAY_SONG = (state, song) => {

  // CHECK IF SONG PARAMS IS DEFINED
  if (typeof song.src != "undefined") {
    if (state.current.src == song.src) {
      state.player.play();
    } else {
      state.current = song;
      state.player.src = state.current.src;
    }
  }

  state.player.play();

  // MUSIC ENDED, PLAY NEXT SONG
  state.player.addEventListener(
    "ended",
    function () {
      if (state.songs.length == 0) {
        state.player.pause();
        state.isPlaying = false;
        state.showNotificationMessage = true;
        state.notificationMessage = "No Song to Play";
        // Hide and Empty Notification after 3.2seconds
        setTimeout(() => {
          state.showNotificationMessage = false;
          state.notificationMessage = "";
        }, 3200);
        return;
      }
      if (state.repeatSong == true) {
        state.player.src = state.current.src;
        state.player.play();
      } else if (state.playRandomSong == true) {
        state.index = Math.floor(Math.random() * state.songs.length);
      } else {
        state.index++;
        if (state.index > state.songs.length - 1) {
          state.index = 0;
        }

        state.current = state.songs[state.index];
        state.player.src = state.current.src;
        state.player.play();
      }
    }.bind(state)
  );
  state.isPlaying = true;
};

// PAUSE SONG
export const PAUSE_SONG = (state) => {
  state.player.pause();
  state.isPlaying = false;
};

// NEXT SONG
export const NEXT_SONG = (state) => {
  if (state.songs.length == 0) {
    state.player.pause();
    state.isPlaying = false;
    state.showNotificationMessage = true;
    state.notificationMessage = "No Song to Play";
    // Hide and Empty Notification after 3.2seconds
    setTimeout(() => {
      state.showNotificationMessage = false;
      state.notificationMessage = "";
    }, 3200);
    return;
  }
  if (state.playRandomSong == true) {
    state.index = Math.floor(Math.random() * state.songs.length);
  }
  state.index++;
  if (state.index > state.songs.length - 1) {
    state.index = 0;
  }

  state.current = state.songs[state.index];
  state.player.src = state.current.src;
  if (state.isPlaying == true) {
    state.player.play();
  }
};

// PREVIOUS SONG
export const PREV_SONG = (state) => {
  state.index--;
  if (state.index < 0) {
    state.index = state.songs.length - 1;
  }

  state.current = state.songs[state.index];
  state.player.src = state.current.src;
  if (state.isPlaying == true) {
    state.player.play();
  }
};

// REPEAT SONG
export const REPEAT_SONG = (state) => {
  state.repeatSong = !state.repeatSong;
  // Set Notification to false and empty
  state.showNotificationMessage = false;
  state.notificationMessage = "";

  // Check the status of repeat song since we toggled the value
  if (state.repeatSong == true) {
    //If true, repeat song is ON
    state.showNotificationMessage = true;
    state.notificationMessage = "Repeat ON";
  } else {
    state.showNotificationMessage = true;
    state.notificationMessage = "Repeat OFF";
  }

  // Hide and Empty Notification after 3.2seconds
  setTimeout(() => {
    state.showNotificationMessage = false;
    state.notificationMessage = "";
  }, 3200);
};

// RANDOM SONG
export const PLAY_RANDOM_SONG = (state) => {
  state.playRandomSong = !state.playRandomSong;
  // Set Notification to false and empty
  state.showNotificationMessage = false;
  state.notificationMessage = "";

  // Check the status of repeat song since we toggled the value
  if (state.playRandomSong == true) {
    //If true, repeat song is ON
    state.showNotificationMessage = true;
    state.notificationMessage = "Random ON";
  } else {
    state.showNotificationMessage = true;
    state.notificationMessage = "Random OFF";
  }

  // Hide and Empty Notification after 3.2seconds
  setTimeout(() => {
    state.showNotificationMessage = false;
    state.notificationMessage = "";
  }, 3200);
};

// CHANGE VOLUME
export const CHANGE_VOLUME = (state, event) => {
  state.player.volume = event;
};


// DOWNLOAD_SONG
export const DOWNLOAD_SONG = (state, song) => {
  state.showNotificationMessage = true;
  state.notificationMessage = "Downloading " + song + "...";

  // Hide and Empty Notification after 3.2seconds
  setTimeout(() => {
    state.showNotificationMessage = false;
    state.notificationMessage = "";
  }, 4200);
};

// GET ALL ARTIST
export const GET_ALL_ARTIST = (state) => {
  state.songs.filter((song) => {
    var secondallartist = song.artist;
    secondallartist.filter((songOne) => {
      state.artists.push(songOne);
    });
  });
};

// SHOW HOMEPAGE
export const SHOW_HOME_PAGE = (state) => {
  state.showHome = true;
  state.showSearch = false;
  state.otherSearch = false;
  state.showPlaylist = false;
  state.showArtist = false;
  state.showFavourities = false;
  state.showBlacklist = false;
  state.showDeveloper = false;
  state.showPlaylistPropertise = false;
  state.searcInput = "";
  state.activePage = "home";
  state.openSortDiv = false;
  state.revealProperties = false;
  state.showPlayingSongPropertises = false;
  state.openSortDiv = false;
};

// SHOW ARTIST PAGE
export const SHOW_ARTIST_PAGE = (state) => {
  state.showHome = false;
  state.showSearch = false;
  state.otherSearch = false;
  state.showPlaylist = false;
  state.showArtist = true;
  state.showFavourities = false;
  state.showBlacklist = false;
  state.showDeveloper = false;
  state.showPlaylistPropertise = false;
  state.searcInput = "";
  state.activePage = "artist";
  state.openSortDiv = false;
  state.revealProperties = false;
  state.showPlayingSongPropertises = false;
  state.openSortDiv = false;
};

// SHOW ARTIST PAGE
export const SHOW_PLAYLIST_PAGE = (state) => {
  state.showHome = false;
  state.showSearch = false;
  state.otherSearch = false;
  state.showPlaylist = true;
  state.showArtist = false;
  state.showFavourities = false;
  state.showBlacklist = false;
  state.showDeveloper = false;
  state.showPlaylistPropertise = false;
  state.searcInput = "";
  state.activePage = "playlist";
  state.openSortDiv = false;
  state.revealProperties = false;
  state.showPlayingSongPropertises = false;
  state.openSortDiv = false;
};

// SHOW BLACKLIST PAGE
export const SHOW_BLACKLIST_PAGE = (state) => {
  state.showHome = false;
  state.showSearch = false;
  state.otherSearch = false;
  state.showPlaylist = false;
  state.showArtist = false;
  state.showFavourities = false;
  state.showDeveloper = false;
  state.showBlacklist = true;
  state.showPlaylistPropertise = false;
  state.searcInput = "";
  state.activePage = "blacklist";
  state.openSortDiv = false;
  state.revealProperties = false;
  state.showPlayingSongPropertises = false;
  state.openSortDiv = false;
};

// SHOW FAVOURITE PAGE
export const SHOW_FAVOURITE_PAGE = (state) => {
  state.showHome = false;
  state.showSearch = false;
  state.otherSearch = false;
  state.showPlaylist = false;
  state.showArtist = false;
  state.showFavourities = true;
  state.showBlacklist = false;
  state.showDeveloper = false;
  state.showPlaylistPropertise = false;
  state.searcInput = "";
  state.activePage = "favourite";
  state.openSortDiv = false;
  state.revealProperties = false;
  state.showPlayingSongPropertises = false;
  state.openSortDiv = false;
};

// SHOW DEVELOPER'S PAGE
export const SHOW_DEVELOPER_PAGE = (state) => {

  state.showDeveloper = true;
  state.showHome = false;
  state.showSearch = false;
  state.otherSearch = false;
  state.showPlaylist = false;
  state.showArtist = false;
  state.showFavourities = false;
  state.showBlacklist = false;
  state.showPlaylistPropertise = false;
  state.searcInput = "";
  state.activePage = "Developer";
  state.openSortDiv = false;
  state.revealProperties = false;
  state.showPlayingSongPropertises = false;
  state.openSortDiv = false;
};

// ADD SONG AS FAVOURITE
export const ADD_AS_FAVOURITE = (state, song) => {
  state.openSortDiv = false;
  state.showNotificationMessage = false;
  state.notificationMessage = " ";
  let inFavourite = state.songs.find((item) => {
    return item.id == song.id;
  });

  if (inFavourite) {
    inFavourite.favourite = !inFavourite.favourite;
    if (inFavourite.favourite == true) {
      state.showNotificationMessage = true;
      state.notificationMessage = " Added to Favourite";
    } else if (inFavourite.favourite == false) {
      state.showNotificationMessage = true;
      state.notificationMessage = "Removed from Favourite";
    }

    // HIDE NOTIFICATON AFTER 3.2SECONDS
    setTimeout(() => {
      state.showNotificationMessage = false;
      state.notificationMessage = "";
    }, 3200);
    return;
  }
};

// OPEN PLAYLIST PROPERTISE
export const OPEN_PLAYLIST_PROPERTISE = (state, song) => {
  state.showPlaylistPropertise = false;
  state.openSortDiv = false;
  setTimeout(() => {
    state.showPlaylistPropertise = true;
  }, 700);

  state.songPropertise = song;
};

// CLOSE PLAYLIST PROPERTISE
export const CLOSE_PLAYLIST_PROPERTISE = (state) => {
  state.showPlaylistPropertise = false;
  state.openSortDiv = false;
  state.revealProperties = false;
  state.showPlayingSongPropertises = false;
};

// SHOW_PLAYING_SONG_PROPERTISES
export const SHOW_PLAYING_SONG_PROPERTISES = (state) => {
  state.showPlayingSongPropertises = !state.showPlayingSongPropertises;
  state.openSortDiv = false;
};

// OPEN SORT DIV
export const OPEN_SORT_DIV = (state) => {
  state.openSortDiv = !state.openSortDiv;
  state.showPlaylistPropertise = false;
  state.revealProperties = false;
  state.showPlayingSongPropertises = false;
};

// CLOSE SORT DIV
export const CLOSE_SORT_DIV = (state) => {
  state.openSortDiv = false;
};

// SHOW_CURRENT_SONG_PROPERTIES
export const SHOW_CURRENT_SONG_PROPERTIES = (state) => {
  state.revealProperties = true;
  state.showPlayingSongPropertises = false;
  state.openSortDiv = false;
};

// HIDE_CURRENT_SONG_PROPERTIES
export const HIDE_CURRENT_SONG_PROPERTIES = (state) => {
  state.revealProperties = false;
  state.showPlayingSongPropertises = false;
  state.openSortDiv = false;
};

// SHOW PLAYING MUSIC
export const SHOW_PLAYING_MUSIC = (state) => {
  state.showPlayingMusics = true;
  state.showPlaylistPropertise = false;
  state.openSortDiv = false;
};

// SHOW PLAYING MUSIC
export const REMOVE_PLAYING_MUSIC = (state) => {
  state.showPlayingMusics = false;
  state.showPlaylistPropertise = false;
};

// DELETE A SONG
export const DELETE_SONG = (state, song) => {
  if (state.showHome == true) {
    state.blackist.push(song);
    state.songs = state.songs.filter((item) => {
      return item.id !== song.id;
    });

    state.showNotificationMessage = false;
    state.notificationMessage = "";
    setTimeout(() => {
      state.showNotificationMessage = true;
      state.notificationMessage = "song deleted";
    }, 700);

    setTimeout(() => {
      state.showNotificationMessage = false;
      state.notificationMessage = "";
    }, 3200);
    return;
  }

  if (state.showFavourities == true) {
    let inFavourite = state.songs.find((item) => {
      return item.id == song.id;
    });

    if (inFavourite) {
      inFavourite.favourite = false;
      state.showNotificationMessage = false;
      state.notificationMessage = "";
      setTimeout(() => {
        state.showNotificationMessage = true;
        state.notificationMessage = "song deleted";
      }, 700);

      setTimeout(() => {
        state.showNotificationMessage = false;
        state.notificationMessage = "";
      }, 3200);
      return;
    }

    return;
  }

  if (state.showBlacklist == true) {
    // state.song.push(song);
    state.songs.push(song);
    state.blackist = state.blackist.filter((item) => {
      return item.id !== song.id;
    });

    state.showNotificationMessage = false;
    state.notificationMessage = "";
    setTimeout(() => {
      state.showNotificationMessage = true;
      state.notificationMessage = "song deleted";
    }, 700);

    setTimeout(() => {
      state.showNotificationMessage = false;
      state.notificationMessage = "";
    }, 3200);

    return;
  }
};

// SEARCH SONGS
export const SEARCH_SONGS = (state, song) => {
  state.loading = true;
  state.search = [];

  // ONLY SEARCH IF CURRENT PAGE IS FAVOURITE
  if (state.activePage == "favourite") {
    let Favourite = state.songs.filter((favourities) => {
      return favourities.favourite == true;
    });

    if (Favourite) {
      let inFavourite = Favourite.filter((music) => {
        return music.title.toLowerCase().indexOf(song) >= 0;
      });
      state.search = inFavourite;
      state.showFavourities = false;
      state.showSearch = true;
      state.loading = false;
      return;
    }
    state.search = [];
    state.showFavourities = false;
    state.showSearch = true;
    state.loading = false;
    return;
  }

  // ONLY SEARCH IF CURRENT PAGE IS BLACKLIST
  if (state.activePage == "blacklist") {
    if (state.blackist.length > 0) {
      let inBlackist = state.blackist.filter((v, i) => {
        if (
          v.title.toLowerCase().indexOf(song) >= 0 ||
          v.src.toLowerCase().indexOf(song) >= 0
        ) {
          return true;
        } else false;
      });

      if (inBlackist) {
        state.search = inBlackist;
        state.loading = false;
        state.showSearch = true;
        state.showBlacklist = false;
        return;
      }
    }

    state.search = [];
    state.loading = false;
    state.showSearch = true;
    state.showBlacklist = false;

    return;
  }

  // ONLY SEARCH IF CURRENT PAGE IS ARTIST

  if (state.activePage == "artist") {
    let allArtist = state.artists.filter((artist) => {
      return state.artists.lastIndexOf(artist) == state.artists.indexOf(artist);
    });

    let searchArtist = allArtist.filter((music) => {
      return music.toLowerCase().indexOf(song) >= 0;
    });

    if (searchArtist) {
      state.search = searchArtist;
      state.loading = false;
      state.otherSearch = true;
      state.showArtist = false;
      return;
    }
    state.search = [];
    state.loading = false;
    state.otherSearch = true;
    state.showArtist = false;

    return;
  }

  // ONLY SEARCH IF CURRENT PAGE IS HOME
  if (state.activePage == "home") {
    let searchByTitle = state.songs.filter((v, i) => {
      if (
        v.title.toLowerCase().indexOf(song) >= 0 ||
        v.src.toLowerCase().indexOf(song) >= 0
      ) {
        return true;
      } else false;
    });

    // STORE SEARCH RESULT IN STATE IF THERE'S ANY RESULT
    if (searchByTitle.length > 0) {
      state.search = searchByTitle;
      state.loading = false;
      state.showSearch = true;
      state.showHome = false;
      return;
    } else {
      state.search = [];
      state.showSearch = true;
      state.loading = false;
      state.showHome = false;
    }

    return;
  }
  state.loading = false;
};


// GET SONGS BY ARTIST
export const GET_ARTIST_SONG = (state, song) => {
  let ArtsistName = song.toLowerCase()
  let artistSong = state.songs.filter((music) => {
    return music.title.toLowerCase().includes(ArtsistName) || music.src.toLowerCase().includes(ArtsistName)
  });


  // STORE SEARCH IN STATE IF THERE'S ANY RESULT
  if (artistSong.length > 0) {
    state.search = artistSong;
    state.loading = false;
    state.showSearch = true;
    state.showHome = false;
    state.showArtist = false;
    return;
  } else {
    state.search = [];
    state.showSearch = true;
    state.loading = false;
    state.showHome = false;
    state.showArtist = false;
  }
};

// SORT MUSIC BY TITLE
export const SORT_BY_TITLE = (state) => {
  state.sortByTitle = true;
  state.sortByDate = false;
  state.sortByArtist = false;
  state.sortByRandom = false;
};

// SORT BY RANDOM
export const SORT_BY_RANDOM = (state) => {
  state.sortByTitle = false;
  state.sortByDate = false;
  state.sortByArtist = false;
  state.sortByRandom = true;
};

// SORT BY DATE
export const SORT_BY_DATE_CREATED = (state) => {
  state.sortByTitle = false;
  state.sortByDate = true;
  state.sortByArtist = false;
  state.sortByRandom = false;
};

// SORT BY ARTIST
export const SORT_BY_ARTIST = (state) => {
  state.sortByTitle = false;
  state.sortByDate = false;
  state.sortByArtist = true;
  state.sortByRandom = false;
};

export const TOGGLE_ASCENDING = (state) => {
  state.ascending = !state.ascending;
};