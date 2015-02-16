$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('.pin>a.disabled').click(function(e){
    e.preventDefault();
  });
  $('.team-icon-container a.disabled').click(function(e){
    e.preventDefault();
  });
});