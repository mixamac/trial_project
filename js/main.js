$(function () {

  $(".menu__link, .header__link, .logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $('.burger-btn').click(function () {
    $(this).toggleClass('active');
    $('.menu__list').toggleClass('active');
    $('body').toggleClass('scroll-hidden');
  });

  $('.menu__link').click(function () {
    $('.burger-btn').removeClass('active');
    $('.menu__list').removeClass('active');
    $('body').removeClass('scroll-hidden');
  });

  $('.logo').click(function () {
    $('.burger-btn').removeClass('active');
    $('.menu__list').removeClass('active');
    $('body').removeClass('scroll-hidden');
  });

  var mixer = mixitup('.portfolio__list');
});


$(function () {
  var menu = $('.menu');
  var headerContent = $('.header__content');

  $(window).scroll(function () {
    var scrollPosition = $(window).scrollTop();

    if (scrollPosition > 90) {
      menu.addClass('fixed');
      headerContent.addClass('fixed');
    } else {
      menu.removeClass('fixed');
      headerContent.removeClass('fixed');
    }
  });
});