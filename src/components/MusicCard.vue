<template>
    <div
        class="music_songs"
        :class="isPlaying ? 'playlistPlaying' : ''"
        :title="'Click to play ' + song.title"
    >
        <i class="fa fa-music" @click="playSong"></i>
        <div class="music_title" @click="playSong">{{ song.title }}</div>
        <div class="music_time" @click="playSong">{{ song.duration }}</div>
        <i
            class="fa fa-ellipsis-v showPlayListProperTise"
            @click="openPlaylistPropertise()"
        ></i>
    </div>
</template>

<script>
export default {
    name: "MusicCard",
    data() {
        return {
            showPlaylistPropertise: false,
        };
    },
    props: ["song"],
    computed: {
        current() {
            return this.$store.getters.current;
        },
        isPlaying() {
            if (this.$store.state.isPlaying == true) {
                return this.song.src == this.current.src ? true : false;
            }
        },
    },
    methods: {
        openPlaylistPropertise: function () {
            this.$store.dispatch("openPlaylistPropertise", this.song);
        },
        closePlaylistPropertise: function () {
            this.$store.dispatch("closePlaylistPropertise");
        },

        playSong: function () {
            this.$store.dispatch("playSong", this.song);
            this.closePlaylistPropertise();
        },

        // CUT STRING FUNCTION
        cutString: function (text, max) {
            return text && text.length > max
                ? text.slice(0, max).split(" ").slice(0, -1).join(" ")
                : text;
        },
    },
};
</script>

<style>
</style>