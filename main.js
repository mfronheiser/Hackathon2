const allImg = document.querySelectorAll("img");
allImg.forEach((img) => {
  img.src =
    "https://www.seussville.com/app/uploads/2019/11/character-Grinch.png";
  img.srcset =
    "https://www.seussville.com/app/uploads/2019/11/character-Grinch.png";
});

const imageUrl =
  'url("https://www.seussville.com/app/uploads/2019/11/character-Grinch.png")';

const bgImageElements = document.querySelectorAll(".bg-image");
bgImageElements.forEach((bgImageElement) => {
  bgImageElement.style.backgroundImage = imageUrl;
});

const bgImgElements = document.querySelectorAll(".bg-img");
bgImgElements.forEach((bgImgElement) => {
  bgImgElement.style.backgroundImage = imageUrl;
});

const eventImageElements = document.querySelectorAll(".event-img");
eventImageElements.forEach((eventImageElement) => {
  eventImageElement.style.backgroundImage = imageUrl;
});

const profileImageElements = document.querySelectorAll(".profile-img");
profileImageElements.forEach((profileImageElement) => {
  profileImageElement.style.backgroundImage = imageUrl;
});
