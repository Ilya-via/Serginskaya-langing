let eventObject = {
	photoGallery = {
		sliderLength: 0,
		lastSlideNumber: 0,
		currentSlide: 1,
	},
	photoGalleryPhone = {
		sliderLength: 0,
		lastSlideNumber: 0,
		currentSlide: 1,
	},
	reviews = {
		sliderLength: 0,
		lastSlideNumber: 0,
		currentSlide: 1,
	},
	reviewsPhone = {
		sliderLength: 0,
		lastSlideNumber: 0,
		currentSlide: 1,
	},
	hamburgerTurn: 0
};

// reviews Tablet
function checkSliderPropertiesforReviews() {
	eventObject.reviews.sliderLength = parseInt($(".reviews__container-for-items .reviews__carousel-item[data-slide-number]").length);
	eventObject.reviews.lastSlideNumber = eventObject.reviews.sliderLength;
}
function checkCurrentSlideforReviews() {
	eventObject.reviews.currentSlide = parseInt($(".reviews__container-for-items .reviews__carousel-item:not(.unvisible)").attr('data-slide-number'));
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

// reviews Phone
function checkSliderPropertiesforReviewsPhone() {
	eventObject.reviewsPhone.sliderLength = parseInt($(".reviews__container-for-items-phone .reviews__carousel-item[data-slide-number]").length);
	eventObject.reviewsPhone.lastSlideNumber = eventObject.reviewsPhone.sliderLength;
}
function checkCurrentSlideforReviewsPhone() {
	eventObject.reviewsPhone.currentSlide = parseInt($(".reviews__container-for-items-phone .reviews__carousel-item:not(.unvisible)").attr('data-slide-number'));
}

function checkSlideNumberPrevforReviewsPhone() {
	if (eventObject.reviewsPhone.currentSlide == 1) {

		if (!($(".reviews__prev-phone").hasClass('disabled'))) {
			$(".reviews__prev-phone").addClass('disabled');
		}
	} else {
		if ($(".reviews__prev-phone").hasClass('disabled')) {
			$(".reviews__prev-phone").removeClass('disabled');
		}
	}
}

function checkSlideNumberNextforReviewsPhone() {
	if (eventObject.reviewsPhone.currentSlide == eventObject.reviewsPhone.lastSlideNumber) {
		if (!($(".reviews__next-phone").hasClass('disabled'))) {
			$(".reviews__next-phone").addClass('disabled');
		}
	} else {
		if ($(".reviews__next-phone").hasClass('disabled')) {
			$(".reviews__next-phone").removeClass('disabled');
		}
	}
}


// photo-gallery
function checkSliderProperties() {
	eventObject.photoGallery.sliderLength = parseInt($(".photo-gallery__container-for-items .photo-gallery__carousel-item[data-slide-number]").length);
	eventObject.photoGallery.lastSlideNumber = eventObject.photoGallery.sliderLength;
}
function checkCurrentSlide() {
	eventObject.photoGallery.currentSlide = parseInt($(".photo-gallery__container-for-items .photo-gallery__carousel-item:not(.unvisible)").attr('data-slide-number'));
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
// photo-gallery Phone
function checkSliderPropertiesPhone() {
	eventObject.photoGalleryPhone.sliderLength = parseInt($(".photo-gallery__container-for-items-phone .photo-gallery__carousel-item[data-slide-number]").length);
	eventObject.photoGalleryPhone.lastSlideNumber = eventObject.photoGalleryPhone.sliderLength;
}
function checkCurrentSlidePhone() {
	eventObject.photoGalleryPhone.currentSlide = parseInt($(".photo-gallery__container-for-items-phone .photo-gallery__carousel-item:not(.unvisible)").attr('data-slide-number'));
}

function checkSlideNumberPrevPhone() {
	if (eventObject.photoGalleryPhone.currentSlide == 1) {

		if (!($(".photo-gallery__prev-phone").hasClass('disabled'))) {
			$(".photo-gallery__prev-phone").addClass('disabled');
		}
	} else {
		if ($(".photo-gallery__prev-phone").hasClass('disabled')) {
			$(".photo-gallery__prev-phone").removeClass('disabled');
		}
	}
}
function checkSlideNumberNextPhone() {
	if (eventObject.photoGalleryPhone.currentSlide == eventObject.photoGalleryPhone.lastSlideNumber) {
		if (!($(".photo-gallery__next-phone").hasClass('disabled'))) {
			$(".photo-gallery__next-phone").addClass('disabled');
		}
	} else {
		if ($(".photo-gallery__next-phone").hasClass('disabled')) {
			$(".photo-gallery__next-phone").removeClass('disabled');
		}
	}
}

// Paginator-line
function changeWidthPaginatorline(line, parent, value) {
	let reviewsAttrValue = Math.round(250 / (value));
	$(parent).attr('width', reviewsAttrValue);
	$(line).attr('x2', reviewsAttrValue);
}
// check window width
function checkWindowWidthAndProperties() {
	checkSliderPropertiesforReviewsPhone();
	checkCurrentSlideforReviewsPhone();
	changeWidthPaginatorline('#paint0_linear1', '.reviews__paginator-line-gradient1', eventObject.reviewsPhone.sliderLength / eventObject.reviewsPhone.currentSlide);
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
	let id = $(context).attr('href');
	console.log(context);
	if ($(id).length > 0) {
		let top = $(id).offset().top;
		$('body,html').animate({ scrollTop: top }, 700);
	}
}

$(document).ready(function () {
	$('.head-page__item-3, .open-programs__item-2 a, .head-page__navigation-desktop a[href="#about-author"], .footer__menu a[href="#about-author"], .head-page__navigation-desktop a[href="#open-programs"], .footer__menu a[href="#open-programs"], .head-page__navigation-desktop a[href="#coaching-sessions"], .footer__menu a[href="#coaching-sessions"], .head-page__navigation-desktop a[href="#reviews"], .footer__menu a[href="#reviews"], .head-page__navigation-desktop a[href="#footer"], .header__menu-tablet a[href="#about-author"], .header__menu-tablet a[href="#open-programs"], .header__menu-tablet a[href="#coaching-sessions"], .header__menu-tablet a[href="#reviews"], .header__menu-tablet a[href="#footer"], .head-page__navigation-desktop a[href="#your-results"], .footer__menu a[href="#your-results"], .head-page__navigation-desktop a[href="#program-for-you"], .footer__menu a[href="#program-for-you"], .head-page__navigation-desktop a[href="#program-structure"], .footer__menu a[href="#program-structure"], .head-page__navigation-desktop a[href="#coaching-support"], .footer__menu a[href="#coaching-support"], .header__menu-tablet a[href="#your-results"], .header__menu-tablet a[href="#program-for-you"], .header__menu-tablet a[href="#program-structure"], .header__menu-tablet a[href="#coaching-support"], .head-page__navigation-desktop a[href="#your-results-good-job"], .footer__menu a[href="#your-results-good-job"], .head-page__navigation-desktop a[href="#about-program"], .footer__menu a[href="#about-program"], .head-page__navigation-desktop a[href="#program-structure-good-job"], .footer__menu a[href="#program-structure-good-job"], .head-page__navigation-desktop a[href="#cost-of-individual-program"], .footer__menu a[href="#cost-of-individual-program"], .header__menu-tablet a[href="#your-results-good-job"], .header__menu-tablet a[href="#about-program"], .header__menu-tablet a[href="#program-structure-good-job"], .header__menu-tablet a[href="#cost-of-individual-program"]').on("click", function (e) {
		animatedScroll(e, this);
	});


	// Bottom line for items
	$(".head-page__item").on("mouseover", function () {
		$(this).find(".head-page__line").addClass('head-page__line--hover');
	});
	$(".head-page__item").on("mouseout", function () {
		$(this).find(".head-page__line").removeClass('head-page__line--hover');
	});

	// Slider photo-Gallery
	checkSliderProperties();
	checkCurrentSlide();
	$(".photo-gallery__prev").on("click", function () {
		if (!($(".photo-gallery__prev").hasClass('disabled'))) {
			$($('.photo-gallery__container-for-items .photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide - 1) + '"]')[0]).removeClass('unvisible');
			$($('.photo-gallery__container-for-items .photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide) + '"]')[0]).addClass('unvisible');
			new WOW().init();
		}
		checkSliderProperties();
		checkCurrentSlide();
		checkSlideNumberNext();
		checkSlideNumberPrev();
	});

	$(".photo-gallery__next").on("click", function (e) {
		if (!($(".photo-gallery__next").hasClass('disabled'))) {
			$($('.photo-gallery__container-for-items .photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide) + '"]')[0]).addClass('unvisible');
			$($('.photo-gallery__container-for-items .photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGallery.currentSlide + 1) + '"]')[0]).removeClass('unvisible');
			new WOW().init();
		}
		checkSliderProperties();
		checkCurrentSlide();
		checkSlideNumberNext();
		checkSlideNumberPrev();
	});

	// Slider photo-Gallery Phone
	checkSliderPropertiesPhone();
	checkCurrentSlidePhone();
	$(".photo-gallery__prev-phone").on("click", function () {
		if (!($(".photo-gallery__prev-phone").hasClass('disabled'))) {
			$($('.photo-gallery__container-for-items-phone .photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGalleryPhone.currentSlide - 1) + '"]')[0]).removeClass('unvisible');
			$($('.photo-gallery__container-for-items-phone .photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGalleryPhone.currentSlide) + '"]')[0]).addClass('unvisible');
			new WOW().init();
		}
		checkSliderPropertiesPhone();
		checkCurrentSlidePhone();
		checkSlideNumberPrevPhone();
		checkSlideNumberNextPhone();
	});

	$(".photo-gallery__next-phone").on("click", function (e) {
		if (!($(".photo-gallery__next-phone").hasClass('disabled'))) {
			$($('.photo-gallery__container-for-items-phone .photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGalleryPhone.currentSlide) + '"]')[0]).addClass('unvisible');
			$($('.photo-gallery__container-for-items-phone .photo-gallery__carousel-item[data-slide-number="' + (eventObject.photoGalleryPhone.currentSlide + 1) + '"]')[0]).removeClass('unvisible');
			new WOW().init();
		}
		checkSliderPropertiesPhone();
		checkCurrentSlidePhone();
		checkSlideNumberPrevPhone();
		checkSlideNumberNextPhone();
	});


	// Slider for reviews

	checkSliderPropertiesforReviews();
	checkCurrentSlideforReviews();
	changeWidthPaginatorline('#paint0_linear', '.reviews__paginator-line-gradient', eventObject.reviews.sliderLength / eventObject.reviews.currentSlide);

	$(".reviews__prev").on("click", function () {
		if (!($(".reviews__prev").hasClass('disabled'))) {
			$($('.reviews__container-for-items .reviews__carousel-item[data-slide-number="' + (eventObject.reviews.currentSlide - 1) + '"]')[0]).removeClass('unvisible');
			$($('.reviews__container-for-items .reviews__carousel-item[data-slide-number="' + (eventObject.reviews.currentSlide) + '"]')[0]).addClass('unvisible');
			new WOW().init();
		}
		checkSliderPropertiesforReviews();
		checkCurrentSlideforReviews();
		checkSlideNumberNextforReviews();
		checkSlideNumberPrevforReviews();
		changeWidthPaginatorline('#paint0_linear', '.reviews__paginator-line-gradient', eventObject.reviews.sliderLength / eventObject.reviews.currentSlide);
	});

	$(".reviews__next").on("click", function (e) {
		if (!($(".reviews__next").hasClass('disabled'))) {
			$($('.reviews__container-for-items .reviews__carousel-item[data-slide-number="' + (eventObject.reviews.currentSlide) + '"]')[0]).addClass('unvisible');
			$($('.reviews__container-for-items .reviews__carousel-item[data-slide-number="' + (eventObject.reviews.currentSlide + 1) + '"]')[0]).removeClass('unvisible');
			new WOW().init();
		}
		checkSliderPropertiesforReviews();
		checkCurrentSlideforReviews();
		checkSlideNumberNextforReviews();
		checkSlideNumberPrevforReviews();
		changeWidthPaginatorline('#paint0_linear', '.reviews__paginator-line-gradient', eventObject.reviews.sliderLength / eventObject.reviews.currentSlide);
	});


	// Slider for reviews phone
	checkWindowWidthAndProperties();
	window.addEventListener("resize", function () {
		if (window.innerWidth < 765) {
			checkWindowWidthAndProperties();
		}
	});

	$(".reviews__prev-phone").on("click", function () {
		if (!($(".reviews__prev-phone").hasClass('disabled'))) {
			$($('.reviews__container-for-items-phone .reviews__carousel-item[data-slide-number="' + (eventObject.reviewsPhone.currentSlide - 1) + '"]')[0]).removeClass('unvisible');
			$($('.reviews__container-for-items-phone .reviews__carousel-item[data-slide-number="' + (eventObject.reviewsPhone.currentSlide) + '"]')[0]).addClass('unvisible');
			new WOW().init();
		}
		checkWindowWidthAndProperties();
		checkSlideNumberNextforReviewsPhone();
		checkSlideNumberPrevforReviewsPhone();
	});

	$(".reviews__next-phone").on("click", function (e) {
		if (!($(".reviews__next-phone").hasClass('disabled'))) {
			$($('.reviews__container-for-items-phone .reviews__carousel-item[data-slide-number="' + (eventObject.reviewsPhone.currentSlide) + '"]')[0]).addClass('unvisible');
			$($('.reviews__container-for-items-phone .reviews__carousel-item[data-slide-number="' + (eventObject.reviewsPhone.currentSlide + 1) + '"]')[0]).removeClass('unvisible');
			new WOW().init();
		}
		checkWindowWidthAndProperties();
		checkSlideNumberNextforReviewsPhone();
		checkSlideNumberPrevforReviewsPhone();
	});


	// Form
	$(".head-page__button-1, .cooperation-options__button-1, .cooperation-options__button-2, .self-made__button-1, .self-made-buttons__button-1, .self-made-buttons__button-2").on("click", function (e) {
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


// ANIMATION HAMBURGER MENU
$(document).ready(function () {
	$(document).on("click", "#hamburger", function () {
		$('#hamburger-icon').toggleClass('hamburger-active');
		eventObject.hamburgerTurn++;
		if ((eventObject.hamburgerTurn) % 2 == 0) {
			$('.header__menu-tablet').fadeOut("slow").removeClass("tick");
		} else {
			$('.header__menu-tablet').fadeIn("slow").addClass("tick");
		}
	});
});
// MENU TABLET UNVISSIBLE - EVENT SCROLL
window.addEventListener('scroll', trackScroll);
function trackScroll() {
	if (window.pageYOffset > 200 && $('.header__menu-tablet').hasClass("tick")) {
		$('#hamburger-icon').toggleClass('hamburger-active');
		$('.header__menu-tablet').fadeOut("slow").removeClass("tick");
		eventObject.hamburgerTurn++;
	}
}