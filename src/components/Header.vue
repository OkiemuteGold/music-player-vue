<template>
    <div class="hello">
        <div class="header is-visible" data-nav-status="toggle">
            <div class="navigation">
                <span
                    class="navigation_links"
                    @click="showHomePage"
                    :class="showHome ? 'isActiveLink' : ''"
                    id="songMenu"
                    >Songs</span
                >
                <span
                    class="navigation_links"
                    @click="showArtistPage"
                    :class="showArtist ? 'isActiveLink' : ''"
                    id="artistMenu"
                    >Artists</span
                >
                <span
                    class="navigation_links"
                    @click="showBlacklistPage"
                    :class="showBlacklist ? 'isActiveLink' : ''"
                    id="blacklistMenu"
                    >Blacklist</span
                >
                <span
                    class="navigation_links"
                    @click="showFavouritePage"
                    :class="showFavourities ? 'isActiveLink' : ''"
                    >Favourite</span
                >
                <span
                    class="navigation_links"
                    @click="showDeveloperPage"
                    :class="showDeveloper ? 'isActiveLink' : ''"
                    >Developer</span
                >
            </div>
            <TopSearch />
        </div>
        <div class="div_top"></div>
    </div>
</template>

<script>
import TopSearch from "./TopSearch";
export default {
    name: "Header",
    components: {
        TopSearch,
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
        showDeveloper() {
            return this.$store.getters.showDeveloper;
        },
    },

    methods: {
        showHomePage: function () {
            this.$store.dispatch("showHomePage");
        },
        showArtistPage: function () {
            this.$store.dispatch("showArtistPage");
        },
        showPlaylistPage: function () {
            this.$store.dispatch("showPlaylistPage");
        },
        showFavouritePage: function () {
            this.$store.dispatch("showFavouritePage");
        },
        showBlacklistPage: function () {
            this.$store.dispatch("showBlacklistPage");
        },
        showDeveloperPage: function () {
            this.$store.dispatch("showDeveloperPage");
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
