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

//--------------------------------------------------------------------------------------

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

//-----------------------------------------------------------------------------------------

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

//-------------------------------------------------------------------------

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

//--------------------------------------------------------------------------

//----3-assign imgsurls to backface of cards

let backs = document.querySelectorAll(".back");
for (let i = 0; i < backs.length; i++) {
  backs[
    i
  ].style.cssText = `background: url(${imglist[i].imgsrc}.jpg) ;background-position: center;background-repeat: no-repeat;background-size: cover;`;
}

//--------------------------------------------------------------------------

//defining rotate completely fn
function rotate() {
  this.style.cssText = `transform: rotateY(180deg);
  transition: all 1s ease;`;
}
//------------------------------------------------------------------

//defining delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
//defining reverse rotate
async function revrotate() {
  console.log(this);
  rotate.call(cards[this]); //flip

  await delay(1000);
  cards[this].style.cssText = `transform: rotateY(0deg);
transition: all 1s ease;`;
}
//--------------------------------------------------------------------------

//defining reverse both
function revboth(curr, prev) {
  revrotate.call(curr);
  revrotate.call(prev);
}

//------------------------------------------------------------------

//defining wait fn to wait for settimeout in revrotate
function wait(a, b) {
  revboth(a, b);
}
//declaring fn odd that keep card flipped if click is odd
function odd(currin) {
  console.log(`i am odd with currundex of ${currin} and 
  my card is ${cards[currin]}`);

  rotate.call(cards[currin]);
}

//--------------------------------------------------------------------

//declaring fn check source to check url of 2 imgs in imglist equql or not

function checksrc(currin, previn) {
  if (imglist[currin].imgsrc == imglist[previn].imgsrc) {
    rotate.call(cards[currin]);
    console.log(`sources are equal`);
  } else {
    wait(currin, previn);
  }
}

//------------------------------------------------------------------------------

//declaring fn even that checks whether current indeex = prev index or not
function even(currin, previn) {
  console.log(`i am even`);
  checksrc(currin, previn); //checks if urls of current and previous are equal
}
//declaring fn that checks counter of no clicks is even or odd
let clickcounter = 0;
let preindex = -1;
function checkcounter(c, currin, previn) {
  if (c % 2 == 1) {
    odd(currin);
  } else {
    even(currin, previn);
  }
  console.log(`currindex is ${currin} and previndex is${previn}  `);
  console.log(imglist[currin].imgsrc);
}

for (let i = 0; i < cards.length; i++) {
  let mycard = cards[i];
  cards[i].addEventListener("click", function () {
    clickcounter++;
    checkcounter(clickcounter, i, preindex);
    preindex = i;
  });
}
