$(function(){
  $('.title').hide().slideUp().slideDown(100);
});
ScrollOut({
  targets: 'h2,p'
})

$(window).on("load",function(){
  $(".loader-wrapper").fadeOut("slow");
});