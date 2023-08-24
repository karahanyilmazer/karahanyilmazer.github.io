$(document).ready(function(){
    $('.carousel-center').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.carousel-nav'
      });
      $('.carousel-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.carousel-center',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
});
