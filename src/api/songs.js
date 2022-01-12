const songs = [
  {
    id: 1,
    title: "Bethel Music - Goodness of God",
    src: require("../assets/music/Goodness_of_God_live- Bethel Music_Victory_mp3_75924.mp3"),
    artist: ["Bethel Music Victory"],
    date_modified: "13/03/2018",
    favourite: false,
    duration: "05:03",
  },
  {
    id: 2,
    title: "Bethel Music - Closer",
    src: require("../assets/music/Closer_(Live)_-_Josie_Buchanan__Bethel_Music(256k).mp3"),
    artist: ["Josie Buchanan"],
    date_modified: "13/03/2019",
    favourite: false,
    duration: "10:36",
  },
  {
    id: 3,
    title: "Brandon Roberson - You Are Holy",
    src: require("../assets/music/You_Are_Holy_Brandon_Roberson_Official_Video.mp3"),
    artist: ["Brandon Roberson"],
    date_modified: "13/03/2017",
    favourite: false,
    duration: "07:32",
  },
  {
    id: 4,
    title: "Jenn Johnson - I Love Your Presence, Here Is Love",
    src: require("../assets/music/I_Love_Your_Presence_Jenn_Johnson_Here_Is_Love.mp3"),
    artist: ["Jenn Johnson"],
    date_modified: "13/03/2018",
    favourite: false,
    duration: "07:45",
  },
];

export default {
  songs() {
    return songs;
  },
};