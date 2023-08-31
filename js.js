const container = document.querySelector('html');
const body = document.querySelector('body');
const track = document.querySelector('.track');
const table = track.querySelector('.table');
const images  = table.querySelectorAll('.image');
let count = 0;

const containerRect = track.getBoundingClientRect();

const imageWrapper = document.querySelector('.image-wrapper')
const imageItems = document.querySelectorAll('.image-wrapper > *')
const imageLength = imageItems.length
const perView = imageItems.length


const imageWrapper2 = document.querySelector('.image-wrapper2')
const imageItems2 = document.querySelectorAll('.image-wrapper2 > *')
const imageLength2 = imageItems2.length
const perView2 = imageItems2.length

let totalScroll = 0
let totalScroll2 = imageLength2;
const delay = 2000

imageWrapper.style.setProperty('--per-view', perView)
for(let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
}

imageWrapper2.style.setProperty('--per-view', perView)
for(let i = 0; i < perView2; i++) {
  imageWrapper2.insertAdjacentHTML('beforeend', imageItems2[i].outerHTML)
}
const widthEl = document.querySelector('.image-wrapper2 > :first-child').offsetWidth + 10
imageWrapper2.style.left = `-${imageLength2 * widthEl}px`
imageWrapper2.style.transition = '0s'

let start = null;
let start2 = null;

function scrolling(timestamp) {
  if (!start) start = timestamp;
  let progress = timestamp - start;
  
  if (progress > delay) {
    totalScroll++;
    if (totalScroll == imageLength + 1) {
      totalScroll = 1;
      imageWrapper.style.transition = '0s';
      imageWrapper.style.left = '0';
    }
    const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 10;
    imageWrapper.style.left = `-${totalScroll * widthEl}px`;
    imageWrapper.style.transition = '1s';
    start = timestamp;
  }
  requestAnimationFrame(scrolling);
}

function scrolling2(timestamp) {
  if (!start2) start2 = timestamp;
  let progress = timestamp - start2;
  
  if (progress > delay) {
    totalScroll2--;
    if (totalScroll2 == -1) {
      totalScroll2 = imageLength2 - 1;
      imageWrapper2.style.transition = '0s';
      const widthEl = document.querySelector('.image-wrapper2 > :first-child').offsetWidth + 10;
      imageWrapper2.style.left = `-${imageLength2 * widthEl}px`;
    }
    const widthEl = document.querySelector('.image-wrapper2 > :first-child').offsetWidth + 10;
    imageWrapper2.style.left = `-${totalScroll2 * widthEl}px`;
    imageWrapper2.style.transition = '1s';
    start2 = timestamp;
  }
  requestAnimationFrame(scrolling2);
}

requestAnimationFrame(scrolling);
requestAnimationFrame(scrolling2);

// container.scrollLeft = 0;
// container.scrollTop = 0;
// let targetScrollLeft = container.scrollLeft;
// let currentScrollLeft = container.scrollLeft;
let percent = 0; // Declare the percent variable

const isMobile = /iPhone|iPad|iPod|Android|CriOS|FxiOS|Macintosh/i.test(navigator.userAgent);

const calculateScrollPercent = () => {
  const scrollableWidth = container.scrollWidth - container.clientWidth;
  percent = -((targetScrollLeft / scrollableWidth) * 100); // Calculate the scroll percentage
  for(const image of document.querySelectorAll(".img")) {
    image.animate({
      objectPosition: `${100 + (percent/3)}% center`
    }, { duration: 1200, fill: "forwards" });
  }
};

const calculateScrollPercentMobile = () => {
  const scrollableWidth = container.scrollWidth - container.clientWidth;
  percent = -((container.scrollLeft / scrollableWidth) * 100); // Calculate the scroll percentage
  for(const image of document.querySelectorAll(".img")) {
    image.animate({
      objectPosition: `${100 + (percent/3)}% center`
    }, { duration: 1200, fill: "forwards" });
  }
};

