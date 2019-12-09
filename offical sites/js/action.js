$(document).ready(function () {

  $(window).on('load', function () {
    $('#subModal').modal('show');
  });

  $('.basket').click(function (event) {
    // var heightHeader = $('#header-info').height();   
    // var heightNav = $('#nav').height();
    // var offset = $('.basket').offset();

    $('.homeCart-lg')
      .css('right', $(window).width() - ($('.basket').offset()
        .left + $('.basket').outerWidth()) - 10);


    event.stopPropagation();

    $('#shoppingCart').toggle();
    return false;
  });
  $(document).click(function (event) {
    var _con = $('#shoppingCart'); // 设置目标区域
    if (!_con.is(event.target) && _con.has(event.target).length === 0) { // Mark 1

      $('#shoppingCart').hide(); //淡出消失

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

  $(document).click(function (event) {
    var _con = $('#twoLevelNav'); // 设置目标区域
    if (!_con.is(event.target) && _con.has(event.target).length === 0) { // Mark 1

      $('#twoLevelNav').hide(); //淡出消失

    }
  });




});