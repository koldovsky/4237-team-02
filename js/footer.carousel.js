document.addEventListener('DOMContentLoaded', function () {
    const thumbnails = document.querySelectorAll('[data-bs-slide-to]');
    const carousel = document.querySelector('#instaCarousel');
  
    if (!carousel || thumbnails.length === 0) return;
  
    const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
  
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', function () {
        bsCarousel.to(index);
      });
    });
  });