const startScroll = () => {

  if (isMobile === false) {

  const smoothScroll = () => {
    currentScrollLeft += (targetScrollLeft - currentScrollLeft) * 0.1;
    container.scrollLeft = currentScrollLeft;
    requestAnimationFrame(smoothScroll);
  };
  smoothScroll();

  container.addEventListener('wheel', (e) => {
    if (preview === false) {
      targetScrollLeft += e.deltaY;
      // Set a limit to prevent scrolling beyond the container's left and right border
      targetScrollLeft = Math.max(0, Math.min(targetScrollLeft, container.scrollWidth - container.clientWidth));
      if (preview === false) {
        calculateScrollPercent();
      }
    }
  });
}
}

const startScrollMobile = () => {
  container.addEventListener('touchmove', () => {
    if (preview === false) {
      calculateScrollPercentMobile(); // Update the scroll percentage on each scroll event
    }
  });
};

window.onload = () => {
  if (!isMobile) {
    startScroll();
  }
  else {
    startScrollMobile();
  }
}

let text;
let prevScroll = 0;
let preview = false;

images.forEach((image) => {
  image.addEventListener('click', () => {
    if (preview === false) {
      if (!isMobile) {

      }
      else {
        container.style.overflowX = 'hidden';
        body.style.overflowX = 'hidden';
      }
      preview = true;
      count = 0;

      // Get the computed styles of the element
      const img = image.querySelector('.img');
      // const overlay = document.querySelector('.overlay');
      const track = document.getElementById('image-track');
      const bg1 = document.querySelector('.image-container');
      const bg2 = document.querySelector('.image-container2');
      var computedStyles = window.getComputedStyle(img);

      // Extract the width and height from the computed styles
      var width = parseFloat(computedStyles.getPropertyValue("width"));
      var height = parseFloat(computedStyles.getPropertyValue("height"));

      var rect = img.getBoundingClientRect();

//       var topPosition = rect.top + window.pageYOffset;
//       var leftPosition = rect.left + window.pageXOffset;

//       console.log("Width:", width);
// console.log("Height:", height);
      const cloned = image.cloneNode(true);
      cloned.className = 'cloned';

      cloned.style.width = width + 'px';
      cloned.style.height = height + 'px';
      cloned.style.left = rect.left + 'px';
      cloned.style.top = rect.top + 'px';
      document.body.appendChild(cloned);
      const id = image.id;
      const link = image.getAttribute('drive');
      const desc = image.getAttribute('description');
      text = document.createElement('div');
      p1 = document.createElement('p');
      p2 = document.createElement('p');
      bottom = document.createElement('div');
      redirect = document.createElement('a');
      clipboard = document.createElement('div');
      leave = document.createElement('div');

      bottom.classList.add('bottom');
      redirect.classList.add('redirect');
      clipboard.classList.add('copy');
      leave.classList.add('leave');

      redirect.setAttribute("href", link);
      redirect.setAttribute("target", "_blank");
      redirect.textContent = 'ชมแกลเลอรี';

      clipboard.innerHTML = '<img src="https://punzaza.xyz/static/img/photos/clipboard.svg">';
      leave.innerHTML = '<img src="https://punzaza.xyz/static/img/photos/xmark-solid.svg">';
      
      bottom.append(redirect);
      bottom.append(clipboard);

      p1.textContent = id;
      p2.textContent = desc;
      text.classList.add('info');
      p1.classList.add('name');
      p2.classList.add('description');
      text.append(p1);
      text.append(p2);

      cloned.appendChild(leave);
      cloned.appendChild(text);
      cloned.appendChild(bottom);
      
      // overlay.style.transition = 'all 0.7s ease';
      // overlay.style.opacity = '1';
      // overlay.style.webkitBackdropFilter = 'blur(10px)';
      // overlay.style.backdropFilter = 'blur(10px)';
      track.style.transition = 'all 0.7s ease';
      track.style.opacity = '20%';
      cloned.style.animation = 'resize3 0.7s ease, resize4 0.7s ease';
      cloned.style.animationFillMode = 'forwards';
      // prevScroll = container.scrollLeft;


      // if (!isMobile) {
      //   image.style.transition = 'all 0.7s ease';
      // }
      // else {
      //   image.style.transition = 'all 0s';
      // }

      // container.scrollLeft = 0;
      // targetScrollLeft = 0;

      
      // image.style.zIndex = '100';
      
      // cloned.style.transition = 'all 0.7s ease';
      // cloned.style.width = '80vw';
      // cloned.style.height = '80vh';
      // cloned.style.top = '50%';
      // cloned.style.left = '50%';
      // cloned.style.transform = 'translate(-50%, -50%)';

      // image.style.padding = '0';
      // image.style.position = 'fixed';
      // text.style.display = 'block';
    }
    
    function copy() {
      navigator.clipboard.writeText(image.getAttribute('drive'));
    }

    function cancel() {
      count++;
      // if (!isMobile) {
      //   image.style.transition = 'all 0.7s ease';
      // }
      // else {
      //   image.style.transition = 'all 0s';
      // }
  
      // image.style.transform = 'translate(0%, 0%)';
      // image.style.zIndex = '';
      // image.style.padding = '5vmin';
      // image.style.width = '25vmin';
      // image.style.height = '40vmin';
      // image.style.position = '';
      // if (image.querySelector('p')) {
      //   image.removeChild(text);
      //   image.removeChild(bottom);
      // }
      // else{

      // }

      if (preview) {
        
        if (body.querySelector('.cloned')) {
          
          // const overlay = document.querySelector('.overlay');
          // overlay.style.transition = 'all 0.7s ease';
          // overlay.style.opacity = '0';
          const track = document.getElementById('image-track');
          track.style.transition = 'all 0.7s ease';
          track.style.opacity = '1';
          const cloned = document.querySelector('.cloned');

            cloned.style.transition = 'all 0.25s ease';
            cloned.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
              cloned.style.transform = 'scale(0)';
            }, 250);
            
          
          setTimeout(() => {
            if (body.contains(cloned)) {
              body.removeChild(cloned);
            }
            if (!isMobile) {

            }
            else {
              const container = document.querySelector('html');
              const body = document.querySelector('body');
              container.style.overflowX = 'scroll';
              body.style.overflowX = 'scroll';
            }
            preview = false;
          }, 500);
        }
        // if (!isMobile) {
        //   container.scrollLeft = prevScroll;
        //   targetScrollLeft = prevScroll;
        // }
        
      }
    }

    clipboard.addEventListener('click', copy);
    leave.addEventListener('click', function() {
      if (count <= 1) {
        cancel();
      }
    });
    window.addEventListener('wheel', function() {
      if (count <= 1) {
        cancel();
      }
    });
    window.addEventListener('touchmove', function() {
      if (count <= 1) {
        cancel();
      }
    });
  })
})

