<template>
    <div class="music_controls" @click="closePlaylistPropertise">
        <div
            class="music_control_title"
            @click="showPlayingMusic"
            title="Click here to open Playing Music"
        >
            {{ current.title }}
        </div>
        <div class="music_buttons">
            <!-- <div class="progress-container" id="progress-container">
                <div
                    class="progress"
                    id="progress"
                    style="width: 13.3893%"
                ></div>
            </div> -->

            <i class="fa fa-backward" @click="prevSong"></i>
            <i
                class="fa fa-play playMusic"
                v-if="!isPlaying"
                @click="playSong"
            ></i>
            <i class="fa fa-pause pauseMusic" @click="pauseSong" v-else></i>
            <i class="fa fa-forward" @click="nextSong"></i>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        current() {
            return this.$store.state.current;
        },

        isPlaying() {
            return this.$store.getters.isPlaying;
        },
    },
    methods: {
        closePlaylistPropertise: function () {
            this.$store.dispatch("closePlaylistPropertise");
        },
        showPlayingMusic: function () {
            this.$store.dispatch("showPlayingMusic");
        },
        playSong: function () {
            this.$store.dispatch("playSong", this.current);
        },
        pauseSong: function () {
            this.$store.dispatch("pauseSong");
        },
        nextSong: function () {
            this.$store.dispatch("nextSong");
        },
        prevSong: function () {
            this.$store.dispatch("prevSong");
        },
    },
};
</script>

<style>
</style>