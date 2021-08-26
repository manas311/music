const music = [{
    musicName: "Bad Guy",
    artistName: "Billie Eilish",
    musicSrc: "songs/bad-guy.mp3",
    musicPoster: "https://i1.sndcdn.com/artworks-000525821970-fw5emb-t500x500.jpg",
    liked: true,
  },
  {
    musicName: "Fairy Tale",
    artistName: "Alexander Rybak",
    musicSrc: "songs/fairytale.mp3",
    musicPoster: "https://i.ytimg.com/vi/edzt82nC45k/sddefault.jpg",
    liked: false,
  },
  {
    musicName: "Arcade",
    artistName: "Duncan Laurence",
    musicSrc: "songs/arcade.mp3",
    musicPoster: "https://i1.sndcdn.com/artworks-000540099177-91crte-t500x500.jpg",
  },
  {
    musicName: "Beggin'",
    artistName: "Madcon",
    musicSrc: "songs/begging.mp3",
    musicPoster: "https://i.ytimg.com/vi/2Ld0IfAfqPc/maxresdefault.jpg",
  },
  {
    musicName: "Need to Know",
    artistName: "Doja Cat",
    musicSrc: "songs/needtoknow.mp3",
    musicPoster: "https://i.ytimg.com/vi/2fEAyHNekF4/mqdefault.jpg",
  },
  {
    musicName: "One Dance",
    artistName: "Drake",
    musicSrc: "songs/onedance.mp3",
    musicPoster: "https://i.ytimg.com/vi/ki0Ocze98U8/hqdefault.jpg",
  },
  {
    musicName: "Falling",
    artistName: "Trevor Daniel",
    musicSrc: "songs/falling.mp3",
    musicPoster: "https://a10.gaanacdn.com/images/albums/54/3013054/crop_175x175_3013054.jpg",
  },
  {
    musicName: "Cradles",
    artistName: "Sub Urban",
    musicSrc: "songs/cradles.mp3",
    musicPoster: "https://i.pinimg.com/originals/b2/5b/5f/b25b5f585ab8e5850f0ce0aa21efd70a.jpg",
  },
  {
    musicName: "Thunder",
    artistName: "Imagine Dragons",
    musicSrc: "songs/thunder.mp3",
    musicPoster: "https://i1.sndcdn.com/artworks-000635076223-98cavr-t500x500.jpg",
  },
  {
    musicName: "Believer",
    artistName: "Imagine Dragons",
    musicSrc: "songs/believer.mp3",
    musicPoster: "https://i1.sndcdn.com/artworks-000417287439-z0hnqd-t500x500.jpg",
  },
  {
    musicName: "Dance Monkey",
    artistName: "Tones and I",
    musicSrc: "songs/dancemonkey.mp3",
    musicPoster: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Dance_Monkey_by_Tones_and_I.jpg/220px-Dance_Monkey_by_Tones_and_I.jpg",
  },
  {
    musicName: "Childhood",
    artistName: "Rauf and Faik",
    musicSrc: "songs/childhood.mp3",
    musicPoster: "https://i.ytimg.com/vi/WJF5Z1WRcqw/maxresdefault.jpg",
  },
  {
    musicName: "Cheap Thrills",
    artistName: "Sia",
    musicSrc: "songs/cheapthrills.mp3",
    musicPoster: "https://mypianonotes.com/wp-content/uploads/2018/04/sia-cheap-thrills-piano-notes.jpg",
  },
  {
    musicName: "Faded",
    artistName: "Alan Walker",
    musicSrc: "songs/faded.mp3",
    musicPoster: "https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png",
  },
  {
    musicName: "Closer",
    artistName: "The Chainsmokers",
    musicSrc: "songs/closer.mp3",
    musicPoster: "https://i.ytimg.com/vi/25ROFXjoaAU/maxresdefault.jpg",
  },
  {
    musicName: "Starboy",
    artistName: "The Weeknd",
    musicSrc: "songs/starboy.mp3",
    musicPoster: "https://f4.bcbits.com/img/a2502581702_10.jpg",
  },
  {
    musicName: "Champion",
    artistName: "DJ Bravo",
    musicSrc: "songs/champion.mp3",
    musicPoster: "https://a10.gaanacdn.com/gn_img/albums/z8k3yd1Krx/8k3yVqmEWr/size_xxl.webp",
  },
  {
    musicName: "NUMB",
    artistName: "Linkin Park",
    musicSrc: "songs/numb.mp3",
    musicPoster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Linkin_Park_-_Numb_CD_cover.jpg/220px-Linkin_Park_-_Numb_CD_cover.jpg",
  },
  {
    musicName: "Godzilla",
    artistName: "Eminem",
    musicSrc: "songs/godzilla.mp3",
    musicPoster: "https://i.ytimg.com/vi/9XvXF1LrWgA/maxresdefault.jpg",
  },
];


let musicIndex = 0;
const audio = document.querySelector("#audio");
const muteBtn = document.querySelector("#mute-btn");
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

muteBtn.addEventListener('click', () => {
    muteMusic();
});

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

function muteMusic() {
  if (audio.muted == false)
  {
    audio.muted = true;
    muteBtn.classList.replace("fa-volume-up", "fa-volume-off");
  }
  else
  {
    audio.muted = false;
    muteBtn.classList.replace("fa-volume-off", "fa-volume-up");
  }
}
// <i class="fa fa-volume-up" aria-hidden="true"></i>
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
