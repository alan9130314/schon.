$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    stagePadding: 50,
    center: true,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        stagePadding: 0,
        items: 1
      },
      600: {
        stagePadding: 0,
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })





});