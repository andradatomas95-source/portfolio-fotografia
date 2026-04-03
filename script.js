// Typewriter
const text = "TOMÁS ANDRADA - FOTOGRAFÍA DEPORTIVA";
const typingElement = document.getElementById("typing");
let i = 0;

function typeWriter() {
  if(i < text.length){
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Quotes
const quotes = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día. – Robert Collier",
  "La fuerza no proviene de la capacidad física, sino de una voluntad indomable. – Mahatma Gandhi",
  "No se trata de ser el mejor, se trata de ser mejor que ayer. – Desconocido",
  "El talento gana partidos, pero el trabajo en equipo y la inteligencia gana campeonatos. – Michael Jordan",
  "El dolor es temporal, la gloria es para siempre. – Lance Armstrong"
];

const quoteElement = document.getElementById("quote");
const quoteBox = document.getElementById("quote-box");
let quoteIndex = 0;

function changeQuote(){
  quoteElement.textContent = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
}
changeQuote();
setInterval(changeQuote, 5000);

// Hero fade + quote show/hide
const hero = document.querySelector(".hero");
window.addEventListener("scroll", ()=>{
  let opacity = 1 - window.scrollY/300;
  hero.style.opacity = opacity < 0 ? 0 : opacity;

  if(opacity < 1){
    quoteBox.classList.add("show");
  } else {
    quoteBox.classList.remove("show");
  }
});

// Carrusel scroll con mouse
const track = document.querySelector(".track");
track.addEventListener("wheel", (e)=>{
  e.preventDefault();
  track.scrollLeft += e.deltaY;
});

// Overlay zoom
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
let currentZoomed = null;

document.querySelectorAll(".track img").forEach(img=>{
  img.addEventListener("click", ()=>{
    if(currentZoomed) return;
    overlay.classList.add("show");
    overlayImg.src = img.src;
    currentZoomed = img;
  });
});

overlay.addEventListener("click", ()=>{
  overlay.classList.remove("show");
  currentZoomed = null;
});

// Custom cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
