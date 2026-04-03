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
window.onload = typeWriter;

// =========================
// QUOTES REALES
// =========================
const quotes = [
  "El éxito es el resultado de la preparación. - Michael Jordan",
  "Nunca digas nunca. - LeBron James",
  "El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos. - Michael Jordan",
  "No hay atajos hacia cualquier lugar que valga la pena. - Kobe Bryant"
];

const quoteEl = document.getElementById("quote");
const quoteBoxEl = document.getElementById("quote-box");
let quoteIndex = 0;

function showQuotes() {
  quoteEl.innerText = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
}
setInterval(showQuotes, 5000);

// =========================
// HERO FADE OUT
// =========================
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const heroHeight = hero.offsetHeight;
  if(window.scrollY > heroHeight / 2){
    hero.classList.add('fade-out');
    quoteBoxEl.classList.add('show');
  } else {
    hero.classList.remove('fade-out');
    quoteBoxEl.classList.remove('show');
  }
});

// =========================
// CAROUSEL WHEEL SCROLL
// =========================
const track = document.querySelector('.track');
track.addEventListener('wheel', e => {
  e.preventDefault();
  track.scrollLeft += e.deltaY;
});

// =========================
// IMAGE ZOOM
// =========================
const images = document.querySelectorAll('.track img');
const overlayImg = document.getElementById('overlay-img');
const overlay = document.getElementById('overlay');

images.forEach(img => {
  img.addEventListener('click', () => {
    images.forEach(i => i.classList.remove('zoomed'));
    overlayImg.src = img.src;
    img.classList.add('zoomed');
    overlay.style.display = 'block';
  });
});

overlay.addEventListener('click', () => {
  overlay.style.display = 'none';
  images.forEach(i => i.classList.remove('zoomed'));
});

// =========================
// CURSOR
// =========================
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// =========================
// MUSIC
// =========================
const musicBtn = document.getElementById('music-btn');
const music = document.getElementById('music');
musicBtn.addEventListener('click', () => {
  if(music.paused){
    music.play();
    musicBtn.innerText = '❚❚';
  } else {
    music.pause();
    musicBtn.innerText = '♫';
  }
});
