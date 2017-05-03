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
	// $('a[href^="#"]').click(function() {
	// 	$('html,body').animate({
	// 		scrollTop: $(this.hash).offset().top
	// 	}, 1000);
	// 	return false;
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
			slideToClickedSlide: true,
	});
	var mobileContent = new Swiper('main .content', {
			spaceBetween: 10,
			slidesPerView: 'auto',
			loop: true,
			centeredSlides: false,
			hashnav: true,
			hashnavWatchState: true,
			grabCursor: true,
	});
	mobileNavigation.params.control = mobileContent;
	mobileContent.params.control = mobileNavigation;
	/* end mobile swipe */

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
			e.preventDefault();
			e.stopPropagation();
			if(e.target.className != 'menu-mobile'){
				removemenumobile();

				menubutton.removeClass('close');
				$('.menu-mobile a').html('Menu');
				menu.removeClass('menu-expanded').addClass('menu-collapsed').delay(1000).queue(function(){
					$('.sub').css({'display':'none'});
				});
			}
		});
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
	}

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

	// Google Tag Manager
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TVGQF5T');
});
