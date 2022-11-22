const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");

let counter = 0;
let count = 0;
const color = ["red", "yellow", "orange", "green"];

one.style.backgroundColor = color[counter];
two.style.backgroundColor = color[counter + 1];
three.style.backgroundColor = color[counter + 2];
four.style.backgroundColor = color[counter + 3];

const btnOne = document.getElementById("btn-1");
const btnTwo = document.getElementById("btn-2");
btnOne.addEventListener("click", clockWise);
btnTwo.addEventListener("click", antiClockwise);

function clockWise() {
  let arr = [];
  for (let i = 0; i < color.length; i++) {
    arr[(i + count) % color.length] = color[i];
  }
  count++;
  
  one.style.backgroundColor = arr[0];
  two.style.backgroundColor = arr[1];
  three.style.backgroundColor = arr[2];
  four.style.backgroundColor = arr[3];
}

let j = 0;
function antiClockwise() {
  j++;
  if (j == 4) count = 0;
  let arr = [];
  for (let i = 0; i <= color.length - 1; i++) {
    if (i < color.length - count) arr[i] = color[i + count];
    else arr[i] = color[i - color.length + count];
  }
  count++;
  
  one.style.backgroundColor = arr[0];
  two.style.backgroundColor = arr[1];
  three.style.backgroundColor = arr[2];
  four.style.backgroundColor = arr[3];
}
