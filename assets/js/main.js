
(function ($) {
  'use strict';

  jQuery(document).ready(function ($) {

    //menu active
    var stellarnav = $('.stellarnav');
    stellarnav.stellarNav({
      theme: 'light',
      breakpoint: 960,
      position: 'right',
      phoneBtn: '18009997788',
      locationBtn: 'https://www.google.com/maps'
    });

    //All Carousel active
    var hover_project_item = $(' #da-thumbs > li ');
    hover_project_item.hoverdir();
    var wlc_slide = $(".welcome-carousel");
    wlc_slide.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      smartplay: 1000,
      autoplay: true,
    });

    var project_slide = $(".portfolio-carousel");
    project_slide.owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      smartplay: 1000,
      autoplay: true,
      navText: ["<i class=\'fal fa-arrow-left\'></i>", "<i class=\'fal fa-arrow-right\'></i>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });

    var project_slide2 = $(".portfolio-carousel2");
    project_slide2.owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      items: 4,
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      smartplay: 1000,
      autoplay: true,
      navText: ["<i class=\'fal fa-arrow-left\'></i>", "<i class=\'fal fa-arrow-right\'></i>"],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });


    var banner_slide = $(".banner-carousel");
    banner_slide.owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      animateIn: 'fadeInUp',
      autoplay: true,
      items: 1,
      navText: ["<i class=\'fal fa-arrow-left\'></i>", "<i class=\'fal fa-arrow-right\'></i>"],

    });

    var testimonials = $(".testimonials");
    testimonials.owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      animateIn: 'fadeInRight',
      animateOut: 'fadeInRight',
      autoplay: true,
      items: 1,
      navText: ["<i class=\'fal fa-arrow-left\'></i>", "<i class=\'fal fa-arrow-right\'></i>"],

    });

    var blogs = $(".blogs");
    blogs.owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      autoplay: true,
      margin: 30,

      navText: ["<i class=\'fal fa-arrow-left\'></i>", "<i class=\'fal fa-arrow-right\'></i>"],
      responsive: {
        0: {
          items: 1
        },
        800: {
          items: 2
        },
        1000: {
          items: 3
        }
      }

    });


    var logos = $(".logos");
    var autoplaySpeed = 100; // Autoplay speed in milliseconds (0.5 seconds)

    logos.owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: autoplaySpeed,
      responsive: {
        0: {
          items: 1
        },
        450: {
          items: 2
        },
        575: {
          items: 3
        },
        767: {
          items: 3
        },
        991: {
          items: 4
        },
        1000: {
          items: 5
        }
      }
    });

    //==welcome_area animation==\\
    wlc_slide.on('translate.owl.carousel', function () {
      $('.welcome-carousel .wlc-title h1').removeClass('fadeInDown animated').hide();
      $('.welcome-carousel .wlc-title p').removeClass('fadeInDown animated').hide();
      $('.welcome-carousel .wlc-title a').removeClass('fadeInDown animated').hide();
      $('.welcome-carousel h1.wlc-filltext').removeClass('fadeInDown animated').hide();
    });
    wlc_slide.on('translated.owl.carousel', function () {
      $('.owl-item.active .wlc-title h1').addClass('fadeInDown animated').show();
      $('.owl-item.active .wlc-title p').addClass('fadeInDown animated').show();
      $('.owl-item.active .wlc-title a').addClass('fadeInDown animated').show();
      $('.owl-item.active h1.wlc-filltext').addClass('fadeInDown animated').show();
    });


    var play_btn = $('#play-video');
    var play_btn_overlay = $('#video-overlay');
    var play_btn_overlay_close = $('.video-overlay, .video-overlay-close');
    var play_btn_overlay_open = $('.video-overlay.open');
    play_btn.on('click', function (e) {
      e.preventDefault();
      play_btn_overlay.addClass('open');

    });
    play_btn_overlay_close.on('click', function (e) {
      e.preventDefault();
      close_video();
    });



    //modal video button active
    play_btn.modalVideo();

    //wow animations active here
    new WOW().init();



    //current class adding 
    var navbarmneuclass = $('.navbarmneuclass');
    navbarmneuclass.onePageNav();


    var preloader = $('.preloader');
    function preloader_func() {
      preloader.delay(200).fadeOut(500);
    }
    preloader_func();


    var slide_widgest = $("#slide-widgest");
    var grid_side_open = $("#grid-side");
    var close_btn = $("#close-btn");
    var side_content = $("#side-content");
    grid_side_open.on('click', function () {
      slide_widgest.addClass("active");
      side_content.addClass("active");
    });
    close_btn.on('click', function () {
      slide_widgest.removeClass("active");
      side_content.removeClass("active");
    });



    // Start numbers animate at fun-facts section //
    var facts = $("#facts");
    var number1 = $("#number_1");
    var number2 = $("#number_2");
    var number3 = $("#number_3");
    var number4 = $("#number_4");
    facts.appear(function () {
      number1.animateNumber({
        number: 6853
      }, 2200);
      number2.animateNumber({
        number: 120
      }, 2200);
      number3.animateNumber({
        number: 345
      }, 2200);
      number4.animateNumber({
        number: 195
      }, 2200);
    }, {
      accX: 0,
      accY: -150
    });

    function stickyNav() {
      //fixed nav bar active
      window.onscroll = function () {
        myFunction()
      };
      var header = document.getElementById("header");
      var sticky = header.offsetTop;

      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    }
    stickyNav();

    $('#circle1').circleProgress({
      value: 0.6,
      fill: {
        color: '#08d665'
      },
      emptyFill: '#ffffff',
    }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
    });


    $('#circle2').circleProgress({
      value: 0.7,
      fill: {
        color: '#08d665'
      },
      emptyFill: '#ffffff',
    }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
    });


    $('#circle3').circleProgress({
      value: 0.3,
      fill: {
        color: '#08d665'
      },
      emptyFill: '#ffffff',
    }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(30 * progress) + '<i>%</i>');
    });


    $('#circle4').circleProgress({
      value: 0.9,
      fill: {
        color: '#08d665'
      },
      emptyFill: '#ffffff',
    }).on('circle-animation-progress', function (event, progress) {
      $(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
    });




    $('.mesonry-grid').masonry({
      // options
      itemSelector: '.col-lg-6',
      horizontalOrder: true
    });

    //current class adding 
    var navbarmneuclass = $('.navbarmneuclass');
    navbarmneuclass.onePageNav();
  });

  //jquery load function start
  jQuery(window).on("load", function () {

  });


}(jQuery));

