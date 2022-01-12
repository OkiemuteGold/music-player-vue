<template>
  <div id="blacklist">
    <div class="music_body" v-if="searchSongs.length">
      <MusicCard v-for="song in searchSongs" :key="song.id" :song="song" />
    </div>
    <NoResult title="No song in Blacklist" v-else />
  </div>
</template>

<script>
import MusicCard from "./MusicCard";
import NoResult from "./NoResult";
export default {
  name: "Blacklist",
  components: {
    MusicCard,
    NoResult
  },
  computed: {
    songs() {
      let songs = this.$store.getters.getBlacklists;
      if (
        this.$store.state.ascending == false &&
        this.$store.state.sortByTitle == true
      ) {
        return songs.sort(this.sortArray("title", "desc"));
      }

      if (
        this.$store.state.ascending == false &&
        this.$store.state.sortByDate == true
      ) {
        return songs.sort(this.sortArray("date_modified", "desc"));
      }

      if (
        this.$store.state.ascending == false &&
        this.$store.state.sortByArtist == true
      ) {
        return songs.sort(this.sortArray("title", "desc"));
      }

      if (
        this.$store.state.ascending == true &&
        this.$store.state.sortByTitle == true
      ) {
        return songs.sort(this.sortArray("title", "asc"));
      }

      if (
        this.$store.state.ascending == true &&
        this.$store.state.sortByDate == true
      ) {
        return songs.sort(this.sortArray("date_modified", "asc"));
      }

      if (
        this.$store.state.ascending == true &&
        this.$store.state.sortByArtist == true
      ) {
        return songs.sort(this.sortArray("title", "asc"));
      }

      if (this.$store.state.sortByRandom == true) {
        return this.shuffleArray(songs);
      }
    },
    searchSongs() {
      let text = this.searchInput.toLowerCase();
      return this.songs.filter(data => data.title.toLowerCase().match(text));
    },
    searchInput: {
      get() {
        return this.$store.state.searcInput;
      },
      set(value) {
        return (this.$store.state.searcInput = value);
      }
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
    },

    sortArray: function(key, order = "asc") {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          return 0;
        }

        const varA = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];

        const varB = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];

        let comparison = 0;

        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
      };
    }
  }
};
</script>

<style>
</style>