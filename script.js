const music = [{
    musicName: "Saza E Maut",
    artistName: "Raftaar x KR$NA",
    musicSrc: "https://www.youtube.com/watch?v=o907r6NsK9s",
    musicPoster: "https://i.ytimg.com/vi/o907r6NsK9s/maxresdefault.jpg",
    liked: true,
  },
  {
    musicName: "Viah di Khabar",
    artistName: "Kaka",
    musicSrc: "https://jatt.download/music/data/Single_Track/202106/Viah_Di_Khabar/128/Viah_Di_Khabar_1.mp3",
    musicPoster: "https://a10.gaanacdn.com/gn_img/albums/d41WjznWPL/1WjzXn6AWP/size_xxl.jpg",
    liked: false,
  },
  {
    musicName: "Build a B*tch",
    artistName: "Bella Poarch",
    musicSrc: "",
    musicPoster: "https://www.kalimbatutorials.com/wp-content/uploads/2021/05/Build-A-Bitch-By-Bella-Poarch-Kalimba-Tabs-e1621829138141.jpg",
    liked: false,
  },
  {
    musicName: "Tu Phir Se Aana",
    artistName: "Raftaar x Salim Merchant x Karma",
    musicSrc: "https://songs3.vlcmusic.com/download.php?track_id=34213&format=320",
    musicPoster: "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg",
  },
  {
    musicName: "Naachne Ka Shaunq",
    artistName: "Raftaar x Brobha V",
    musicSrc: "https://songs3.vlcmusic.com/download.php?track_id=36589&format=320",
    musicPoster: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg",
  },
  {
    musicName: "Mantoiyat",
    artistName: "Raftaar x Nawazuddin Siddiqui",
    musicSrc: "https://songs3.vlcmusic.com/download.php?track_id=36593&format=320",
    musicPoster: "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg",
  },
  {
    musicName: "I'm ready",
    artistName: "Raftaar x KR$NA",
    musicSrc: "https://songs3.vlcmusic.com/download.php?track_id=37975&format=320",
    musicPoster: "https://a10.gaanacdn.com/images/albums/90/2009690/crop_480x480_2009690.jpg",
  },
  {
    musicName: "Microphone Check",
    artistName: "Raftaar",
    musicSrc: "https://songs3.vlcmusic.com/download.php?track_id=33726&format=320",
    musicPoster: "https://1.bp.blogspot.com/-3xC8UxACBBs/X7O5YLd5Y0I/AAAAAAAAEdc/Jhf3_uWkhBQH3grgqD878SHr-Aiz4L-uACLcBGAsYHQ/w640/microphone%2Bcheck.webp",
  },
  {
    musicName: "BlackSheep",
    artistName: "Raftaar",
    musicSrc: "https://songs3.vlcmusic.com/download.php?track_id=35459&format=320",
    musicPoster: "http://a10.gaanacdn.com/images/albums/31/3840631/crop_480x480_3840631.jpg",
  },
  {
    musicName: "Saath Ya Khilaaf ",
    artistName: "Raftaar x KR$NA",
    musicSrc: "https://songs3.vlcmusic.com/download.php?track_id=32599&format=320",
    musicPoster: "https://1.bp.blogspot.com/-nIkGlZdgqII/X3PvZQk5VYI/AAAAAAAADrQ/Rx7lCvdcuGY4Q2PnyMwJKYVVz9rxXEE3wCLcBGAsYHQ/w640/saath%2Bya%2Bkhilaaf.jpg",
  },
  {
    musicName: "Dilli Waali Baatcheet",
    artistName: "Raftaar",
    musicSrc: "https://songs3.vlcmusic.com/download.php?track_id=21659&format=320",
    musicPoster: "https://a10.gaanacdn.com/images/song/49/28009549/crop_480x480_1566383860.jpg",
  },
  {
    musicName: "Damn",
    artistName: "Raftaar x kr$na",
    musicSrc: "https://songs3.vlcmusic.com/download.php?track_id=36924&format=320",
    musicPoster: "https://filmisongs.xyz/wp-content/uploads/2020/07/Damn-Song-Raftaar-KrNa.jpg",
  },
  {
    musicName: "Feeling You",
    artistName: "Raftaar x Harjas",
    musicSrc: "https://songs3.vlcmusic.com/download.php?track_id=27145&format=320",
    musicPoster: "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp",
  },
];


let musicIndex = 0;
const audio = document.querySelector("#audio");
const prevBtn = document.querySelector("#backward-btn");
const playBtn = document.querySelector("#play-pause-btn");
const nextBtn = document.querySelector("#forward-btn");
const musicName = document.querySelector("#song-name");
const artistName = document.querySelector("#artist-name");
const musicPoster = document.querySelector(".music-poster");
const musicPosterBoxContainer = document.querySelector(".music-poster-box-container");

let isPlaying = false;

