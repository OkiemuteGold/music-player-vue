<template>
  <div id="settings">
    <div v-if="getArtist">
      <ArtistCard v-for="song in searchArtist" :key="song" :song="song" />
    </div>
    <NoResult title="No Artist" v-else />
  </div>
</template>

<script>
import ArtistCard from "./ArtistCard";
import NoResult from "./NoResult";
export default {
  name: "Artist",
  components: {
    ArtistCard,
    NoResult
  },
  computed: {
    getArtist() {
      let songs = this.$store.getters.getArtist;
      if (this.$store.state.ascending == false) {
        return songs.sort(this.sortArray("title", "desc"));
      }

      if (this.$store.state.ascending == true) {
        return songs.sort(this.sortArray("title", "asc"));
      }
    },
    getArtistNoOfSongs() {
      return this.$store.getters.getArtistNoOfSongs(this.getArtist);
    },
    searchArtist() {
      let text = this.searchInput.toLowerCase();
      return this.getArtist.filter(data => data.toLowerCase().match(text));
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