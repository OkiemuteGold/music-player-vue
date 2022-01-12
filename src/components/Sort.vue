<template>
  <div class="sort_div" :class="(openSortDiv) ? 'sort_div_open' : ''">
    <h6>
      Sort By
      <span class="float-right" @click="closeSortDiv">&times;</span>
    </h6>
    <div class="playlist_icons">
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          @change="sortByTitle($event)"
          id="customRadio1"
          name="customRadio"
          class="custom-control-input"
          checked
        />
        <label @change="sortByTitle($event)" class="custom-control-label" for="customRadio1">Title</label>
      </div>
    </div>

    <div class="playlist_icons">
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="customRadio3"
          @change="sortByDateCreated($event)"
          name="customRadio"
          class="custom-control-input"
        />
        <label
          class="custom-control-label"
          @change="sortByDateCreated($event)"
          for="customRadio3"
        >Date Created</label>
      </div>
    </div>
    <div class="playlist_icons">
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="customRadio2"
          name="customRadio"
          @change="sortByArtist($event)"
          class="custom-control-input"
        />
        <label class="custom-control-label" @change="sortByArtist($event)" for="customRadio2">Artist</label>
      </div>
    </div>
    <div class="playlist_icons">
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="customRadio4"
          @change="sortByRandom($event)"
          name="customRadio"
          class="custom-control-input"
        />
        <label class="custom-control-label" @change="sortByRandom($event)" for="customRadio4">Random</label>
      </div>
    </div>
    <div class="playlist_icons">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          @change="toggleAscending($event)"
          id="customCheck1"
          checked
        />
        <label
          class="custom-control-label"
          @change="toggleAscending($event)"
          for="customCheck1"
        >Ascending</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sort",
  computed: {
    openSortDiv() {
      return this.$store.getters.openSortDiv;
    }
  },

  methods: {
    sortByTitle: function(event) {
      this.$store.dispatch("sortByTitle");
    },
    sortByRandom: function(event) {
      this.$store.dispatch("sortByRandom");
    },
    sortByDateCreated: function(event) {
      this.$store.dispatch("sortByDateCreated");
    },
    sortByArtist: function(event) {
      this.$store.dispatch("sortByArtist");
    },
    toggleAscending: function(event) {
      this.$store.dispatch("toggleAscending");
    },
    closeSortDiv: function(event) {
      this.$store.dispatch("closeSortDiv");
    }
  }
};
</script>

<style>
</style>