$(document).ready(function () {

  $(window).on('load',function(){
    $('#subModal').modal('show');
});




  $('.basket').click(function (event) { 
    // var heightHeader = $('#header-info').height();   
    // var heightNav = $('#nav').height();
    // var offset = $('.basket').offset();
    
    $('.homeCart-lg')
    .css('right',$(window).width() - ( $('.basket').offset()
    .left + $('.basket').outerWidth())-10);   

    
    event.stopPropagation();  
    
    $('#shoppingCart').toggle();  
return false;
});  
$(document).click(function(event){
  var _con = $('#shoppingCart');   // 设置目标区域
  if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1

  $('#shoppingCart').hide();          //淡出消失

  }
});
// $('.basket').mouseover(function (event) { 
//   var heightHeader = $('#header-info').height();   
//   var heightNav = $('#nav').height();
//   var offset = $('.basket').offset();
 
//   $('.homeCart-lg').css('top', heightNav+heightHeader-10)
//     .css('right',$(window).width() - ( $('.basket').offset().left + $('.basket').outerWidth()));
  
//   //取消事件冒泡  
//   event.stopPropagation();  
//   //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
//   $('#shoppingCart').show();  
// return false;
// });  
//点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。

// $(document).mouseover(function(event){
//   var _con = $('#shoppingCart');   // 设置目标区域
//   if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1

//   $('#shoppingCart').hide();          //淡出消失

//   }
// });


// $('li.twoLevelBtn').click(function (event) {   
//   var heightBtn = $('li.twoLevelBtn').height();
//   var offsetTop = $('li.twoLevelBtn').offset().top;

//   $('.homeTwoLevelNav').css('top', heightBtn + offsetTop - 10);
 
//   //取消事件冒泡  
//   event.stopPropagation();  
//   //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
//   $('#twoLevelNav').toggle();  

// return false;
// });  



$('li.twoLevelBtn').mouseover(function (event) { 
  var heightBtn = $('li.twoLevelBtn').height();
  var offsetTop = $('li.twoLevelBtn').offset().top;
 
  $('.homeTwoLevelNav').css('top', heightBtn + offsetTop - 10);
  
  //取消事件冒泡  
  event.stopPropagation();  
  //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
  $('#twoLevelNav').show();  

return false;
});  

$(document).click(function(event){
  var _con = $('#twoLevelNav');   // 设置目标区域
  if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1

  $('#twoLevelNav').hide();          //淡出消失

  }
});



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