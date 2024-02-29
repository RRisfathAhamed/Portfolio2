/*
 * Copyright (c) 2021 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/


jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	rish_tm_color_switcher();
	rish_tm_switcher_opener();
	rish_tm_cursor_switcher();
	rish_tm_nav_bg();
	rish_tm_trigger_menu();
	rish_tm_modalbox_news();
	rish_tm_modalbox_portfolio();
	rish_tm_cursor();
	rish_tm_imgtosvg();
	rish_tm_popup();
	rish_tm_data_images();
	rish_tm_contact_form();
	myIsotope();
	rish_tm_jarallax();
	rish_tm_owl_carousel();
	
	
	jQuery(window).load('body', function(){
		rish_tm_my_load();
	});
	jQuery(window).on('resize', function(){
		myIsotope();
	});
	
});

// ------------------------------------------------
// ---------------   FUNCTIONS    -----------------
// ------------------------------------------------

// -----------------------------------------------------
// ---------------------   SWITCHERS    ----------------
// -----------------------------------------------------

function rish_tm_color_switcher(){

	"use strict";

	var list	= jQuery('.rish_tm_settings .colors li a');

	list.on('click',function(){
		var element = jQuery(this);
		var elval	= element.attr('class');
		element.closest('.rish_tm_all_wrap').attr('data-color',''+elval+'');
		return false;
	});	
}

function rish_tm_switcher_opener(){

	"use strict";

	var settings	= jQuery('.rish_tm_settings');
	var button		= settings.find('.link');
	var direction	= settings.find('.direction li a');
	var light		= settings.find('.direction li a.light');
	var dark		= settings.find('.direction li a.dark');

	button.on('click',function(){
		var element = jQuery(this);
		if(element.hasClass('opened')){
			element.removeClass('opened');
			element.closest('.rish_tm_settings').removeClass('opened');
		}else{
			element.addClass('opened');
			element.closest('.rish_tm_settings').addClass('opened');
		}
		return false;
	});

	direction.on('click',function(){
		var element = jQuery(this);
		if(!element.hasClass('active')){
			direction.removeClass('active');
			element.addClass('active');
		}
	});

	dark.on('click',function(){
		var el = jQuery(this);
		jQuery('body').addClass('dark');
		jQuery('.rish_tm_partners').addClass('opened');
		el.closest('.rish_tm_settings').addClass('changed');
		return false;
	});

	light.on('click',function(){
		var ele = jQuery(this);
		jQuery('body').removeClass('dark');
		jQuery('.rish_tm_partners').removeClass('opened');
		ele.closest('.rish_tm_settings').removeClass('changed');
		return false;
	});
}

function rish_tm_cursor_switcher(){

	"use strict";

	var wrapper		= jQuery('.rish_tm_all_wrap');
	var button		= jQuery('.rish_tm_settings .cursor li a');
	var show		= jQuery('.rish_tm_settings .cursor li a.show');
	var hide		= jQuery('.rish_tm_settings .cursor li a.hide');

	button.on('click',function(){
		var element = jQuery(this);
		if(!element.hasClass('showme')){
			button.removeClass('showme');
			element.addClass('showme');
		}
		return false;
	});
	show.on('click',function(){
		wrapper.attr('data-magic-cursor','');
	});
	hide.on('click',function(){
		wrapper.attr('data-magic-cursor','hide');
	});
}

// ------------------------------------------------
// -------------------  ANCHOR --------------------
// ------------------------------------------------

jQuery('.anchor_nav').onePageNav();

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}

jQuery('.rish_progress').each(function() {

	"use strict";

	var pWrap 			= jQuery(this);
	pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
});


// -------------------------------------------------
// -------------   TOPBAR BG SCROLL  ---------------
// -------------------------------------------------

function rish_tm_nav_bg(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.rish_tm_topbar');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 100){
			menu.addClass('animate');
		}else{
			menu.removeClass('animate');
		}
	});
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function rish_tm_trigger_menu(){
	
	"use strict";

	var audio1			= jQuery('#audio1');
	var audio2			= jQuery('#audio2');
	var hamburger 		= jQuery('.trigger .hamburger');
	var list			= jQuery('.rish_tm_topbar .list ul li');
	var mobileMenu		= jQuery('.rish_tm_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.rish_tm_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			audio1[0].play();
			list.removeClass('opened');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			audio2[0].play();
			list.each(function(i){
				var ele = jQuery(this);
				setTimeout(function(){ele.addClass('opened');},i*50);
			});
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function rish_tm_modalbox_news(){
	
	"use strict";
	
	var modalBox	= jQuery('.rish_tm_modalbox');
	var list 		= jQuery('.rish_tm_news ul li');
	var closePopup	= modalBox.find('.close');
	
	list.each(function(){
		var element 	= jQuery(this);
		var details 	= element.find('.list_inner').html();
		var buttons 	= element.find('.details a, .rish_tm_full_link');
		var mainImage	= element.find('.main');
		var imgData		= mainImage.data('img-url');
		var title		= element.find('.title');
		var titleHref	= element.find('.title a').html();
		buttons.on('click',function(){
			modalBox.addClass('opened');
			modalBox.find('.description_wrap').html(details);
			mainImage = modalBox.find('.main');
			mainImage.css({backgroundImage: 'url('+imgData+')'});
			title = modalBox.find('.title');
			title.html(titleHref);
			rish_tm_imgtosvg();
			return false;
		});
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX PORTFOLIO  --------------
// -------------------------------------------------

function rish_tm_modalbox_portfolio(){
	
	"use strict";
	
	var modalBox	= jQuery('.rish_tm_modalbox');
	var button		= jQuery('.rish_tm_portfolio .popup_info');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent		= element.closest('li');
		var details 	= parent.find('.portfolio_hidden_infos').html();
		var titles 		= parent.find('.details').html();
		var image 		= parent.find('.image').html();
		
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(details);
		modalBox.find('.top_image').html(image);
		modalBox.find('.portfolio_main_title').html(titles);
		
		return false;
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function rish_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function rish_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){rish_tm_preloader();},speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function rish_tm_cursor(){
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
        let n, i = 0,
            o = !1;
        window.onmousemove = function (s) {
            o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
        }, $("body").on("mouseenter", "a, .rish_tm_topbar .trigger, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
        }), $("body").on("mouseleave", "a, .rish_tm_topbar .trigger, .cursor-pointer", function () {
            $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
        }), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function rish_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function rish_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function rish_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function rish_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

function myIsotope(){
	
	"use strict";
	
	$('.grid').isotope({
	  // options
	  itemSelector: '.grid-item',
	});
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function rish_tm_jarallax(){
	
	"use strict";
	
	jQuery('.jarallax').each(function(){
		var element			= jQuery(this);
		var	customSpeed		= element.data('speed');
		
		if(customSpeed !== "undefined" && customSpeed !== ""){
			customSpeed = customSpeed;
		}else{
			customSpeed 	= 0.5;
		}
		
		element.jarallax({
			speed: customSpeed,
			automaticResize: true
		});
	});
}


$("#grouploop").grouploop({
  velocity: 1,
  forward: false,
  childNode: ".item",
  childWrapper: ".item-wrap",
  pauseOnHover: false,
  complete: function() {
    console.log("init");
  }
});


// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function rish_tm_owl_carousel(){

	"use strict";

	var carousel			= jQuery('.rish_tm_testimonials .owl-carousel');
	carousel.owlCarousel({
		loop: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		lazyLoad: true,
		autoplay: true,
		autoplayTimeout: 6000,
		smartSpeed: 2000,
		margin: 0,
		dots: true,
		nav: false,
		navSpeed: true,
		responsive : {
			0 : {
				mouseDrag: false,
				touchDrag: true,
			},
			1100 : {
				mouseDrag: true,
				touchDrag: true,
			}
		}
	});
	rish_tm_imgtosvg();
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

