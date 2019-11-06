if (location.pathname == '/' || location.pathname == '/index.html') {
	$('.header_catalog-dropdown').fadeIn();
}

$('.header_catalog').click(function(){
	$('.header_catalog-dropdown').fadeToggle();
	$('.header_catalog-img').toggleClass('rotated');
});