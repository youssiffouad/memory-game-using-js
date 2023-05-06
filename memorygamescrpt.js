//making the no of cards appearing dynamic(difficulty level)

//----storing memorygamecontainer in variable
let mgcont = document.querySelector(".memorygameContainer");
console.log(mgcont);
let dlvl = 3;

let noofcards = dlvl * 4;
for (let i = 0; i < noofcards; i++) {
  //creating card
  card = document.createElement("div");

  //adding style to card
  card.classList.add("card");
  mgcont.appendChild(card);
}

//creating frontface, backface and appending to card

//---1-we need to get all card in an array
let cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  front = document.createElement("div");
  front.classList.add("front", "face");
  back = document.createElement("div");
  back.classList.add("back", "face");
  cards[i].append(back, front);
}

//styling of back must be dynamic to dynamically assign imgs to cards
//1-cerating imgobject(url,categoryno.,)
class imgobject {
  constructor(imgsrc) {
    this.imgsrc = "";
  }
}
//now we will makw array of imgobjects,shuffle them and distribute them across
//array of backfaces,
//used backfaces should be excluded from distribution
//----1-create array of photos
let imglist = [];
let photoid = 1;
const noofphotos = 4;
for (let i = 0; i < noofcards; i++) {
  // noofphotos=4 is different from no of cards,photoid
  //is either 1,2,3,4

  if (photoid > noofphotos) {
    photoid = 1;
  }
  imglist.push(new imgobject());
  imglist[i].imgsrc = `logos/photo-0${photoid}`;
  i++;
  imglist.push(new imgobject());
  imglist[i].imgsrc = `logos/photo-0${photoid}`;
  photoid++;
}

console.log(imglist);

//----2-shuffle array of photos
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
shuffleArray(imglist);
console.log(imglist);

//----3-assign imgsurls to backface of cards

let backs = document.querySelectorAll(".back");
for (let i = 0; i < backs.length; i++) {
  backs[
    i
  ].style.cssText = `background: url(${imglist[i].imgsrc}.jpg) ;background-position: center;background-repeat: no-repeat;background-size: cover;`;
}

//defining rotate completely fn
function rotate() {
  this.style.cssText = `transform: rotateY(180deg);
  transition: all 1s ease;`;
}
//defining reverse rotate
function revrotate() {
  this.style.cssText = `transform: rotateY(0deg);
  transition: all 1s ease;`;
}

//defining fn even rotate
function even(ele) {}

//defining function match

function match(indxcard1, indxcard2) {
  //note that we wanna match on backs.url ===imglist.imgsrc
}
//logic of clicking
let clickno = 1;
//making fn to decide what to do based on click is evevn or odd
function decide(cn, ele) {
  if (c % 2 == 1) {
    rotate.call(ele);
  } else {
    even();
  }
}
