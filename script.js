const countButton = document.querySelector("#countButton");
const countNumber = document.querySelector("#countNumber");

let counter;

function countDown() {
  counter = parseInt(countNumber.innerText);
  counter--;
  if (counter > 0) {
    countNumber.innerText = counter;
    setTimeout(countDown, 1000);
  } else {
    countNumber.innerText = 10;
    countNumber.style.visibility = "hidden";
    countButton.style.visibility = "visible";
  }
}

countButton.addEventListener("click", function (event) {
  countButton.style.visibility = "hidden";
  countNumber.style.visibility = "visible";
  setTimeout(countDown, 1000);
});
