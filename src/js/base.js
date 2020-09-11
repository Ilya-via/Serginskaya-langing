let eventObject = {
	photoGallery = {
		sliderLength: 0,
		lastSlideNumber: 0,
		currentSlide: 1,
	},
	reviews = {
		sliderLength: 0,
		lastSlideNumber: 0,
		currentSlide: 1,
	}
};

// Function
function checkSliderPropertiesforReviews() {
	eventObject.reviews.sliderLength = parseInt($(".reviews__carousel-item[data-slide-number]").length);
	eventObject.reviews.lastSlideNumber = eventObject.reviews.sliderLength;
}
function checkCurrentSlideforReviews() {
	eventObject.reviews.currentSlide = parseInt($(".reviews__carousel-item:not(.unvisible)").attr('data-slide-number'));
}

function checkSlideNumberPrevforReviews() {
	if (eventObject.reviews.currentSlide == 1) {

		if (!($(".reviews__prev").hasClass('disabled'))) {
			$(".reviews__prev").addClass('disabled');
		}
	} else {
		if ($(".reviews__prev").hasClass('disabled')) {
			$(".reviews__prev").removeClass('disabled');
		}
	}
}

function checkSlideNumberNextforReviews() {
	if (eventObject.reviews.currentSlide == eventObject.reviews.lastSlideNumber) {
		if (!($(".reviews__next").hasClass('disabled'))) {
			$(".reviews__next").addClass('disabled');
		}
	} else {
		if ($(".reviews__next").hasClass('disabled')) {
			$(".reviews__next").removeClass('disabled');
		}
	}
}
function checkSliderProperties() {
	eventObject.photoGallery.sliderLength = parseInt($(".photo-gallery__carousel-item[data-slide-number]").length);
	eventObject.photoGallery.lastSlideNumber = eventObject.photoGallery.sliderLength;
}
function checkCurrentSlide() {
	eventObject.photoGallery.currentSlide = parseInt($(".photo-gallery__carousel-item:not(.unvisible)").attr('data-slide-number'));
}

function checkSlideNumberPrev() {
	if (eventObject.photoGallery.currentSlide == 1) {

		if (!($(".photo-gallery__prev").hasClass('disabled'))) {
			$(".photo-gallery__prev").addClass('disabled');
		}
	} else {
		if ($(".photo-gallery__prev").hasClass('disabled')) {
			$(".photo-gallery__prev").removeClass('disabled');
		}
	}
}
function checkSlideNumberNext() {
	if (eventObject.photoGallery.currentSlide == eventObject.photoGallery.lastSlideNumber) {
		if (!($(".photo-gallery__next").hasClass('disabled'))) {
			$(".photo-gallery__next").addClass('disabled');
		}
	} else {
		if ($(".photo-gallery__next").hasClass('disabled')) {
			$(".photo-gallery__next").removeClass('disabled');
		}
	}
}

// Paginator-line
function changeWidthPaginatorline() {
	let reviewsAttrValue = Math.round(250 / (eventObject.reviews.sliderLength / eventObject.reviews.currentSlide));
	$(".reviews__paginator-line-gradient").attr('width', reviewsAttrValue);
	$("#paint0_linear").attr('x2', reviewsAttrValue);
}

// PopUp 
function displayPopUpBlock() {
	messageVisible();
	setTimeout(function () {
		messageUnvisible();
	}, 3000);
}
function messageVisible() {
	var elem = document.querySelector(".order__pop-up");
	var massiveClass = elem.classList;

	if (massiveClass.contains("unvisible") == true) {
		massiveClass.remove("unvisible");
	}
	setTimeout(function () {
		massiveClass.remove("opacityNone");
	}, 50);
}
function messageUnvisible() {
	var elem = document.querySelector(".order__pop-up");
	var massiveClass = elem.classList;
	massiveClass.add("opacityNone");
	elem.addEventListener("transitionend", addHiddenClass(), false);
}
function addHiddenClass() {
	setTimeout(function () {
		var elem = document.querySelector(".order__pop-up");
		var massiveClass = elem.classList;
		massiveClass.add("unvisible");
	}, 1500);
}

