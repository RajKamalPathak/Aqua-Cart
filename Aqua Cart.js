const heroGreeting = document.getElementById("heroGreeting");

function updateGreeting() {
  const hour = new Date().getHours();
  let text = "Welcome to Aqua Cart";

  if (hour >= 6 && hour < 12) {
    text = "Morning viewings at Aqua Cart";
  } else if (hour >= 12 && hour < 17) {
    text = "Afternoon selections at Aqua Cart";
  } else if (hour >= 17 && hour < 22) {
    text = "Evening ambience by Aqua Cart";
  } else {
    text = "After-hours concierge by Aqua Cart";
  }

  heroGreeting.textContent = text;
}

updateGreeting();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
  mainNav.classList.toggle("show");
});

let cartCount = 0;
const cartTotal = document.getElementById("cartTotal");
const cartButtons = document.querySelectorAll(".js-add-cart");

cartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    cartCount++;
    cartTotal.textContent = cartCount;
  });
});

const btnViewCollections = document.getElementById("btnViewCollections");
const btnRequestPlan = document.getElementById("btnRequestPlan");

btnViewCollections.addEventListener("click", function () {
  document.getElementById("collections").scrollIntoView({ behavior: "smooth" });
});

btnRequestPlan.addEventListener("click", function () {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

const contactForm = document.getElementById("contactForm");
const contactInfo = document.getElementById("contactInfo");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = document.getElementById("userName").value.trim();
  const cityValue = document.getElementById("userCity").value.trim();
  const emailValue = document.getElementById("userEmail").value.trim();
  const messageValue = document.getElementById("userMessage").value.trim();

  if (!nameValue || !cityValue || !emailValue || !messageValue) {
    contactInfo.style.color = "#f97373";
    contactInfo.textContent = "Please share all details so we can plan properly.";
  } else {
    contactInfo.style.color = "#4ade80";
    contactInfo.textContent = "Thank you. A curator will contact you shortly.";
    contactForm.reset();
  }
});

const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function () {
  alert("Client login will be enabled in the next Aqua Cart phase.");
});
