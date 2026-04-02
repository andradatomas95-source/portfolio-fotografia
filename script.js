// =========================
// 1. SELECTORES
// =========================
const images = document.querySelectorAll(".track img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const heroImg = document.querySelector(".hero img");
const cursor = document.querySelector(".cursor");
const track = document.querySelector(".track");

// =========================
// 2. OVERLAY (CLICK IMAGEN)
// =========================
images.forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src;
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

// =========================
// 3. HERO FADE AL SCROLL
// =========================
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  let opacity = 1 - scroll / 500;
  if (opacity < 0) opacity = 0;

  heroImg.style.opacity = opacity;
});

// =========================
// 4. CURSOR PERSONALIZADO
// =========================
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// zoom del cursor en hover
images.forEach(img => {
  img.addEventListener("mouseenter", () => cursor.classList.add("active"));
  img.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

// =========================
// 5. CAROUSEL CON CURSOR (MOVIMIENTO)
// =========================
let mouseX = 0;
let currentX = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
});

function animateCarousel() {
  currentX += (mouseX * 50 - currentX) * 0.05;
  track.style.transform = `translateX(${currentX}px)`;
  requestAnimationFrame(animateCarousel);
}

animateCarousel();

// =========================
// 6. VELOCIDAD DINÁMICA (SCROLL)
// =========================
window.addEventListener("scroll", () => {
  let speed = 60 - window.scrollY / 20;

  if (speed < 15) speed = 15;

  track.style.animationDuration = speed + "s";
});
// cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// zoom cursor en hover
document.querySelectorAll(".track img").forEach(img => {
  img.addEventListener("mouseenter", () => cursor.classList.add("active"));
  img.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

// velocidad dinámica
const track = document.querySelector(".track");

window.addEventListener("scroll", () => {
  let speed = 60 - window.scrollY / 20;

  if (speed < 15) speed = 15;

  track.style.animationDuration = speed + "s";
});
// cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// zoom cursor en hover
document.querySelectorAll(".track img").forEach(img => {
  img.addEventListener("mouseenter", () => cursor.classList.add("active"));
  img.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

// velocidad dinámica
const track = document.querySelector(".track");

window.addEventListener("scroll", () => {
  let speed = 60 - window.scrollY / 20;

  if (speed < 15) speed = 15;

  track.style.animationDuration = speed + "s";
});
const track = document.querySelector(".track");

let mouseX = 0;
let currentX = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
});

function animate() {
  currentX += (mouseX * 50 - currentX) * 0.05;
  track.style.transform = `translateX(${currentX}px)`;
  requestAnimationFrame(animate);
}

animate();
const images = document.querySelectorAll(".track img");

images.forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("active");
  });
});
