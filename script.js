document.addEventListener('DOMContentLoaded', function() {
    const second = document.querySelector('.second-content');
    const third = document.querySelector('.third-content');
    const fourth = document.querySelector('.fourth-content');
    const fifth = document.querySelector('.fifth-content');
    const sixth = document.querySelector('.sixth-content');
    const seventh = document.querySelector('.seventh-content');

    window.addEventListener('scroll', function() {
      const secondTop = second.getBoundingClientRect().top;
      const thirdTop = third.getBoundingClientRect().top;
      const fourthTop = fourth.getBoundingClientRect().top;
      const fifthTop = fifth.getBoundingClientRect().top;
      const sixthTop = sixth.getBoundingClientRect().top;
      const seventhTop = seventh.getBoundingClientRect().top;

      if (secondTop < window.innerHeight * 0.8) {
        second.classList.add('visible');
      } else {
        second.classList.remove('visible');
      }

      if (thirdTop < window.innerHeight * 0.8) {
        third.classList.add('visible');
      } else {
        third.classList.remove('visible');
      }

      if (fourthTop < window.innerHeight * 0.8) {
        fourth.classList.add('visible');
      } else {
        fourth.classList.remove('visible');
       
      }

      if (fifthTop < window.innerHeight * 0.8) {
        fifth.classList.add('visible');
      } else {
        fifth.classList.remove('visible');
      }

      if (sixthTop < window.innerHeight * 0.8) {
        sixth.classList.add('visible');
      } else {
        sixth.classList.remove('visible');
      }

      if (seventhTop < window.innerHeight * 0.8) {
        seventh.classList.add('visible');
      } else {
        seventh.classList.remove('visible');
      }
    

 
    });
  });
  
  //text animation
  const animatedText = document.querySelectorAll('.animated-text');
  for (let i = 0; i < animatedText.length; i++) {
      animatedText[i].innerHTML = animatedText[i].innerText.replace(/\S+/g, "<span>$&</span>");
      const spans = animatedText[i].querySelectorAll('span');
      for (let j = 0; j < spans.length; j++) {
          spans[j].style.animationDelay = `${j * 0.5}s`;
      }
  }


  //countdown
const countdownDate = new Date("2023-06-16T00:00:00+08:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // calculate days, hours, minutes and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // update the countdown display
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

// call updateCountdown() every second
setInterval(updateCountdown, 1000);


//show button
const showContentBtn = document.getElementById("show-content-btn");
const contentContainer = document.querySelector(".container");

showContentBtn.addEventListener("click", function() {
    // toggle visibility of content container
    contentContainer.style.display = "block";

    // hide the show button
    showContentBtn.style.display = "none";
});




const playMusicBtn = document.getElementById("show-content-btn");
const music = document.getElementById("music");
music.volume = 0.1;


playMusicBtn.addEventListener("click", () => {
  music.play();
});



//navbar and music
const menuuToggle = document.querySelector('.menuToggle');
const audio = document.getElementById("music");
audio.volume = 0.1;
audio.loop = true;

menuuToggle.addEventListener('click', () => {
  if (menuuToggle.classList.contains('active')) {
    audio.play();
  } else {
    audio.pause();
  }
});


let menuToggle = document.querySelector('.menuToggle');

menuToggle.onclick = function () {
  menuToggle.classList.toggle('active')
}


