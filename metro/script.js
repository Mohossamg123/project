
  const carousel = document.getElementById('carousel');
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth + 16;
  let position = 0;

  const cloneCards = carousel.innerHTML;
  carousel.innerHTML += cloneCards;

  document.querySelector('.right-arrow').addEventListener('click', () => {
    position++;
    carousel.style.transition = "transform 0.5s ease";
    carousel.style.transform = `translateX(-${cardWidth * position}px)`;

    if (position >= cards.length) {
      setTimeout(() => {
        carousel.style.transition = "none";
        position = 0;
        carousel.style.transform = `translateX(0px)`;
      }, 500);
    }
  });

  document.querySelector('.left-arrow').addEventListener('click', () => {
    if (position <= 0) {
      carousel.style.transition = "none";
      position = cards.length;
      carousel.style.transform = `translateX(-${cardWidth * position}px)`;
      setTimeout(() => {
        position--;
        carousel.style.transition = "transform 0.5s ease";
        carousel.style.transform = `translateX(-${cardWidth * position}px)`;
      }, 10);
    } else {
      position--;
      carousel.style.transition = "transform 0.5s ease";
      carousel.style.transform = `translateX(-${cardWidth * position}px)`;
    }
  });



  
  ////////////////////////////////////////////////////////////////////////10/////////////////////////////////
  const wrapperV2 = document.getElementById("flashCarouselWrapperV2");
const carouselV2 = document.getElementById("flashCarouselV2");
const leftArrowV2 = document.querySelector(".flash-left-v2");
const rightArrowV2 = document.querySelector(".flash-right-v2");

const originalCardsV2 = [...carouselV2.children];
const cardWidthV2 = originalCardsV2[0].offsetWidth + 16;

originalCardsV2.forEach(card => {
  const clone = card.cloneNode(true);
  carouselV2.appendChild(clone);
});

let scrollX_V2 = 0;

rightArrowV2.addEventListener("click", () => {
  scrollX_V2 += cardWidthV2;
  if (scrollX_V2 >= carouselV2.scrollWidth / 2) {
    scrollX_V2 = 0;
    wrapperV2.scrollLeft = 0;
  }
  wrapperV2.scrollTo({
    left: scrollX_V2,
    behavior: "smooth"
  });
});

leftArrowV2.addEventListener("click", () => {
  scrollX_V2 -= cardWidthV2;
  if (scrollX_V2 < 0) {
    scrollX_V2 = carouselV2.scrollWidth / 2 - wrapperV2.offsetWidth;
    wrapperV2.scrollLeft = scrollX_V2;
  }
  wrapperV2.scrollTo({
    left: scrollX_V2,
    behavior: "smooth"
  });
});



///////11////

  const blogWrapperX = document.getElementById("blogCarouselWrapperX");
  const blogCarouselX = document.getElementById("blogCarouselX");
  const blogLeftX = document.querySelector(".blog-left-x");
  const blogRightX = document.querySelector(".blog-right-x");

  const blogCardsX = [...blogCarouselX.children];
  const blogCardWidthX = blogCardsX[0].offsetWidth + 16;

  blogCardsX.forEach(card => {
    const clone = card.cloneNode(true);
    blogCarouselX.appendChild(clone);
  });

  let blogScrollX = 0;

  blogRightX.addEventListener("click", () => {
    blogScrollX += blogCardWidthX;
    if (blogScrollX >= blogCarouselX.scrollWidth / 2) {
      blogScrollX = 0;
      blogWrapperX.scrollLeft = 0;
    }
    blogWrapperX.scrollTo({
      left: blogScrollX,
      behavior: "smooth"
    });
  });

  blogLeftX.addEventListener("click", () => {
    blogScrollX -= blogCardWidthX;
    if (blogScrollX < 0) {
      blogScrollX = blogCarouselX.scrollWidth / 2 - blogWrapperX.offsetWidth;
      blogWrapperX.scrollLeft = blogScrollX;
    }
    blogWrapperX.scrollTo({
      left: blogScrollX,
      behavior: "smooth"
    });
  });


////////foter///

const btn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
