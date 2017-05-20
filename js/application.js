$(document).ready(function() {

  $("#home-link").on("click", function(e){
    e.preventDefault();
   $('html, body').animate({
      scrollTop: $("#page-top").offset().top
    }, 700);
  });

   $("#header-button").on("click", function(e){
    e.preventDefault();
   $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 700);
  });

  $("#about-link").on("click", "a", function(e){
    e.preventDefault();
   $('html, body').animate({
      scrollTop: $("#news").offset().top
    }, 700);
  });

  $("#work-link").on("click", "a", function(e){
    e.preventDefault();
   $('html, body').animate({
      scrollTop: $("#work").offset().top
    }, 700);
  });

  $("#news-link").on("click", "a", function(e){
    e.preventDefault();
   $('html, body').animate({
      scrollTop: $("#news").offset().top
    }, 700);
  });

  $("#contact-link").on("click", "a", function(e){
    e.preventDefault();
   $('html, body').animate({
      scrollTop: $("#news").offset().top
    }, 700);
  });

  $(".navbar-collapse").on("click", "a", function(e) {
    if( $(e.target).closest(".navbar-collapse").attr("aria-expanded") === "true" ) {
        $(e.target).closest(".navbar-collapse").attr("aria-expanded", "false");
        $(e.target).closest(".navbar-collapse").removeClass("in");
        $(".navbar-toggle").addClass("collapsed");
        $(".navbar-toggle").attr("aria-expanded", "false");
    };
  });
});