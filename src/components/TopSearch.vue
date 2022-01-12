<template>
  <div class="search_div" v-if="!showDeveloper">
    <div class="search_icon">
      <i class="fa fa-search" id="search" @click="removeSearchInputValue"></i>
    </div>

    <div class="search_input">
      <form @submit.prevent="searchSongs">
        <input
          type="text"
          :placeholder="getCurrentPageName"
          v-model="searchInput"
          id="search_input"
          autocomplete="off"
        />
        <div class="search_close" @click="removeSearchInputValue">&times;</div>
      </form>
    </div>
    <div class="search_music_sort">
      <i class="fa fa-sort-alpha-asc" @click="openSortDiv"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopSearch",
  computed: {
    getCurrentPageName() {
      return this.$store.getters.getCurrentPageName;
    },
    showHome() {
      return this.$store.getters.showHome;
    },
    showPlaylist() {
      return this.$store.getters.showPlaylist;
    },
    showArtist() {
      return this.$store.getters.showArtist;
    },
    showFavourities() {
      return this.$store.getters.showFavourities;
    },
    showBlacklist() {
      return this.$store.getters.showBlacklist;
    },
    showDeveloper() {
      return this.$store.getters.showDeveloper;
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
    searchSongs: function() {
      if (this.searcInput.length <= 0) {
        this.removeSearchInputValue();
        return;
      } else {
        this.$store.state.loading = true;
        this.$store.dispatch("searchSongs", this.searcInput);
      }
    },

    removeSearchInputValue: function() {
      // this.searcInput = "";
      this.$store.state.loading = false;
      this.$store.state.openSortDiv = false;
      this.$store.state.searcInput = "";
      if (this.$store.state.activePage == "home") {
        this.$store.dispatch("showHomePage");
        return;
      }
      if (this.$store.state.activePage == "playlist") {
        this.$store.dispatch("showPlaylistPage");
        return;
      }
      if (this.$store.state.activePage == "artist") {
        this.$store.dispatch("showArtistPage");
        return;
      }
      if (this.$store.state.activePage == "favourite") {
        this.$store.dispatch("showFavouritePage");
        return;
      }
      if (this.$store.state.activePage == "blacklist") {
        this.$store.dispatch("showBlacklistPage");
        return;
      }
    },
    openSortDiv() {
      this.$store.dispatch("openSortDiv");
    }
  }
};
</script>

<style>
</style>