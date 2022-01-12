<template>
  <div class="search_music_sort">
    <i class="fa fa-sort-alpha-asc"></i>
  </div>
</template>

<script>
export default {
  name: "SortButton",
  methods: {
    openSortDiv() {
      this.$store.dispatch("openSortDiv");
    }
  }
};
</script>

<style>
</style>