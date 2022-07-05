const sectionBg = document.querySelector("#section-bg");
const images = ["bg_01.jpg", "bg_02.jpg","bg_03.jpg", "bg_04.jpg","bg_05.jpg", "bg_06.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `./img/${chosenImage}`;

sectionBg.append(bgImage);