// For the navigation bar
function antibac() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/10BOQxQoOAyITiFiQtU0g0dtPw6P9nKdi/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function paint() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/10B1pRIIX828aC760r-VN_tFUJjs6Ubnd/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function GDP() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/10AG0Pspmj2GcyV5q5VgI75LzlBKVC6FR/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Diabetes() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/107klEdxolsmIHYP7Isw1ldRn6pY_IrBv/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Heat() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/103mPieRwMx5u2KzKgthS1AkGwVoc6th-/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function medes() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1011T3rVVayXOjysvukEmvqlvpXKdN9en/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function NaCl() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/10OS9cwuKoiini5IdEj3B00psE-TNy4tE/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Ky() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1-WgKhdMXbeOnhEvRETRzJ9Bb6Il0__l8/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Time() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1-DFWRQ0Y2ZjP4SGn6llcctBXkoIwdZzo/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function TDG() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1-yzntjc5F-wsGKkGQc_ECPztloupKokq/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Bottle() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1-oEr6sHv3dxhRuA0BVbROU_hVEf85-tA/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Limit() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/10F8pqYjDj9NMnCiJN_YcRi-1F-6o2qXo/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function Art() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://drive.google.com/file/d/1-GK4VLxOhtRXl70rJirMGPcX7vEbSFm1/preview\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function portfolio() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://nileparun.com\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function web() {
  document.getElementById("display").innerHTML = "<iframe src=\"https://nileparun.com\" height=\"100%\" width=\"100%\"style=\"background-color: white;\" ></iframe>";
}
function cancel() {
  document.getElementById("display").innerHTML = "";
}

