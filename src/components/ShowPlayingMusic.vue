<template>
    <div
        class="show_playing_music"
        :class="showPlayingMusics ? 'showPlaying' : ''"
    >
        <div class="music_playing_container">
            <div class="top_controls">
                <i
                    class="fa fa-arrow-left removePlaying"
                    @click="removePlayingMusics(songPropertise)"
                    title="Back"
                ></i>
                <i
                    class="fa fa-ellipsis-v addToPlayListIcon"
                    @click="showPlayingMusicPropertises"
                    title="Properties"
                ></i>
            </div>
            <div class="middle_icons" @click="hideCurrentSongProperties">
                <div class="middle_icons_container">
                    <i
                        class="fa fa-music"
                        :class="isPlaying ? 'rotateplayingIcon' : ''"
                    ></i>
                </div>
            </div>
            <div class="playing_volume">
                <div class="volume_inline">
                    <span
                        class="volume_icon"
                        :class="
                            volume == 0 ? 'addVisibility' : 'removeVisibility'
                        "
                        style="
                            font-size: 11px;
                            display: inline;
                            padding-right: 5px;
                        "
                        >Mute</span
                    >
                    <span class="volume_icon">
                        <i
                            class="fa fa-volume-off"
                            :class="volume <= 0 ? 'activated' : ''"
                        ></i>
                    </span>
                    <input
                        type="range"
                        class="custom-range"
                        min="0"
                        max="1"
                        step="0.01"
                        value="0.8"
                        id="customRange2"
                        title="Volume"
                        v-model="volume"
                        @change="changeVolume($event)"
                    />
                    <i
                        class="fa fa-volume-up volume_icon"
                        :class="volume >= 1 ? 'activated' : ''"
                    ></i>
                </div>
            </div>
            <div class="music_bottom_control">
                <div class="music_playing_title" title="Song Title">
                    {{ current.title }}
                </div>

                <div class="music_bottom_settings">
                    <i
                        class="fa fa-heart"
                        :class="getFavouriteColor ? 'activated' : ''"
                        title="Add to Favourities"
                        @click="addAsFavourite"
                    ></i>
                    <i
                        class="fa fa-compress"
                        title="Play Random song"
                        :class="isRandomSong ? 'activated' : ''"
                        @click="playRandomSong"
                    ></i>

                    <span>
                        <i
                            class="fa fa-backward"
                            @click="prevSong"
                            title="Previous Song"
                        ></i>
                        <i
                            class="fa fa-play playMusic"
                            v-if="!isPlaying"
                            @click="playSong"
                            title="Play Song"
                        ></i>
                        <i
                            class="fa fa-pause pauseMusic"
                            v-else
                            @click="pauseSong"
                            title="Pause song"
                        ></i>
                        <i
                            class="fa fa-forward"
                            @click="nextSong"
                            title="Next song"
                        ></i>
                    </span>
                    <i
                        class="fa fa-retweet"
                        :class="isRepeatSong ? 'activated' : ''"
                        title="Repeat song"
                        @click="repeatSong"
                    ></i>

                    <i
                        class="fa fa-plus addToPlayListIcon"
                        @click="showPlayingMusicPropertises"
                        title="Properties"
                    ></i>
                </div>
            </div>
            <!-- MUSIC PROPERTISE -->
            <div class="overlay_properties hide"></div>
            <div class="music_propertise" v-if="revealProperties">
                <div class="propertise_container">
                    <h3>File propertise</h3>
                    <p>
                        <span>Song Name:</span>
                        {{ current.title }}
                    </p>
                    <p>
                        <span>Song Duration:</span>
                        {{ current.duration }}
                    </p>
                    <p>
                        <span>Artist Name:</span>
                        <br />
                        <span
                            v-for="artist in current.artist"
                            :key="artist"
                            class="artist_name"
                            >{{ artist }}</span
                        >
                    </p>
                    <p>
                        <span>modified Date:</span>
                        {{ current.date_modified }}
                    </p>

                    <p
                        class="removePropertise"
                        @click="hideCurrentSongProperties"
                    >
                        OK
                    </p>
                </div>
            </div>

            <!-- ADD TO PLAYLIST CARD -->
            <div class="add_play_list" v-if="showPlayingSongPropertises">
                <div class="playlist_icons" @click="addAsFavourite">
                    <i class="fa fa-heart-o"></i>
                    <span>{{
                        getFavouriteColor
                            ? "Remove from favourite"
                            : "Add to favourite"
                    }}</span>
                </div>
                <a
                    :href="current.src"
                    :download="current.title"
                    class="playlist_icons"
                    style="display: block; color: #333"
                    @click="dowloadSong"
                >
                    <i class="fa fa-download"></i>
                    <span>Download</span>
                </a>
                <div
                    class="playlist_icons showProperTise"
                    @click="showCurrentSongProperties"
                >
                    <i class="fa fa-map-signs"></i>
                    <span>propertise</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ShowPlayingMusic",
    data() {
        return {
            volume: 0.8,
        };
    },
    computed: {
        showPlayingMusics() {
            return this.$store.getters.showPlayingMusics;
        },
        songPropertise() {
            return this.$store.getters.songPropertise;
        },
        showPlayingSongPropertises() {
            return this.$store.getters.showPlayingSongPropertises;
        },
        revealProperties() {
            return this.$store.getters.revealProperties;
        },

        getFavouriteColor() {
            return this.current.favourite == true ? true : false;
        },
        current() {
            return this.$store.getters.current;
        },

        isPlaying() {
            return this.$store.getters.isPlaying;
        },

        isRepeatSong() {
            return this.$store.getters.isRepeatSong;
        },
        isRandomSong() {
            return this.$store.getters.isRandomSong;
        },
    },
    methods: {
        addAsFavourite: function () {
            this.$store.dispatch("addAsFavourite", this.current);
            this.closePlaylistPropertise();
        },
        removePlayingMusics: function () {
            this.$store.dispatch("removePlayingMusics");
        },
        closePlaylistPropertise: function () {
            this.$store.dispatch("closePlaylistPropertise");
        },
        showPlayingMusicPropertises: function () {
            this.$store.dispatch("showPlayingMusicPropertises");
        },
        showCurrentSongProperties: function () {
            this.$store.dispatch("showCurrentSongProperties");
        },
        hideCurrentSongProperties: function () {
            this.$store.dispatch("hideCurrentSongProperties");
        },
        playSong: function () {
            this.$store.dispatch("playSong", this.current);
            this.closePlaylistPropertise();
        },
        pauseSong: function () {
            this.$store.dispatch("pauseSong");
            this.closePlaylistPropertise();
        },
        nextSong: function () {
            this.$store.dispatch("nextSong");
            this.closePlaylistPropertise();
        },
        prevSong: function () {
            this.$store.dispatch("prevSong");
            this.closePlaylistPropertise();
        },
        repeatSong: function () {
            this.$store.dispatch("repeatSong");
            this.closePlaylistPropertise();
        },
        playRandomSong: function () {
            this.$store.dispatch("playRandomSong");
            this.closePlaylistPropertise();
        },
        changeVolume: function (event) {
            this.$store.dispatch("changeVolume", this.volume);
            this.closePlaylistPropertise();
        },
        dowloadSong: function () {
            this.$store.dispatch("dowloadSong", this.current.title);
            this.closePlaylistPropertise();
        },
    },
};
</script>

<style>
</style>