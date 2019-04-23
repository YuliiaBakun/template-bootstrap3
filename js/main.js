$(document).ready(function(){
	// Всплывающие фото-magnific popup
    $('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins',
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 400 
		}
	});

	// Инициализация полифила для ie 11 
	objectFitImages();
});

// Всплывающие видео-magnific popup
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,

	fixedContentPos: false
});