// All songs
var arr = [
  {
    title: "Angel-Broken",
    singer: "Arash",
    songsrc: "music/s0.mp3",
    imgsrc: "images/p0.jpg",
  },
  {
    title: "Aurora-Runway",
    singer: "Vipasha Malhotra",
    songsrc: "music/s1.mp3",
    imgsrc: "images/p1.jpg",
  },
  {
    title: "Born to shine",
    singer: "Diljit Dosanjh",
    songsrc: "music/s2.mp3",
    imgsrc: "images/p2.jpg",
  },
  {
    title: "Dariya",
    singer: "Manoj Muntashir",
    songsrc: "music/s3.mp3",
    imgsrc: "images/p3.jpg",
  },
  {
    title: "Ek Tarfa",
    singer: "Darshan Raval",
    songsrc: "music/s4.mp3",
    imgsrc: "images/p4.jpg",
  },
  {
    title: "Jug Jug Jeeve",
    singer: "Sachin-Jigar",
    songsrc: "music/s5.mp3",
    imgsrc: "images/p5.jpg",
  },
  {
    title: "kal raste me gam mil",
    singer: "Jubin Nautiyal",
    songsrc: "music/s6.mp3",
    imgsrc: "images/p6.jpg",
  },
  {
    title: "Kale je libaas di",
    singer: "Kaka",
    songsrc: "music/s7.mp3",
    imgsrc: "images/p7.jpg",
  },
  {
    title: "Kehndi Hundi Si",
    singer: "Gurinder Gill",
    songsrc: "music/s8.mp3",
    imgsrc: "images/p8.jpg",
  },
  {
    title: "Kho Gaye Hum Kahan",
    singer: "Anvita Dutt",
    songsrc: "music/s9.mp3",
    imgsrc: "images/p9.jpg",
  },
  {
    title: "Lovely",
    singer: "Billie Eilish",
    songsrc: "music/s10.mp3",
    imgsrc: "images/p10.jpg",
  },
  {
    title: "Main Jis Din Bhula Du",
    singer: "Jubin Nautiyal",
    songsrc: "music/s11.mp3",
    imgsrc: "images/p11.jpg",
  },
  {
    title: "Rabba Rabba",
    singer: "Mohit Chauhan",
    songsrc: "music/s12.mp3",
    imgsrc: "images/p12.jpg",
  },
  {
    title: "Ranjha",
    singer: "B Praak ",
    songsrc: "music/s13.mp3",
    imgsrc: "images/p13.jpg",
  },
  {
    title: "Rataan Lambiyan",
    singer: "Jubin Nautiyal",
    songsrc: "music/s14.mp3",
    imgsrc: "images/p14.jpg",
  },
  {
    title: "Ringtone",
    singer: "Unknown",
    songsrc: "music/s15.mp3",
    imgsrc: "images/p15.jpg",
  },
  {
    title: "Scam 1992 Ringtone",
    singer: "Unknown",
    songsrc: "music/s16.mp3",
    imgsrc: "images/p16.jpg",
  },
  {
    title: "Tune Jo Na Kaha",
    singer: "Neil Nitin",
    songsrc: "music/s17.mp3",
    imgsrc: "images/p17.jpg",
  },
  {
    title: "Wiseblood",
    singer: "Zola Jesus",
    songsrc: "music/s18.mp3",
    imgsrc: "images/p18.jpg",
  },
];

// All Variables
var home = document.getElementById("home");
var dot = document.getElementById("dot");
var page1 = document.getElementById("page1");
var base = document.getElementById("base");
var title = document.getElementById("title");
var singer = document.getElementById("singer");
var box = document.getElementById("box");
var moveing = document.getElementById("moveing");
var cur = document.getElementById("cur");
var total = document.getElementById("total");
var pre = document.getElementById("pre");
var mid = document.getElementById("mid");
var next = document.getElementById("next");
var audio = document.getElementById("audio");
var border = document.getElementById("border");
var line = document.getElementById("line");
var slide = document.getElementById("slide");
var ground = document.getElementById("ground");
var li = document.getElementsByTagName("li")[0];
var l = arr.length;
var flag = 0,
  i = 0,
  list = 0;

