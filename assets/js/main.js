// Preloader Hide Logic
$(window).on("load", () => {
	$("#preloader").delay(2000).hide()

	$("#carousel").owlCarousel({
		autoplay: true,
		lazyLoad: true,
		loop: true,
		margin: 20,
		dots: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		responsiveClass: true,
		autoHeight: true,
		autoplayTimeout: 7000,
		smartSpeed: 800,
		nav: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});
})

