const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  buttons = document.querySelectorAll(".button");

const images = document.querySelectorAll(".carousel img");

let imageIndex = 0,
  intervalId;

const autoSlide = () => {
  intervalId = setInterval(() => slideImage(), 2000);
};

autoSlide();

const slideImage = () => {
  imageIndex = (imageIndex + 1) % images.length;

  carousel.style.transform = `translateX(-${imageIndex * 100}%)`;
};

const updateClick = (e) => {
  clearInterval(intervalId);

  imageIndex =
    e.target.id === "next"
      ? (imageIndex + 1) % images.length
      : (imageIndex - 1 + images.length) % images.length;

  carousel.style.transition = "transform 0.4s ease-in-out";
  carousel.style.transform = `translateX(-${imageIndex * 100}%)`;

  setTimeout(() => {
    carousel.style.transition = "none";
  }, 400);

  autoSlide();
};

buttons.forEach((button) => button.addEventListener("click", updateClick));

wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

wrapper.addEventListener("mouseleave", autoSlide);

function toggleDropdown() {
  const dropdownContainer = document.querySelector(".dropdown-container");
  dropdownContainer.classList.toggle("clicked");

  console.log("Dropdown toggled!");
}

document.addEventListener("mousedown", function (event) {
  const dropdownContainer = document.querySelector(".dropdown-container");

  if (!dropdownContainer.contains(event.target)) {
    dropdownContainer.classList.remove("clicked");
  }
});
