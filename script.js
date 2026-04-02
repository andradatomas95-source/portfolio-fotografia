// =========================
// 1. SELECTORES
// =========================
const images = document.querySelectorAll(".track img");
const heroImg = document.querySelector(".hero img");
const cursor = document.querySelector(".cursor");
const track = document.querySelector(".track");
const carousel = document.querySelector(".carousel");
const typingElement = document.getElementById("typing");

// =========================
// 2. TYPEWRITER
// =========================
const text = "TOMÁS ANDRADA - FOTOGRAFÍA DEPORTIVA";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}
typeWriter();

// =========================
// 3. HERO FADE
// =========================
window.addEventListener("scroll", () => {
  let opacity = 1 - window.scrollY / 500;
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

// zoom cursor
images.forEach(img => {
  img.addEventListener("mouseenter", () => cursor.classList.add("active"));
  img.addEventListener("mouseleave", () => cursor.classList.remove("active"));
});

// =========================
// 5. SCROLL CON RUEDA → CAROUSEL (PRO)
// =========================
let targetX = 0;
let currentX = 0;

carousel.addEventListener("wheel", (e) => {
  e.preventDefault();

  const speed = 1.5;
  targetX -= e.deltaY * speed;

  // límites (para no perder las fotos)
  const maxScroll = 0;
  const minScroll = -track.scrollWidth + window.innerWidth;

  if (targetX > maxScroll) targetX = maxScroll;
  if (targetX < minScroll) targetX = minScroll;
});

// animación suave
function smoothScroll() {
  currentX += (targetX - currentX) * 0.08;
  track.style.transform = `translateX(${currentX}px)`;
  requestAnimationFrame(smoothScroll);
}
smoothScroll();

// =========================
// 6. CLICK → ZOOM
// =========================
images.forEach(img => {
  img.addEventListener("click", () => {
    const isActive = img.classList.contains("zoomed");

    images.forEach(i => i.classList.remove("zoomed"));

    if (!isActive) {
      img.classList.add("zoomed");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
});
