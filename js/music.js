// All songs
var arr = [
  {
    title: "Aurora-Runway",
    singer: "Vipasha Malhotra",
    songsrc: "music/s1.mp3",
    imgsrc:"images/p5.jpg"
  },
  {
    title: "Dariya",
    singer: "Manoj Muntashir",
    songsrc: "music/s2.mp3",
    imgsrc:"images/p6.jpg"
  },
  {
    title: "Jug Jug Jeeve",
    singer: "Sachin-Jigar",
    songsrc: "music/s3.mp3",
    imgsrc:"images/p11.jpg",
  },
  {
    title: "Kehndi Hundi Si",
    singer: "Gurinder Gill",
    songsrc: "music/s4.mp3",
    imgsrc:"images/p8.jpg",
  },
  {
    title: "Kho Gaye Hum Kahan",
    singer: "Anvita Dutt",
    songsrc: "music/s5.mp3",
    imgsrc:"images/p13.png",
  },
  {
    title: "Main Jis Din Bhula Du",
    singer: "Jubin Nautiyal",
    songsrc: "music/s6.mp3",
    imgsrc:"images/p7.jpg",
  },
  {
    title: "Ringtone",
    singer: "Unknown",
    songsrc: "music/s7.mp3",
    imgsrc:"images/p1.jpg",
  },
  {
    title: "Ranjha",
    singer: "B Praak ",
    songsrc: "music/s8.mp3",
    imgsrc:"images/p3.jpg",
  },
  {
    title: "Tune Jo Na Kaha",
    singer: "Neil Nitin",
    songsrc: "music/s9.mp3",
    imgsrc:"images/p14.jpg",
  },
  {
    title: "Wiseblood",
    singer: "Zola Jesus",
    songsrc: "music/s10.mp3",
    imgsrc:"images/p18.jpg",
  }
];

// All Variables
var pre = document.getElementById("pre");
var mid = document.getElementById("mid");
var next = document.getElementById("next");
var box = document.getElementById("box");
var base = document.getElementById("base");
var ground = document.getElementById("ground");
var audio = document.getElementById("audio");
var title = document.getElementById("title");
var singer = document.getElementById("singer");
var moveing = document.getElementById("moveing");
var l = arr.length;
var flag = 0,i = 0;

//loading function and call initially
function load(){
    title.textContent = arr[i].title;
    singer.textContent = arr[i].singer;
    moveing.src = arr[i].imgsrc;
    audio.src = arr[i].songsrc;
}
load();

// Background Animation
mid.addEventListener("click", () => {
  base.classList.toggle("base2");
  box.classList.toggle("box2");
  ground.classList.toggle("ground2");
});

//song play-pause with its button animation  || <=> |>
mid.addEventListener("click", () => {
  if (!flag) {
    mid.className = "fa-solid fa-pause";  // ||
    audio.play();
    flag++;
  } 
  else {
    mid.className = "fa-solid fa-play";   // |>
    audio.pause();
    flag--;
  }
});

// Prevoius song
pre.addEventListener("click", () => {
    if(!audio.paused){
      i--;
      i = (i+l) % l;
      load();
      audio.play();
    }
    else{
      i--;
      i = (i+l) % l;
      load();
    }
});

// Next song
next.addEventListener("click", () => {
    if(!audio.paused){
      i++;
      i = i % l;  
      load();
      audio.play();
    }
    else{
      i++;
      i = i % l;
      load();
    }
});

// After completing a song
audio.onended=function(){
  base.classList.remove("base2");
  box.classList.remove("box2");
  ground.classList.remove("ground2");
  mid.className = "fa-solid fa-play";    //  |>
  flag=0;
}
