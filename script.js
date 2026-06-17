function openLink(url){
  window.open(url, "_blank");
}

/* typing effect */
const text = "Frontend Developer | MERN Stack Learner";
let i = 0;

function type(){
  if(i < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 80);
  }
}

document.querySelector(".typing").innerHTML = "";
type();

/* scroll animation */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(el => {
    let pos = el.getBoundingClientRect().top;
    if(pos < window.innerHeight - 100){
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    }
  });
});