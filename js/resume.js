let name = "My name is Faran Javed";
let about = "I am a Front-End Web Developer";
let i = 0;
const title = () => {
  if (i <= name.length - 1) {
    document.querySelector(".title").innerHTML =
      document.querySelector(".title").innerHTML + name.charAt(i);
    i++;
    setTimeout(title, 100);
  } else if (i > name.length - 1) {
    i = 0;
    subtitle();
  }
};
const subtitle = () => {
  if (i <= about.length - 1) {
    document.querySelector(".subtitle").innerHTML =
      document.querySelector(".subtitle").innerHTML + about.charAt(i);
    i++;
    setTimeout(subtitle, 100);
  }
};

title();

// Animate Button

setTimeout(() => {
  const element = document.querySelector(".projects");
  element.classList.add("animated", "heartBeat");
}, 5400);