function currentMusic(index) {
  if (index >= music.length) {
    index = index % music.length;
  }
  if (index < 0) {
    index = music.length + index % music.length;
  }
  musicIndex = index;
  musicPosterBoxContainer.innerHTML = "";
  musicPosterBoxContainer.style.left = 0 + "%";
  musicPosterBoxContainer.style.left = -250 * index + "px";
  audio.src = music[index].musicSrc;
  musicName.innerText = music[index].musicName;
  artistName.innerText = music[index].artistName;
  musicPoster.src = music[index].musicPoster;
  musicPoster.alt = music[index].musicName;
  let list = document.querySelector(".list");
  list.innerHTML = "";
  music.forEach((item, index) => {
    let musicPosterBox = document.createElement("img");
    musicPosterBox.classList.add("music-poster-box");
    musicPosterBox.src = music[index].musicPoster;
    musicPosterBoxContainer.appendChild(musicPosterBox);
    if (index == musicIndex) {
      musicPosterBox.classList.add("current");
    } else {
      musicPosterBox.classList.remove("current");
    }
    //music list
    let musicItem = document.createElement("div");
    musicItem.classList.add("music");
    //series
    let serise = document.createElement("span");
    serise.classList.add("series");
    serise.innerText = index + 1 + ".";
    musicItem.appendChild(serise);
    //name
    let name = document.createElement("span");
    name.classList.add("music-name");
    name.innerText = music[index].musicName;
    musicItem.appendChild(name);
    //bars
    const bars = "<span class='bar n1'></span><span class='bar n2'></span><span class='bar n3'></span>";
    let playing = document.createElement("div");
    playing.classList.add("now");
    if (index == musicIndex) {
      playing.classList.add("playing");
    } else {
      playing.classList.remove("playing");
    }
    playing.innerHTML = bars;
    musicItem.appendChild(playing);
    list.appendChild(musicItem);
  });
}

playBtn.addEventListener('click', () => {
  isPlaying ? pauseMusic() : playMusic();
});

nextBtn.addEventListener("click", () => {
  musicIndex = musicIndex + 1;
  currentMusic(musicIndex);
  playMusic();
});

prevBtn.addEventListener("click", () => {
  musicIndex = musicIndex - 1;
  currentMusic(musicIndex);
  playMusic();
});

currentMusic(musicIndex);

function playMusic() {
  isPlaying = true;
  audio.play();
  playBtn.classList.replace("fa-play-circle", "fa-pause-circle-o");
}

function pauseMusic() {
  isPlaying = false;
  audio.pause();
  playBtn.classList.replace("fa-pause-circle-o", "fa-play-circle");
}

// music time
const current = document.querySelector("#music-current");
const duration = document.querySelector("#music-duration");
if (duration.innerText == "NaN:0NaN") {
  duration.innerText = "";
}

audio.addEventListener("timeupdate", () => {
  let time = audio.currentTime;
  let seconds = Math.floor(time % 60);
  let minutes = Math.floor(time / 60);
  if (minutes < 10 && seconds < 10) {
    current.innerText = "0" + minutes + ":0" + seconds;
  } else if (minutes < 10) {
    current.innerText = "0" + minutes + ":" + seconds;
  } else if (seconds < 10) {
    current.innerText = minutes + ":0" + seconds;
  } else {
    current.innerText = minutes + ":0" + seconds;
  }

  //duration time
  time = audio.duration;
  seconds = Math.floor(time % 60);
  minutes = Math.floor(time / 60);
  if (minutes < 10 && seconds < 10) {
    duration.innerText = "0" + minutes + ":0" + seconds;
  } else if (minutes < 10) {
    duration.innerText = "0" + minutes + ":" + seconds;
  } else if (seconds < 10) {
    duration.innerText = minutes + ":0" + seconds;
  } else if (minutes >= 0 && seconds >= 0) {
    duration.innerText = minutes + ":" + seconds;
  } else {
    duration.innerText = "00:00";
  }

  // time bar
  const timebarCicle = document.querySelector(".timebar-circle");
  const timebar = document.querySelector(".timebar");

  timebar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
  timebarCicle.style.left = (audio.currentTime / audio.duration) * 100 + "%";


  if (audio.currentTime == audio.duration) {
    musicIndex = musicIndex + 1;
    currentMusic(musicIndex);
    playMusic();
  }

});

const musicTimebar = document.querySelector(".music-timebar");
musicTimebar.addEventListener("click", (e) => {
  let a = e.offsetX;
  const b = e.srcElement.clientWidth;
  audio.currentTime = a / b * audio.duration;
});



//music list open
const menuBtn = document.querySelector(".menu-btn");
const musicList = document.querySelector(".music-list");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  musicList.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  musicList.classList.remove("open");
});



// swap left right

const playerCenter = document.querySelector(".poster");
let manager = new Hammer.Manager(playerCenter);

// Create a recognizer
let Swipe = new Hammer.Swipe();

manager.add(Swipe);

manager.on('swipe', function(e) {
  let direction = e.offsetDirection;
  if (direction == 4) {
    musicIndex = musicIndex - 1;
    currentMusic(musicIndex);
    playMusic();
  } else if (direction == 2) {
    musicIndex = musicIndex + 1;
    currentMusic(musicIndex);
    playMusic();
  }
});
