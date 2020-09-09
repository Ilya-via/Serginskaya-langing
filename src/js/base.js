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


	function checkSliderProperties() {
		eventObject.photoGallery.sliderLength = $(".photo-gallery__carousel-item[data-slide-number]").length;
		eventObject.photoGallery.lastSlideNumber = eventObject.photoGallery.sliderLength;
		eventObject.photoGallery.currentSlide = $(".photo-gallery__carousel-item:not(.unvisible)").attr('data-slide-number');
	}

	checkSliderProperties();

	function checkSlideNumber() {
		if (eventObject.photoGallery.currentSlide === 1) {
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
	$(".photo-gallery__prev").on("click", function (e) {
		if (!($(".photo-gallery__next").hasClass('disabled'))) {
			// var value_1 = '.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide - 1) + '"]';
			$('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide - 1) + '"]').addClass('unvisible');
			$('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide) + '"]').removeClass('unvisible');
			checkSliderProperties();
		}
	});

	$(".photo-gallery__next").on("click", function (e) {
		if (!($(".photo-gallery__next").hasClass('disabled'))) {
			$('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide + 1) + '"]').addClass('unvisible');
			$('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide) + '"]').removeClass('unvisible');
			checkSliderProperties();
		}
	});


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


