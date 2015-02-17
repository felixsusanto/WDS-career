$(function () {
  smoothScroll.init();
  $('[data-toggle="tooltip"]').tooltip();
  $('.pin>a.disabled').click(function(e){
    e.preventDefault();
  });
  $('body').scrollspy({target: '#navbar-scrollspy'});
  var pathImg = $('.header-image').data('imgsrc');
  $('.header-image').css('background-image', 'url('+pathImg+')');
});