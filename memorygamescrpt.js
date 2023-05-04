//selecting img container
let eimgCont = document.querySelectorAll(".imgContainer");
console.log(eimgCont);

//creating front dace and appending it to img container
for (let i = 0; i < eimgCont.length; i++) {
  frontface = document.createElement("div");
  frontface.classList.add("frontface");
  console.log(frontface);
  eimgCont[i].appendChild(frontface);
}
