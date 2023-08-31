document.addEventListener("DOMContentLoaded", function () {
    const itemCarousel = document.querySelector(".item-carousel");
    const itemCards = document.querySelectorAll(".item-card");

    let currentIndex = 0;

    function updateCarousel() {
        itemCarousel.style.transform = `translateX(-${currentIndex * 320}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % itemCards.length;
        updateCarousel();
    }

    // Auto-advance the carousel every 5 seconds
    setInterval(nextSlide, 5000);
});
