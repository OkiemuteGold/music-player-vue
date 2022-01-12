<template>
    <div class="music_plalist">
        <Home v-if="showHome" />
        <Playlist v-if="showPlaylist" />
        <Artist v-if="showArtist" />
        <Blacklist v-if="showBlacklist" />
        <Favourites v-if="showFavourities" />
        <Search v-if="showSearch" />
        <AddPlaylistButton v-if="showPlaylist" />
        <OtherSearch v-if="otherSearch" />
        <Developer v-if="showDeveloper" />
    </div>
</template>

<script>
import Home from "./Home";
import Playlist from "./Playlist";
import Artist from "./Artist";
import Blacklist from "./Blacklist";
import Favourites from "./Favourites";
import Search from "./Search";
import AddPlaylistButton from "./AddPlaylistButton";
import OtherSearch from "./OtherSearch";
import Developer from "./Developer";
export default {
    name: "NavigationPages",
    components: {
        Home,
        Playlist,
        Artist,
        Blacklist,
        Favourites,
        Search,
        OtherSearch,
        AddPlaylistButton,
        Developer,
    },
    computed: {
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
        showSearch() {
            return this.$store.getters.showSearch;
        },
        otherSearch() {
            return this.$store.getters.otherSearch;
        },
        showDeveloper() {
            return this.$store.getters.showDeveloper;
        },
    },
};
</script>

<style>
</style>