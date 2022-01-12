<template>
  <div class="playlist_propertise">
    <!-- <div class="playlist_icons">
      <i class="fa fa-plus"></i>
      <span>Add to playlist</span>
    </div>-->
    <div class="playlist_icons" @click="addAsFavourite()">
      <i class="fa fa-heart-o"></i>
      <span>{{(songPropertise.favourite == true) ? 'Remove from favourite' : 'Add to favourite'}}</span>
    </div>
    <div class="playlist_icons showCurrentMusic" @click="showPlayingMusic">
      <i class="fa fa-eye"></i>
      <span>Now Playing</span>
    </div>
    <div class="playlist_icons" @click="playSong()" v-if="!isPlaying">
      <i class="fa fa-play"></i>
      <span>Play</span>
    </div>
    <div class="playlist_icons" @click="pauseSong" v-else>
      <i class="fa fa-pause"></i>
      <span>Pause</span>
    </div>

    <a
      :href="songPropertise.src"
      :download="songPropertise.title"
      class="playlist_icons"
      style="display: block; color: #fff;"
      @click="dowloadSong"
    >
      <i class="fa fa-download"></i>
      <span>Download</span>
    </a>

    <div class="playlist_icons" @click="deleteSong()">
      <i class="fa fa-trash"></i>
      <span>Remove</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowPlaylistPropertise",
  computed: {
    songPropertise() {
      return this.$store.getters.songPropertise;
    },
    showBlacklist() {
      return this.$store.getters.showBlacklist;
    },
    current() {
      return this.$store.getters.current;
    },
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    isPlaying() {
      if (this.$store.state.isPlaying == true) {
        return this.songPropertise.src == this.current.src ? true : false;
      }
    }
  },
  methods: {
    addAsFavourite: function() {
      this.$store.dispatch("addAsFavourite", this.songPropertise);
      this.closePlaylistPropertise();
    },
    deleteSong: function() {
      this.$store.dispatch("deleteSong", this.songPropertise);
      this.closePlaylistPropertise();
    },
    closePlaylistPropertise: function() {
      this.$store.dispatch("closePlaylistPropertise");
    },
    showPlayingMusic: function() {
      this.$store.dispatch("showPlayingMusic");
    },
    playSong: function() {
      this.$store.dispatch("playSong", this.songPropertise);
      this.closePlaylistPropertise();
    },
    pauseSong: function() {
      this.$store.dispatch("pauseSong");
      this.closePlaylistPropertise();
    },
    dowloadSong: function() {
      this.$store.dispatch("dowloadSong", this.songPropertise.title);
      this.closePlaylistPropertise();
    }
  }
};
</script>

<style>
</style>