const images = document.querySelectorAll(".track img");
const carousel = document.querySelector(".carousel");
const hero = document.querySelector(".hero");
const cursor = document.querySelector(".cursor");

const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");

// Lightbox: solo una foto a la vez
images.forEach(img => {
  img.addEventListener("click", e => {
    if(overlay.classList.contains("show")){
      overlay.classList.remove("show");
      setTimeout(()=>{
        overlayImg.src = img.src;
        overlay.classList.add("show");
      },200);
    } else {
      overlayImg.src = img.src;
      overlay.classList.add("show");
    }
    e.stopPropagation();
  });
});

overlay.addEventListener("click", ()=>overlay.classList.remove("show"));

// Scroll horizontal
carousel.addEventListener("wheel", e=>{
  e.preventDefault();
  carousel.scrollLeft += e.deltaY;
});

// Fade hero al scroll
window.addEventListener("scroll", ()=>{
  let opacity = 1 - window.scrollY/300;
  hero.style.opacity = opacity < 0 ? 0 : opacity;
});

// Cursor pelota de básquet
document.addEventListener("mousemove", e=>{
  cursor.style.left = e.clientX+"px";
  cursor.style.top = e.clientY+"px";
});

// Typewriter
const text = "TOMÁS ANDRADA - FOTOGRAFÍA DEPORTIVA";
const typingElement = document.getElementById("typing");
let index = 0;

function typeWriter(){
  if(index < text.length){
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener("load", typeWriter);
