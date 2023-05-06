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
  front.classList.add("front");
  back = document.createElement("div");
  back.classList.add("back");
  cards[i].append(front, back);
}

//styling of back must be dynamic to dynamically assign imgs to cards
//1-cerating imgobject(url,categoryno.,)
class imgobject {
  constructor(imgsrc, cat) {
    this.imgsrc = "";
    this.cat = 0;
  }
}
//now we will makw array of imgobjects,shuffle them and distribute them across
//array of backfaces,
//used backfaces should be excluded from distribution
//----1-create array of photos
let imglist = [];
for (let i = 0; i < noofcards; i++) {
  imglist.push(new imgobject());
}
