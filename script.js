$(function () {
  //navらへんのボタン//
  $('.header-category').hover(function(){
    $('.category-1').stop().slideDown(100);
  },function(){
      $('.category-1').stop().slideUp(100);
  });
  $('.category-02').hover(function(){
    $('.category-2').stop().slideDown(100);
  },function(){
    $('.category-2').stop().slideUp(100);
  });
  $('.header-level').hover(function(){
    $('.level').stop().slideDown(100);
  },function(){
      $('.level').stop().slideUp(100);
  });

  //↓虫眼鏡(search)ボタン//
  $('.header-right').click(function(){
    $('.search-btn').show();
    $('body , html').css('overflow' , 'hidden');
  });
  $('.search-content h2').click(function(){
    $('.search-btn').hide();
    $('body , html').css('overflow' , 'visible');
  });

  //main-nav//
  $('.main-nav-contents').slick({
    autoplay: true,
    dots: true,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '10%',
    prevArrow: '<i class="fas fa-chevron-left"></i>',
    nextArrow: '<i class="fas fa-chevron-right"></i>',
    responsive: [
      {
        breakpoint: 900,
      settings: {
        slidesToShow: 3,
        arrows: false,
      }
    },
    ]
  });
 
  //アコーディオン//
  $('.plus-circle i').click(function(){
    $('.main-right-categorys-lists').slideToggle();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $('#main-right-categorys-content i').css('color' , 'pink');
    } else {
      $('#main-right-categorys-content i').css('color' , 'rgb(0, 159, 199)');
    }
  });

  //scroll-topボタン//
  var btn = $('.scroll-btn');
  btn.hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 1000) {
      btn.fadeIn();
    } else {
      btn.fadeOut();
    }
  });
  btn.click(function(){
    $('html , body').animate({scrollTop:0},'slow');
  });

  //menuボタン//
  var menu = $('.menu');
  var menus = $('.menus')
  menus.hide();
  $(document).on('click' , '.menu' , function(){
    $('.menus').show();
  });
  $(document).on('click' , '.close' , function(){
    $('.menus').hide();
  });
});
