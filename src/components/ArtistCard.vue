<template>
  <div class="music_songs" :title="'Click to get songs by ' + song">
    <i class="fa fa-bullhorn allIcons"></i>
    <div class="music_title" @click="getArtistSong(song)">
      {{song}}
      <br />
      <span class="song_count">{{getCount(song) + 1}} Song(s)</span>
    </div>
    <i
      class="fa fa-ellipsis-v showPlayListProperTise"
      style="visibility: hidden!important;"
      @click="openPlaylistPropertise(song)"
    ></i>
  </div>
</template>

<script>
export default {
  name: "ArtistCard",
  data() {
    return {
      showPlaylistPropertise: false
    };
  },
  props: ["song"],
  computed: {
    title(song) {
      return "click to songs by " + song;
    }
  },
  methods: {
    openPlaylistPropertise: function(song) {
      this.$store.dispatch("openPlaylistPropertise", { song });
    },
    getArtistSong: function(song) {
      this.$store.dispatch("getArtistSong", song);
    },
    getCount: function(array) {
      let count = this.$store.state.songs.filter(song => song.artist == array);
      return count.length;
    }
  }
};
</script>

<style>
</style>