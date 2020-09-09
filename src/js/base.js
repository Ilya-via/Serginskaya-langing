let eventObject = {
	photoGallery = {
		sliderLength: 0,
		lastSlideNumber: 0,
		currentSlide: 1,
	}
};


$(document).ready(function () {
	// $(".portfolio__filter-caption-container.service").on("click", function () {
	// 	accordionVisibility('.portfolio__service-select-block-item');
	// });

	// $(".navigation__services").on("click", function (e) {
	// 	animatedScroll(e, this);
	// });


	// Bottom line for items
	$(".head-page__item").on("mouseover", function () {
		$(this).find(".head-page__line").css({ 'height': '3px', 'bottom': '-3px' });
	});
	$(".head-page__item").on("mouseout", function () {
		$(this).find(".head-page__line").css({ 'height': '0', 'bottom': '0' });
	});
	// double arrow
	// $(".open-programs__item-1 a").on("mouseover", function () {
	// 	$(".open-programs__double-arrow-right").css({ '-webkit-animation:': 'openProgramsArrowRight ease-in-out 1s infinite', 'animation': 'openProgramsArrowRight ease-in-out 1s infinite' });
	// });
	// $(".open-programs__item-1 a").on("mouseout", function () {
	// 	$(".open-programs__double-arrow-right").css({ '-webkit-animation:': 'none', 'animation': 'none' });
	// });


	function checkSliderProperties() {
		eventObject.photoGallery.sliderLength = parseInt($(".photo-gallery__carousel-item[data-slide-number]").length);
		eventObject.photoGallery.lastSlideNumber = eventObject.photoGallery.sliderLength;
		eventObject.photoGallery.currentSlide = parseInt($(".photo-gallery__carousel-item:not(.unvisible)").attr('data-slide-number'));
	}

	checkSliderProperties();

	function checkSlideNumber() {
		if (eventObject.photoGallery.currentSlide === 0) {
			$(".photo-gallery__prev").addClass('disabled');
		} else {
			if ($(".photo-gallery__prev").hasClass('disabled')) {
				$(".photo-gallery__prev").removeClass('disabled');
			}
		}

		if (eventObject.photoGallery.currentSlide === eventObject.photoGallery.lastSlideNumber) {
			$(".photo-gallery__next").addClass('disabled');
		} else {
			if ($(".photo-gallery__next").hasClass('disabled')) {
				$(".photo-gallery__next").removeClass('disabled');
			}
		}
	}


	// Slider
	$(".photo-gallery__prev").on("click", function () {
		if (!($(".photo-gallery__prev").hasClass('disabled'))) {
			checkSliderProperties();
			checkSlideNumber();
			$($('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide - 1) + '"]')[0]).addClass('unvisible');
			$($('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide) + '"]')[0]).removeClass('unvisible');
			console.log('111');
			new WOW().init();
		}
	});

	$(".photo-gallery__next").on("click", function (e) {
		if (!($(".photo-gallery__next").hasClass('disabled'))) {
			checkSliderProperties();
			checkSlideNumber();
			$($('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide) + '"]')[0]).addClass('unvisible');
			$($('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide + 1) + '"]')[0]).removeClass('unvisible');
			console.log('22');
			new WOW().init();
		}
	});

	// switch (expression) {
	// 	case value1:
	// 		//Здесь выполняются инструкции, если результат выражения равен value1
	// 		[break;]
	// 	case value2:
	// 		//Инструкции, соответствующие value2
	// 		[break;]
	// 	...
	// 	case valueN:
	// 		//Инструкции, соответствующие значению valueN
	// 		//statementsN
	// 		[break;]
	// 	default:
	// 		//Здесь находятся инструкции, которые выполняются при отсутствии соответствующего значения
	// 		//statements_def
	// 		[break;]
	// }

});


// function findContainerForBlock(container) {
// 	let ContainerForCarousel = document.querySelectorAll(container);
// 	return ContainerForCarousel.length
// }
// 	if (!(findContainerForBlock('.head-object') === 0)) {}



// Accordion
// function accordionVisibility(blockWithItems) {
// 	if ($(blockWithItems).hasClass('unvisible')) {
// 		$(blockWithItems).removeClass("unvisible");
// 	} else {
// 		$(blockWithItems).addClass("unvisible");
// 	}
// }

// Плавный скролл
// function animatedScroll(event, context) {
// 	let id = $(context).children('a').attr('href');
// 	if ($(id).length > 0) {
// 		let top = $(id).offset().top;
// 		$('body,html').animate({ scrollTop: top }, 700);
// 	}
// }


