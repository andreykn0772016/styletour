$(function () {
		$('.carousel').carousel({
  	interval: false
	})
		$('#elastislide').elastislide();
});
$(window).load(function () {
	var carouselCaptionWidth= $("#carousel__sidebar .active img"). width();
	$("#carousel__sidebar img"). each(function () {
		$(this).attr("width", carouselCaptionWidth);
	});
	$("#carousel__sidebar .slider__carousel-caption").css("max-width", carouselCaptionWidth + "px");

	$('#carousel__sidebar .carousel-indicators'). css("max-width", carouselCaptionWidth + "px");

	$('.sidebar .banner'). css("max-width", carouselCaptionWidth + "px");

});
