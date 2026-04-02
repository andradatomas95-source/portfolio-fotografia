const images = document.querySelectorAll(".grid img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    overlayImg.src = img.src;
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero img");
  let scroll = window.scrollY;

  let opacity = 1 - scroll / 500;

  if (opacity < 0) opacity = 0;

  hero.style.opacity = opacity;
});
let mouseX = 0;
let currentX = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
});

function animate() {
  currentX += (mouseX * 80 - currentX) * 0.05;
  document.querySelector(".track").style.transform = `translateX(${currentX}px)`;
  requestAnimationFrame(animate);
}

animate();
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
// =========================
// TYPEWRITER
// =========================
const text = "TOMAS ANDRADA";
const typingElement = document.getElementById("typing");

let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}

typeWriter();
const images = document.querySelectorAll(".track img");

images.forEach(img => {
  img.addEventListener("click", () => {
    img.classList.toggle("zoomed");

    // bloquear scroll cuando está abierta
    if (img.classList.contains("zoomed")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });
});
const overlay = document.getElementById("overlay");

images.forEach(img => {
  img.addEventListener("click", () => {
    overlay.style.display = img.classList.contains("zoomed") ? "none" : "flex";
  });
});
