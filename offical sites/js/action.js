$(document).ready(function(){

  $('.center').slick({
    dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {

          centerMode: true,
          centerPadding: '10%',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {

          centerMode: true,
          centerPadding: '0%',
          slidesToShow: 1
        }
      }
    ]
  });


  
});