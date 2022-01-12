<template>
  <div id="settings">
    <div class="music_body" v-if="songs.length">
      <ArtistCard v-for="song in songs" :key="song" :song="song" />
    </div>
    <NoResult title="Search result Not Found" v-else />
  </div>
</template>

<script>
import ArtistCard from "./ArtistCard";
import NoResult from "./NoResult";
export default {
  name: "OtherSearch",
  components: {
    ArtistCard,
    NoResult
  },
  computed: {
    // GET SONGS
    songs() {
      let songs = this.$store.getters.getSearch;
      let shuffleSongs = this.shuffleArray(songs);

      return shuffleSongs;
    }
  },
  methods: {
    shuffleArray: function(array) {
      var ctr = array.length,
        temp,
        index;
      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = array[ctr];
        array[ctr] = array[index];
        array[index] = temp;
      }
      return array;
    }
  }
};
</script>

<style>
</style>