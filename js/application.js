$(document).ready(function() {

  $("#about-link").on("click", "a", function(e){
    e.preventDefault();
   $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 700);
  });

  $("#work-link").on("click", "a", function(e){
    e.preventDefault();
   $('html, body').animate({
      scrollTop: $("#work").offset().top
    }, 700);
  });

  $("#new-link").on("click", "a", function(e){
    e.preventDefault();
   $('html, body').animate({
      scrollTop: $("#new").offset().top
    }, 700);
  });

  $("#contact-link").on("click", "a", function(e){
    e.preventDefault();
   $('html, body').animate({
      scrollTop: $("#contact").offset().top
    }, 700);
  });
});