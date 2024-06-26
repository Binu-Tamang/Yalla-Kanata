(function ($) {
	
	"use strict";

	$(window).scroll(function() {
	  var scroll = $(window).scrollTop();
	  var box = 140;
	  var header = $('header').height();
	  if (scroll >= box - header) {
	    $("header").addClass("background-header");
	  } else {
	    $("header").removeClass("background-header");
	  }
	});
	

	const Accordion = {
	  settings: {
	    // Expand the first item by default
	    first_expanded: false,
	    // Allow items to be toggled independently
	    toggle: false
	  },

	  openAccordion: function(toggle, content) {
	    if (content.children.length) {
	      toggle.classList.add("is-open");
	      let final_height = Math.floor(content.children[0].offsetHeight);
	      content.style.height = final_height + "px";
	    }
	  },

	  closeAccordion: function(toggle, content) {
	    toggle.classList.remove("is-open");
	    content.style.height = 0;
	  },

	  init: function(el) {
	    const _this = this;

	    // Override default settings with classes
	    let is_first_expanded = _this.settings.first_expanded;
	    if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
	    let is_toggle = _this.settings.toggle;
	    if (el.classList.contains("is-toggle")) is_toggle = true;

	    // Loop through the accordion's sections and set up the click behavior
	    const sections = el.getElementsByClassName("accordion");
	    const all_toggles = el.getElementsByClassName("accordion-head");
	    const all_contents = el.getElementsByClassName("accordion-body");
	    for (let i = 0; i < sections.length; i++) {
	      const section = sections[i];
	      const toggle = all_toggles[i];
	      const content = all_contents[i];

	      // Click behavior
	      toggle.addEventListener("click", function(e) {
	        if (!is_toggle) {
	          // Hide all content areas first
			  let is_open =toggle.classList.contains("is-open");
	          for (let a = 0; a < all_contents.length; a++) {
	            _this.closeAccordion(all_toggles[a], all_contents[a]);
	          }
	          // Expand the clicked item
			  if (is_open	) {
	            _this.closeAccordion(toggle, content);
	          } else {
	            _this.openAccordion(toggle, content);
	          }
	        } else {
	          // Toggle the clicked item
	          if (toggle.classList.contains("is-open")) {
	            _this.closeAccordion(toggle, content);
	          } else {
	            _this.openAccordion(toggle, content);
	          }
	        }
	      });

	      // Expand the first item
	      if (i === 0 && is_first_expanded) {
	        _this.openAccordion(toggle, content);
	      }
	    }
	  }
	};

	(function() {
	  // Initiate all instances on the page
	  const accordions = document.getElementsByClassName("accordions");
	  for (let i = 0; i < accordions.length; i++) {
	    Accordion.init(accordions[i]);
	  }
	})();


	$('.owl-service-item').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		  }
	  })

	$('.owl-courses-item').owlCarousel({
		items:3,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:3
			  }
		  }
	  })

	//   =========testimonial owl carasoul
	$('.owl-courses-review').owlCarousel({
		items:2,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:2
			  },
			  1000:{
				  items:2
			  }
		  }
	  })

	  //   =========brand name owl carasoul
	$('.owl-courses-brand').owlCarousel({
		items:5,
		loop:true,
		dots: true,
		nav: true,
		autoplay: true,
		margin:30,
		  responsive:{
			  0:{
				  items:1
			  },
			  600:{
				  items:3
			  },
			  1000:{
				  items:5
			  }
		  }
	  })
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	// $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
	// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	// 		var target = $(this.hash);
	// 		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	// 		if (target.length) {
	// 			var width = $(window).width();
	// 			if(width < 991) {
	// 				$('.menu-trigger').removeClass('active');
	// 				$('.header-area .nav').slideUp(200);	
	// 			}				
	// 			$('html,body').animate({
	// 				scrollTop: (target.offset().top) - 80
	// 			}, 700);
	// 			return false;
	// 		}
	// 	}
	// });

	// $(document).ready(function () {
	//     $(document).on("scroll", onScroll);
	    
	//     //smoothscroll
	//     $('.scroll-to-section a[href^="#"]').on('click', function (e) {
	//         e.preventDefault();
	//         $(document).off("scroll");
	        
	//         $('.scroll-to-section a').each(function () {
	//             $(this).removeClass('active');
	//         })
	//         $(this).addClass('active');
	      
	//         var target = this.hash,
	//         menu = target;
	//        	var target = $(this.hash);
	//         $('html, body').stop().animate({
	//             scrollTop: (target.offset().top) - 79
	//         }, 500, 'swing', function () {
	//             window.location.hash = target;
	//             $(document).on("scroll", onScroll);
	//         });
	//     });
	// });

	// function onScroll(event){
	//     var scrollPos = $(document).scrollTop();
	//     $('.nav a').each(function () {
	//         var currLink = $(this);
	//         var refElement = $(currLink.attr("href"));
	// 		console.log(refElement);
	//         if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	//             $('.nav ul li a').removeClass("active");
	//             currLink.addClass("active");
	//         }
	//         else{
	//             currLink.removeClass("active");
	//         }
	//     });
	// }
	

	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$("#preloader").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				$("#preloader").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});

	

	const dropdownOpener = $('.main-nav ul.nav .has-sub > a');

    // Open/Close Submenus
    if (dropdownOpener.length) {
        dropdownOpener.each(function () {
            var _this = $(this);

            _this.on('tap click', function (e) {
                var thisItemParent = _this.parent('li'),
                    thisItemParentSiblingsWithDrop = thisItemParent.siblings('.has-sub');

                if (thisItemParent.hasClass('has-sub')) {
                    var submenu = thisItemParent.find('> ul.sub-menu');

                    if (submenu.is(':visible')) {
                        submenu.slideUp(450, 'easeInOutQuad');
                        thisItemParent.removeClass('is-open-sub');
                    } else {
                        thisItemParent.addClass('is-open-sub');

                        if (thisItemParentSiblingsWithDrop.length === 0) {
                            thisItemParent.find('.sub-menu').slideUp(400, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        } else {
                            thisItemParent.siblings().removeClass('is-open-sub').find('.sub-menu').slideUp(250, 'easeInOutQuad', function () {
                                submenu.slideDown(250, 'easeInOutQuad');
                            });
                        }
                    }
                }

                e.preventDefault();
            });
        });
    }


	function visible(partial) {
        var $t = partial,
            $w = jQuery(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

    }
	if($('.count-digit').length){
		$(window).scroll(function() {

			if (visible($('.count-digit'))) {
				if ($('.count-digit').hasClass('counter-loaded')) return;
				$('.count-digit').addClass('counter-loaded');
	
				$('.count-digit').each(function() {
					var $this = $(this);
					jQuery({
						Counter: 0
					}).animate({
						Counter: $this.text()
					}, {
						duration: 3000,
						easing: 'swing',
						step: function() {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
			}
		})
	
	}
   

})(window.jQuery);

function toggleReadMore(btn) {
    var dots = btn.parentNode.querySelector('.dots');
    var moreText = btn.parentNode.querySelector('.more');

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.innerHTML = "Read more";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.innerHTML = "Read less";
    }
}
// Disable right-click context menu
// document.addEventListener('contextmenu', function(event) {
// 	event.preventDefault();
// });

// Disable specific keyboard shortcuts
// document.addEventListener('keydown', function(event) {
// 	if (event.ctrlKey && event.shiftKey && event.key === 'I') {
// 		event.preventDefault();
// 	}
// 	if (event.ctrlKey && event.shiftKey && event.key === 'J') {
// 		event.preventDefault();
// 	}
// 	if (event.ctrlKey && event.key === 'U') {
// 		event.preventDefault();
// 	}
// 	if (event.ctrlKey ) {
// 		event.preventDefault();
// 	}
// 	if (event.key === 'F12') {
// 		event.preventDefault();
// 	}
// });


// ===============================
// Page Loader JS starts 
// ===============================
/* 1. Proloder */
$(window).on('load', function () {
	$('#preloader-active').delay(450).fadeOut('slow');
	$('body').delay(450).css({
	  'overflow': 'visible'
	});
  });
  // ===============================
  // Page Loader JS ends 
  // ===============================

//   ===============================
// read more and read less
// =================================
function toggleReadMore(button) {
    var moreContent = button.previousElementSibling.querySelector('.more-content');
    var dots = button.previousElementSibling;

    if (moreContent.style.display === "none" || moreContent.style.display === "") {
      moreContent.style.display = "inline";
      button.innerHTML = "Read less";
      dots.innerHTML = dots.innerHTML.replace("...", "");
    } else {
      moreContent.style.display = "none";
      button.innerHTML = "Read more";
      dots.innerHTML = dots.innerHTML + "...";
    }
  }
  var serviceList =document.getElementById('list-example');
  if(serviceList){
	$(window).scroll(function () {
		var scrollTop = $(document).scrollTop();
		var anchors = $('.list-serv');
		var activeFound = false;
		// Remove 'active' class from all links
		$('#list-example a').removeClass('active');
		for (var i = 0; i < anchors.length; i++) {
			var $anchor = $(anchors[i]);
			var anchorTop = $anchor.offset().top - parseInt($anchor.css('padding-top')) - 120;
			var anchorBottom = $anchor.offset().top + $anchor.outerHeight(true) - parseInt($anchor.css('padding-bottom')) - 120;
			if (scrollTop > anchorTop && scrollTop < anchorBottom) {
				$('#list-example a[href="#' + $anchor.attr('id') + '"]').addClass('active');
				activeFound = true;
				break;  // Exit loop after finding the active section
			}
		}
	 
	});
	document.addEventListener("DOMContentLoaded", function() {
        const links = document.querySelectorAll('#list-example a');

        links.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                const yOffset = -120; 
                const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({
                    top: yPosition,
                    behavior: 'smooth'
                });
            });
        });
    });

  }

  

// $(function () {
// 	AOS.init();
// 	var scrollSpy;
// 	var hash = window.location.hash;
// 	hash && $('#side-menu>li>a[href="' + hash + '"]').tab("show");
	
// 	$("#side-menu>li>a").click(function (e) {
// 	  e.preventDefault();
// 	  $(this).tab("show");
// 	  window.location.hash = this.hash;
	  
// 	  if (this.hash == "#tab1") {
// 		if ($("#tab1-tab").hasClass("active")) {
// 		  $("#tab1-programs").addClass("show");
// 		  scrollSpy = new bootstrap.ScrollSpy(document.body, {target: "#tab1-programs"});
// 		}
// 	  } else {
// 		  $("#tab1-programs").removeClass("show");
// 		  scrollSpy.dispose();
// 	  }
// 	});
// 	if($("#tab1-tab").hasClass("active")){
// 				  $("#tab1-programs").addClass("show");
// 				  scrollSpy = new bootstrap.ScrollSpy(document.body, {
// 						target: '#tab1-programs'
// 				  });
// 			  }
   
//   });


//   $('#list-item-1').scrollspy({
//     offset: 150
//   });

//   $('.list-serv').scrollspy({offest: 170});