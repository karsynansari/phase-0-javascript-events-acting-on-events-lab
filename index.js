// const dodger = document.getElementById("dodger");
// function moveDodgerLeft() {
//   const leftNumbers = dodger.style.left.replace("px", "");
//   const left = parseInt(leftNumbers, 10);

//   if (left > 0) {
//     dodger.style.left = `${left - 1}px`;
//   }
// }
// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft") {
//     moveDodgerLeft();
//   }
// });

// function moveDodgerRight() {
//   const leftNumbers = dodger.style.left.replace("px", "");
//   const left = parseInt(leftNumbers, 10);

//   if (left > 0) {
//     dodger.style.left = `${left + 1}px`;
//   }
// }
// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowRight") {
//     moveDodgerRight();
//   }
// });

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
//
function moveDodgerRight() {
  const rightNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(rightNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
}
//// function moveDodgerRight() {
//   const leftNumbers = dodger.style.left.replace("px", "");
//   const left = parseInt(leftNumbers, 10);

//   if (left > 0) {
//     dodger.style.left = `${left + 1}px`;
//   }
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
    // console.log("this is working");
  }
});

//Add anotion condition to the callback function to call moveDodgerRight(else??)
//inside the moveDodgerRight function, move the dodger left + 1px
//write an if statement inside of moveDodgerRight that prevents the dodger from disappearing
