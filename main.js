window.onload = function() {
    showSlides(slideIndex);
    setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 4000);
};
