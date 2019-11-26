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

  $('.carousel-bestSeller').slick({
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.sl-prev'),
    nextArrow: $('.sl-next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow:3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  

  });

  $('.carousel-filter').slick({
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.sli-prev'),
    nextArrow: $('.sli-next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  

  });



});