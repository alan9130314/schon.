$(document).ready(function () {


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