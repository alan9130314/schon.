$(document).ready(function () {

  var modal = document.getElementById("modal-container");

  
  
  $('.basket').click(function(e){
    modal.style.display = "block";
    
  });

  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }


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
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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
    responsive: [{
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

  $('.carousel-related').slick({
    centerMode: true,
    centerPadding: '0px',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: $('.sl-prev'),
    nextArrow: $('.sl-next'),
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
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


  $("#example_id").ionRangeSlider();
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 10,
    to: 599,
    skin: "round",
    onChange: function (data) {
      $('span.PFfrom').text(('$') + data.from);
      $('span.PFto').text(('$') + data.to);
    }
  });

  
  



});