(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(200).fadeOut();
    });

    $(document).ready(function () {
        //sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 10) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });    
        
        var headerHeight = $('header').height();
        $('.menu li a').on("click", function(e) {
            e.preventDefault();
            var target = $($(this).attr("href"));
            if (target.length) {
                $("html, body").animate({
                scrollTop: target.offset().top - headerHeight
                }, 600);
            }
        });

        // Hamburger-menu
        $('.hamburger-menu, .menu li a').on('click', function () {
            $('.hamburger-menu .line-top, .menu, header').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        $('.owl-carousel.slider1').owlCarousel({
            loop:true,
            margin:0,
            dots: true,
            stagePadding: 1,
            nav:false,
            navText:[
                '<i class="fal fa-angle-left"></i>',
                '<i class="fal fa-angle-right"></i>'
            ],
            responsive:{
                0:{
                    items: 1,
                    margin: 20,
                },
                576:{
                    items: 1,
                    margin: 20,
                    stagePadding: 80,
                    nav: false,
                },
                992:{
                    items: 3,
                    margin: 20,
                },
                1200:{
                    items: 3,
                    margin: 25,
                }
            }
        });

        $('.marquee').marquee({
            duration: 25000,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            duplicateCount: 5,
            startVisible: true,
        });

        AOS.init({
            offset: 100,
            duration: 500,
        }); 
    });

})(jQuery);