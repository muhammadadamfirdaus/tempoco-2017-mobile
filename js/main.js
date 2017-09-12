/*
==============
JS for - New TEMPO.CO 2017
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
 */

$(function(){
	// PreLoad
	// setTimeout(function removepreload(){
	// 	$('#preload').hide();
	// 	$('.container').css({'visibility':'visible'});
	// }, 3000);

	if(!localStorage.firsttime){
    setTimeout(function () {
      console.log('pertama-kali');
      localStorage.firsttime = true;
			$('.preload').addClass('preload-active');
    }, 8000);
	};

	var tempo2017forthefirsttime = new Swiper('.tempo-2017-tutorial', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		nextButton: '.swiper-button-next.swiper-button-white',
    prevButton: '.swiper-button-prev.swiper-button-white'
	});

	$('.button-close').on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		$('.preload').addClass('preload-disabled').delay(1000).queue(function(){
			$('.preload').remove();
		});
	});

	// Go To
	// $('a[href^="#"].scroll').on('click', function(e){
	// 	e.preventDefault();
	// 	$('article.wrapper').animate({
	// 		scrollTop: $(this.hash).offset().top
	// 	}, 2000);
	// });

	// RESPONSIVE STUFF
  function responsive(){
    window.responsive;
    $(window).on('resize', function(){
      clearTimeout(window.responsive);
      window.responsive = setTimeout(function(){
        mobile();
      }, 100);
    });
  }

	var menumobile = $('<div id="menu-button" class="menu-mobile"><a href="#">Menu</a></div>'),
  		menumobileClone = menumobile.clone(true);
  		menumobile.remove();

	var menumobilecontainer = $('#menu'),
  		menumobilecontainerClone = menumobilecontainer.clone(true);
			menumobilecontainer.remove();

	/* mobile swipe */
	var mobileNavigation = new Swiper('main .navigation', {
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			spaceBetween: 10,
			slidesPerView: 3,
			loop:true,
			hashnav: true,
			hashnavWatchState: true,
			grabCursor: true,
			centeredSlides: true,
			loopedSlides: 3, //looped slides should be the same
			touchRatio: 0.2,
			slideToClickedSlide: true
	});
	var mobileContent = new Swiper('main .content', {
			spaceBetween: 10,
			slidesPerView: 'auto',
			loop: true,
			centeredSlides: false,
			hashnav: true,
			hashnavWatchState: true,
			grabCursor: true,
			onAfterResize: function(){
				mobileNavigation.update(true, true);
				mobileContent.update(true, true);
			}
	});
	mobileNavigation.params.control = mobileContent;
	mobileContent.params.control = mobileNavigation;
	/* end mobile swipe */

	$('.swiper-slide > a, .swiper-slide a[href^="#"]').on('click', function(){
		window.location.href = $(this).attr("href");
	});

	/* mobile menu */
	if($('#menu-button').length == 0){
		$('.header-main .w-50:nth-of-type(2)').prepend(menumobileClone);
		$('body .container').before(menumobilecontainerClone);
		menumobilecontainer.remove();
	}

	mobileMenu();

  function resetmobileMenu(){
    $('.menu').removeClass('menu-collapsed menu-expanded');
    menubutton.removeClass('close');
    $('#menu-button').detach();
  }

  function mobileMenu(){
    menubutton = $('.menu-mobile');
		menu = $('.menu');

    if($('.menu-mobile a').filter(function() {
        return $.trim($.text(this)) === 'Close';
      }).length){
      $('.menu-mobile a').html('Menu');
    }

    function menumobileexpand(){
      if(menu.hasClass('menu-expanded')){
        menubutton.removeClass('close');
        removemenumobile();
      } else {
        menubutton.addClass('close');
        menu.addClass('menu-expanded').removeClass('menu-collapsed');
      }

      if($('.close').length){
        $('.menu-mobile a').html('Close');
      } else {
        $('.menu-mobile a').html('Menu');
      }
    }

    function removemenumobile(){
      if($('.menu-collapsed').length){
        menu.removeClass('menu-collapsed');
      } else {
        menu.removeClass('menu-expanded').addClass('menu-collapsed').delay(1000).queue(function(){
          $('.sub').css({'display':'none'});
        });
      }
    }

    removemenumobile();

    /* buka menu */
    $('.menu-mobile').on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();

      menumobileexpand();
    });

    /* klik link menunya */
    $('.menu a').off('click').on('click', function(e){
      e.stopImmediatePropagation();
      return true;
    });

		$('.night-mode-button').off('click').on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();

			if($('.night-mode-button-active').length){
				console.log('night mode off');
				$('.night-mode-button').removeClass('night-mode-button-active');
				// setTimeout(function(){
					$('.container').removeClass('night-mode');
				// }, 2200);
			} else {
				console.log('night mode activated');
				$('.night-mode-button').addClass('night-mode-button-active');
				// setTimeout(function(){
					$('.container').addClass('night-mode');
				// }, 2200);
			}
    });

    /* expand collapse sub menu */
		$('.has-sub').off('click').on('click', function(e){
			e.preventDefault();
      e.stopPropagation();
			var submenu = $(this).find('.sub');
			$('.sub').not(submenu).css({'display':'none'});
			submenu.css({'display':'block'});
		});

		/* tutup menu */
		$(document).on('click', function(e){
			// e.preventDefault();
			e.stopImmediatePropagation();
			if(e.target.className != 'menu-mobile'){
				removemenumobile();

				menubutton.removeClass('close');
				$('.menu-mobile a').html('Menu');
				menu.removeClass('menu-expanded').addClass('menu-collapsed').delay(1000).queue(function(){
					$('.sub').css({'display':'none'});
				});
			}
		});
	}
	/* end mobile menu */

	/* mobile headline top terbaru */
	var mobileHeadlineTerbaru = new Swiper('.headline-mobile-terbaru', {
		pagination: '.swiper-pagination',
		paginationClickable: true,
		onAfterResize: function(mobileHeadlineTerbaru){
			mobileHeadlineTerbaru.destroy();
			$('.headline-mobile-terbaru .swiper-wrapper').removeAttr('style');
			$('.headline-mobile-terbaru .swiper-slide').removeAttr('style');
		}
	});
	/* end mobile headline top terbaru */

	/* tab */
	$('.tab-pagination a').on('click', function(e){
		e.preventDefault();
		e.stopImmediatePropagation();
		console.log('oy');
		var tabId = $(this).attr('data-tab');
		$('.tab-pagination a').removeClass('tab-active');
		$('.tab-content').removeClass('tab-active');

		$(this).addClass('tab-active');
		$("#"+tabId).addClass('tab-active');
	});

	/* cek jika terpopuper home desktop bukan mulai di tab awal */
	// if($('.tab-content').hasClass('tab-active').length != 0){
	// 	$('.tab-pagination a').removeClass('tab-active');
	// 	$('.tab-content').removeClass('tab-active');
	// 	$('.tab-pagination a:nth-of-type(1)').addClass('tab-active');
	// 	$('.tab-content:nth-of-type(1)').addClass('tab-active');
	// }
	/* end tab */

	/* detail article only */
	if($('article').length){
		/* onscroll */
		$('.scroll-container').on('scroll', function(){
			/* check element to bottom */
			if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight){
        // $('.bottom-nav ul').addClass('active');
    	} else {
    		// $('.bottom-nav ul').removeClass('active');
    	}
		});
		/* end onscroll */
	}
	/* end detail article only */

	/* detail foto */
	if($('#detail-foto').length || $('article').length){
		$('head').append('<script src="js/photoswipe.min.js"></script><link rel="stylesheet" type="text/css" href="css/photoswipe.css"><link rel="stylesheet" type="text/css" href="css/photoswipe-default-skin.css">');
		if($('script[src="js/photoswipe.min.js"]').length){
			// Photoswipe
			if($('figure').length){
				var slideSelector = 'figure img',
		    options     = {bgOpacity: 0.8},
		    events      = {
		        close: function () {
		            console.log('closed');
		        }
		    };
				$('article').photoSwipe(slideSelector, options, events);
			}
		}
	}
	/* end detail foto */

	// Ads
	// bottom ads
  if($('.bottom-banner').length){
    var bottomAdsCloseButton = $('.bottom-banner button');
    bottomAdsCloseButton.on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      // console.log('closing');
      $('.bottom-banner').addClass('bottom-banner-closed');
			if($('.bottom-banner-closed').length){
				$('.bottom-nav').css({
					'height':'110px'
				});
			}
		});
  }
	
	// parallax ads
	// I know that the code could be better.
