// =========================
// 1. SELECTORES
// =========================
const images = document.querySelectorAll(".track img");
const heroImg = document.querySelector(".hero img");
const cursor = document.querySelector(".cursor");
const track = document.querySelector(".track");
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
    setTimeout(typeWriter, 80);
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
// 5. CAROUSEL CON CURSOR
// =========================
let mouseX = 0;
let currentX = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
});

function animate() {
  currentX += (mouseX * 80 - currentX) * 0.05;
  track.style.transform = `translateX(${currentX}px)`;
  requestAnimationFrame(animate);
}
animate();

// =========================
// 6. CLICK → ZOOM
// =========================
images.forEach(img => {
  img.addEventListener("click", () => {
    const isActive = img.classList.contains("zoomed");

    // resetear todas
    images.forEach(i => i.classList.remove("zoomed"));

    if (!isActive) {
      img.classList.add("zoomed");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
});
