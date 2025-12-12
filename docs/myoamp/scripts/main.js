const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/hand.jpg");
  } else {
    myImage.setAttribute("src", "images/woman.webp");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