// If you have some tips or improvement, please let me know.

$('.ads-layer img').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen      
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
    }
    img.css({
      top: imgPercent + '%',
      transform: 'translate(-50%, -' + imgPercent + '%)'
    });
  }

	$('.scroll-container').on('scroll', function(){
		parallaxImg();
	});
	
});
			
			// $(".scroll-container").on('scroll', function (e){
			// 	console.log('x');
			// 	s = $(".container").scrollTop();
			// 	$(".parallax").css("transform","translateY(" +  (s/3)  + "px)");
			// });

	// Social Plugin Button po.st
	var s = document.createElement('script');
	s.type = 'text/javascript';
	s.async = true;
	s.src = ('https:' == document.location.protocol ? 'https://s' : 'http://i')
	+ '.po.st/static/v4/post-widget.js#publisherKey=g2s58c5cupgtrsulvrd0';
	var x = document.getElementsByTagName('script')[0];
	x.parentNode.insertBefore(s, x);

	// Google Analytics
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-57161828-3', 'auto', {'allowAnchor': true});
	ga('set', {
		page: '/#'
	});

	ga('send', 'pageview', {
		'page': location.pathname + location.search + location.hash
	});

	// Google Tag Manager test
	// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  // })(window,document,'script','dataLayer','GTM-TVGQF5T');
	
	// Google Tag Manager live
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-5GHCPMW');
});