// Smooth scroll
function animatedScroll(event, context) {
	// let id = $(context).children('a').attr('href');
	let id = $(context).attr('href');
	console.log(context);
	if ($(id).length > 0) {
		let top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 700);
	}
}

$(document).ready(function () {
	$('.head-page__item-3, .open-programs__item-2 a, .head-page__navigation-desktop a[href="#about-author"], .footer__menu a[href="#about-author"], .head-page__navigation-desktop a[href="#open-programs"], .footer__menu a[href="#open-programs"], .head-page__navigation-desktop a[href="#coaching-sessions"], .footer__menu a[href="#coaching-sessions"], .head-page__navigation-desktop a[href="#reviews"], .footer__menu a[href="#reviews"], .head-page__navigation-desktop a[href="#footer"]').on("click", function (e) {
		animatedScroll(e, this);
	});


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



	// Slider
	checkSliderProperties();
	checkCurrentSlide();
	$(".photo-gallery__prev").on("click", function () {
		if (!($(".photo-gallery__prev").hasClass('disabled'))) {
			$($('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide - 1) + '"]')[0]).removeClass('unvisible');
			$($('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide) + '"]')[0]).addClass('unvisible');
			new WOW().init();
		}
		checkSliderProperties();
		checkCurrentSlide();
		checkSlideNumberNext();
		checkSlideNumberPrev();
	});

	$(".photo-gallery__next").on("click", function (e) {
		if (!($(".photo-gallery__next").hasClass('disabled'))) {
			$($('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide) + '"]')[0]).addClass('unvisible');
			$($('.photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide + 1) + '"]')[0]).removeClass('unvisible');
			new WOW().init();
		}
		checkSliderProperties();
		checkCurrentSlide();
		checkSlideNumberNext();
		checkSlideNumberPrev();
	});


	// Slider for reviews
	checkSliderPropertiesforReviews();
	checkCurrentSlideforReviews();
	changeWidthPaginatorline();
	$(".reviews__prev").on("click", function () {
		if (!($(".reviews__prev").hasClass('disabled'))) {
			$($('.reviews__carousel-item[data-slide-number="' + (eventObject.reviews.currentSlide - 1) + '"]')[0]).removeClass('unvisible');
			$($('.reviews__carousel-item[data-slide-number="' + (eventObject.reviews.currentSlide) + '"]')[0]).addClass('unvisible');
			new WOW().init();
		}
		checkSliderPropertiesforReviews();
		checkCurrentSlideforReviews();
		checkSlideNumberNextforReviews();
		checkSlideNumberPrevforReviews();
		changeWidthPaginatorline();
	});

	$(".reviews__next").on("click", function (e) {
		if (!($(".reviews__next").hasClass('disabled'))) {
			$($('.reviews__carousel-item[data-slide-number="' + (eventObject.reviews.currentSlide) + '"]')[0]).addClass('unvisible');
			$($('.reviews__carousel-item[data-slide-number="' + (eventObject.reviews.currentSlide + 1) + '"]')[0]).removeClass('unvisible');
			new WOW().init();
		}
		checkSliderPropertiesforReviews();
		checkCurrentSlideforReviews();
		checkSlideNumberNextforReviews();
		checkSlideNumberPrevforReviews();
		changeWidthPaginatorline();
	});

	// Form
	$(".head-page__button-1, .cooperation-options__button-1, .cooperation-options__button-2").on("click", function (e) {
		$(".form-page__container-for-form").removeClass('unvisible');
	});
	$(".form-page__close").on("click", function (e) {
		$(".form-page__container-for-form").addClass('unvisible');
	});
	$(".form-page__button-send").on("mousedown", function (e) {
		$(".form-page__container-for-form").addClass('unvisible');
		displayPopUpBlock();
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




