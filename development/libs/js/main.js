if (window.location.pathname == '/') {
	$('.header_catalog-dropdown').addClass('show');
}

$('.header_catalog-btn').click(function(){
	$('.header_catalog-dropdown').fadeToggle();
	$('.header_catalog-img').toggleClass('rotated');
});

$('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    dots: true,
    adaptiveHeight: true,
    dotsClass: 'slider-main-dots'
});

$('.brands-slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
   	infinite: false,
    prevArrow: $('.brands-slider-prev'),
    nextArrow: $('.brands-slider-next'),
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
    ]
});

$('.main-articles-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: false,
    swipe: true,
    responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            centerMode: true
          }
        }
    ]
});

$('.category-mobile-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: false,
    centerMode: true
});

$('.products_item-color div').click(function () {
	$(this).addClass('selected').siblings().removeClass('selected')
})

$('.slide-text-btn').click(function(){
	$('.slide-text').slideToggle();
	$(this).remove();
	$('slide-text-wrapper p').css('width','100%')
})

$(function() {
 	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});

$('.header_mobile-btn-wrapper').click(function(){
  $(this).toggleClass('opened');
  $('.header_mobile-menu').toggleClass('opened');
  $('.header_mobile').toggleClass('menu-opened');
  $('.header_mobile-cart').toggleClass('dn');

})

$('.header_mobile-menu-list-item').click(function(){
  $(this).siblings('.header_mobile-menu-list-item-child').slideToggle();
  $(this).children('img').css('transform','rotate(90deg)');
})