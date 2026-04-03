// =========================
// TYPEWRITER
// =========================
const text = "TOMÁS ANDRADA - FOTOGRAFÍA DEPORTIVA";
const typingEl = document.getElementById("typing");
let i = 0;

function typeWriter() {
  if(i < text.length){
    typingEl.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// =========================
// QUOTES
// =========================
const quotes = [
  "El talento gana partidos, pero el trabajo en equipo gana campeonatos. - Michael Jordan",
  "No puedes poner un límite a nada. Cuanto más sueñas, más lejos llegas. - Michael Phelps",
  "Nunca digas nunca. - Wayne Gretzky",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier"
];

const quoteBox = document.getElementById("quote-box");
const courtBg = document.getElementById("court-bg");
let quoteIndex = 0;

function showQuote() {
  quoteBox.textContent = quotes[quoteIndex];
  quoteBox.classList.add("show");
  courtBg.classList.add("show");
  quoteIndex = (quoteIndex + 1) % quotes.length;
}
setInterval(showQuote, 5000);
showQuote();

// =========================
// SCROLL CAROUSEL CON WHEEL
// =========================
const track = document.querySelector(".track");

track.addEventListener("wheel", (e) => {
  e.preventDefault();
  track.scrollLeft += e.deltaY;
});

// =========================
// ZOOM IMAGEN
// =========================
let currentZoomed = null;

track.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    if(currentZoomed) {
      currentZoomed.classList.remove("zoomed");
    }
    if(currentZoomed !== img){
      img.classList.add("zoomed");
      currentZoomed = img;
    } else {
      currentZoomed = null;
    }
  });
});

// =========================
// CURSOR MOVIMIENTO
// =========================
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// =========================
// MÚSICA
// =========================
const musicBtn = document.getElementById("music-btn");
const music = document.getElementById("music");

musicBtn.addEventListener("click", () => {
  if(music.paused){
    music.play();
  } else {
    music.pause();
  }
});
