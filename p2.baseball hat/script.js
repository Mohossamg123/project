    const zoomContainer = document.querySelector(".zoom-container");
    const zoomImg = document.querySelector("#zoomImg");
    const thumbs = document.querySelectorAll(".thumb");

    // Zoom effect on mouse move
    zoomContainer.addEventListener("mousemove", function(e) {
      const rect = zoomContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      zoomImg.style.transform = "scale(2)";
      zoomImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    });

    zoomContainer.addEventListener("mouseleave", function() {
      zoomImg.style.transform = "scale(1)";
      zoomImg.style.transformOrigin = "center center";
    });

    // Switch image when clicking thumbnail
    thumbs.forEach(thumb => {
      thumb.addEventListener("click", () => {
        thumbs.forEach(t => t.classList.remove("active"));
        thumb.classList.add("active");
        zoomImg.src = thumb.src;
        zoomImg.style.transform = "scale(1)";
      });
    });




    /////////5///////



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







  