// *************************************************************** click submit msg ******************************************************

var Alert = undefined;

(function (Alert) {
  var alert, error, trash, info, success, warning, _container;

  success = function (message, title, options) {
    return alert("success", message, title, "fa fa-check-circle", options);
  };

  alert = function (type, message, title, icon, options) {
    var alertElem, messageElem, titleElem, iconElem, innerElem, _container;
    if (typeof options === "undefined") {
      options = {};
    }
    options = $.extend({}, Alert.defaults, options);
    if (!_container) {
      _container = $("#alerts");
      if (_container.length === 0) {
        _container = $("<ul>").attr("id", "alerts").appendTo($("body"));
      }
    }
    if (options.width) {
      _container.css({
        width: options.width
      });
    }
    alertElem = $("<li>").addClass("alert").addClass("alert-" + type);
    setTimeout(function () {
      alertElem.addClass('open');
    }, 1);
    if (icon) {
      iconElem = $("<i>").addClass(icon);
      alertElem.append(iconElem);
    }
    innerElem = $("<div>").addClass("alert-block");
    //innerElem = $("<i>").addClass("fa fa-times");
    alertElem.append(innerElem);
    if (title) {
      titleElem = $("<div>").addClass("alert-title").append(title);
      innerElem.append(titleElem);

    }
    if (message) {
      messageElem = $("<div>").addClass("alert-message").append(message);
      //innerElem.append("<i class="fa fa-times"></i>");
      innerElem.append(messageElem);
      //innerElem.append("<em>Click to Dismiss</em>");
      //      innerElemc = $("<i>").addClass("fa fa-times");

    }
    if (options.displayDuration > 0) {
      setTimeout((function () {
        leave();
      }), options.displayDuration);
    } else {
      innerElem.append("<em>Click to Dismiss</em>");
    }
    alertElem.on("click", function () {
      leave();
    });

    function leave() {
      alertElem.removeClass('open');
      alertElem.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
        return alertElem.remove();
      });
    }
    return _container.prepend(alertElem);
  };
  Alert.defaults = {
    width: "",
    icon: "",
    displayDuration: 2000,
    pos: ""
  };
  Alert.success = success;
  return _container = void 0;

})(Alert || (Alert = {}));

this.Alert = Alert;

$('#test').on('click', function () {
  Alert.info('Message');
});