var song = [
  document.getElementById("s0"),
  document.getElementById("s1"),
  document.getElementById("s2"),
  document.getElementById("s3"),
  document.getElementById("s4"),
  document.getElementById("s5"),
  document.getElementById("s6"),
  document.getElementById("s7"),
  document.getElementById("s8"),
  document.getElementById("s9"),
  document.getElementById("s10"),
  document.getElementById("s11"),
  document.getElementById("s12"),
  document.getElementById("s13"),
  document.getElementById("s14"),
  document.getElementById("s15"),
  document.getElementById("s16"),
  document.getElementById("s17"),
  document.getElementById("s18"),
];

//loading function and call initially
function load(ele) {
  for(var j=0;j<l;j++){
    if(document.getElementById("s"+j).style.backgroundColor!="") document.getElementById("s"+j).style.backgroundColor="";
  }
  title.textContent = arr[ele].title;
  singer.textContent = arr[ele].singer;
  moveing.src = arr[ele].imgsrc;
  audio.src = arr[ele].songsrc;
  document.getElementById("s"+ele).style.backgroundColor="rgb(241, 12, 165)";
  i = ele;
}
load(i);

function loadlist() {
  for (var k = 0; k < l; k++) song[k].innerText = arr[k].title;
}
loadlist();

// Background Animation
mid.addEventListener("click", () => {
  base.classList.toggle("base2");
  box.classList.toggle("box2");
  ground.classList.toggle("ground2");
});

//song play-pause with its button animation  || <=> |>
mid.addEventListener("click", () => {
  if (!flag) {
    mid.className = "fa-solid fa-pause"; // ||
    audio.play();
    flag++;
  } else {
    mid.className = "fa-solid fa-play"; // |>
    audio.pause();
    flag--;
  }
});

// Prevoius song
pre.addEventListener("click", () => {
  if (!audio.paused) {
    i--;
    i = (i + l) % l;
    load(i);
    audio.play();
  } else {
    i--;
    i = (i + l) % l;
    load(i);
  }
  line.style.width = 0;
});

// Next song
next.addEventListener("click", () => {
  if (!audio.paused) {
    i++;
    i = i % l;
    load(i);
    audio.play();
  } else {
    i++;
    i = i % l;
    load(i);
  }
  line.style.width = 0;
});

// After completing a song
audio.onended = function () {
  base.classList.remove("base2");
  box.classList.remove("box2");
  ground.classList.remove("ground2");
  mid.className = "fa-solid fa-play"; //  |>
  line.style.width = 0;
  flag = 0;
};

// Time Update
function time(t, str) {
  if (t < 10) str.innerText = "00:0" + t;
  else if (t < 60) str.innerText = "00:" + t;
  else {
    var m = Math.floor(t / 60);
    var s = Math.floor(t % 60);
    if (m < 9 && s < 9) str.innerText = "0" + m + ":0" + s;
    else if (m < 9 && s > 9) str.innerText = "0" + m + ":" + s;
    else if (m > 9 && s < 9) str.innerText = m + ":0" + s;
    else if (m > 9 && s > 9) str.innerText = m + ":" + s;
  }
}
audio.ontimeupdate = () => {
  time(Math.floor(audio.currentTime), cur);
  line.style.width = (audio.currentTime / audio.duration) * 100 + "%";
};

audio.onloadeddata = () => {
  time(Math.floor(audio.duration), total);
};

border.addEventListener("click", (e) => {
  audio.currentTime = (e.offsetX / border.offsetWidth) * audio.duration;
});

// List(open/close) toggle button
dot.addEventListener("click", () => {
  if (list == 0) {
    page1.style.display = "none";
    slide.style.display = "flex";
    dot.className = "fa-solid fa-xmark";
    home.style.display="none";
    unusual.style.display="flex";
    list = 1;
  } else {
    page1.style.display = "flex";
    slide.style.display = "none";
    dot.className = "fa-solid fa-ellipsis";
    home.style.display="flex";
    unusual.style.display="none";
    list = 0;
  }
});

// Song play via List
function listplay(index) {
  load(index);
  audio.play();
  base.classList.add("base2");
  box.classList.add("box2");
  ground.classList.add("ground2");
  mid.className = "fa-solid fa-pause"; //   ||
  flag++;
  page1.style.display = "flex";
  slide.style.display = "none";
  dot.className = "fa-solid fa-ellipsis";
  home.style.display="flex";
  unusual.style.display="none";
  list = 0;
}
