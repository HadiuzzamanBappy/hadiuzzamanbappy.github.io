/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function() {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '30px', maxFontSize: '75px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

	var sections = $("section");
	var navigation_links = $("#nav-wrap a");

	sections.waypoint({

      handler: function(event, direction) {

		   var active_section;

			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},
		offset: '35%'

	});


/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });


/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {

		var h = $('header').height();
		var y = $(window).scrollTop();
      var nav = $('#nav-wrap');

	   if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	      nav.fadeOut('fast');
	   }
      else {
         if (y < h*.20) {
            nav.removeClass('opaque').fadeIn('fast');
         }
         else {
            nav.addClass('opaque').fadeIn('fast');
         }
      }

	});


/*----------------------------------------------------*/
/*	Modal Popup
------------------------------------------------------*/

    $('.item-wrap a').magnificPopup({

       type:'inline',
       fixedContentPos: false,
       removalDelay: 200,
       showCloseBtn: false,
       mainClass: 'mfp-fade'

    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
    		e.preventDefault();
    		$.magnificPopup.close();
    });


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('.flexslider').flexslider({
      namespace: "flex-",
      controlsContainer: ".flex-container",
      animation: 'slide',
      controlNav: true,
      directionNav: false,
      smoothHeight: true,
      slideshowSpeed: 7000,
      animationSpeed: 600,
      randomize: false,
   });
});

function callbackFunc(entries)
{
  entries.forEach(entry => {
   //  var txt = entry.target.id + " visibility: " + entry.isIntersecting;
   if(entry.isIntersecting){
      switch(entry.target.id){
         case 'figma':
            $('#figma').addClass('figma-start');
            break;
         case 'adobexd':
            $('#adobexd').addClass('adobexd-start');
            break;
         case 'photoshop':
            $('#photoshop').addClass('photoshop-start');
            break;
         case 'illustrator':
            $('#illustrator').addClass('illustrator-start');
            break;
         case 'css':
            $('#css').addClass('css-start');
            break;
         case 'html5':
            $('#html5').addClass('html5-start');
            break;
         case 'javascript':
            $('#javascript').addClass('javascript-start');
            break;
      }
   }
   else{
      switch(entry.target.id){
         case 'figma':
            $('#figma').removeClass('figma-start');
            break;
         case 'adobexd':
            $('#adobexd').removeClass('adobexd-start');
            break;
         case 'photoshop':
            $('#photoshop').removeClass('photoshop-start');
            break;
         case 'illustrator':
            $('#illustrator').removeClass('illustrator-start');
            break;
         case 'css':
            $('#css').removeClass('css-start');
            break;
         case 'html5':
            $('#html5').removeClass('html5-start');
            break;
         case 'javascript':
            $('#javascript').removeClass('javascript-start');
            break;
      }
   }
    
   //  document.getElementById('log').appendChild(document.createTextNode(txt));
  });
}

let observer = new IntersectionObserver(callbackFunc);

observer.observe(document.getElementById('figma'));
observer.observe(document.getElementById('html5'));
observer.observe(document.getElementById('photoshop'));
observer.observe(document.getElementById('illustrator'));
observer.observe(document.getElementById('css'));
observer.observe(document.getElementById('javascript'));



