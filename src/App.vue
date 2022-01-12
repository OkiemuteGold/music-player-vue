<template>
  <div id="app">
    <Header />
    <NavigationPages />
    <MusicControls />
    <Sort />
    <AddToPlaylistForm />
    <ShowPlayingMusic />
    <Loading v-if="loading" />
    <ShowPlaylistPropertise v-if="showPlaylistPropertise" />
    <Nofication :class="(notificationStatus) ? 'bounceInLeft' : ''" />
  </div>
</template>

<script>
import "./assets/css/style.css";
import Header from "./components/Header.vue";
import NavigationPages from "./components/NavigationPages";
import MusicControls from "./components/MusicControls";
import Sort from "./components/Sort";
import AddToPlaylistForm from "./components/AddToPlaylistForm";
import ShowPlayingMusic from "./components/ShowPlayingMusic";
import Loading from "./components/Loading";
import ShowPlaylistPropertise from "./components/ShowPlaylistPropertise";
import Nofication from "./components/Notification";

export default {
  name: "App",
  components: {
    Header,
    NavigationPages,
    MusicControls,
    Sort,
    Loading,
    AddToPlaylistForm,
    ShowPlayingMusic,
    ShowPlaylistPropertise,
    Nofication
  },
  computed: {
    showPlaylistPropertise() {
      return this.$store.getters.showPlaylistPropertise;
    },
    showPlayingMusics() {
      return this.$store.getters.showPlayingMusics;
    },

    loading() {
      return this.$store.state.loading;
    },
    notificationStatus() {
      return this.$store.state.showNotificationMessage;
    }
  },
  methods: {
    getAllSongs: function() {
      this.$store.dispatch("getAllSongs");
    },
    getAllArtist: function() {
      this.$store.dispatch("getAllArtist");
    },
    addToCurrentSong: function() {
      this.$store.dispatch("addToCurrentSong");
    }
  },
  created() {
    // GET ALL SONGS WHEN COMPONENT LOADS
    this.getAllSongs();
    this.getAllArtist();
    this.addToCurrentSong();
  }
};
</script>

<style>
#app {
  background: rgba(0, 0, 0, 0.6);
  color: var(--mainWhite);
  width: 590px;
  margin: 0px auto;
}

@media screen and (max-width: 529px) {
  #app {
    width: 100%;
    margin: 0px;
  }
}
</style>
