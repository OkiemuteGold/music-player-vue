<template>
  <div class="loading">
    <img :src="src" alt />
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {
      src: require("../assets/img/preloader.gif")
    };
  }
};
</script>

<style>
</style>