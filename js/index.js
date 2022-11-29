$('.navbar-button').on('click', function() {

    $('.igi-header-main').slideToggle('slow');

})



$('.dropdown-menu-button').on('click', function() {

    $(this).siblings('.sub-menu').toggleClass('show');

    $(this).parent().toggleClass('show');

})



$('#search-button').on('click', function() {

    $('.popupSearchBox').removeClass('hide');

})



$(".closebtn").on('click', function() {

    $('.popupSearchBox').addClass('hide');

})



$(document).ready(function () {

    var p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;

    var flag = false;

    $('.video-link').on('click', function () {

        var str = $(this).parents('.item').find('.video1').data('src');

        console.log(str);



        flag = (str.match(p)) ? RegExp.$1 : false;

        console.log(flag);

            //if (flag != false) {

                str = str.replace('watch?v=', 'embed/');

                $('.video-about').hide();

                $('.video-popup').addClass('active');

                $('.video-wrap iframe').remove();

                $('<iframe src="' + str + '?autoplay=1&rel=0&mute=1" frameborder="0" allowfullscreen allow=autoplay scrolling="no" id="videoShow"></iframe>').appendTo('.video-wrap');

            //}

        });

    $('.igi_closed').on('click', function () {

        $('.video-about').show();

        $('.video-popup').removeClass('active');

        $('.video-wrap iframe').remove();

    });

});





// $("#back-to-top").on('click',function() {

//     $("html, body").animate({scrollTop: 0}, 1000);

// });

// custom fooet common
    var bacToTop = $('#back-to-top');
    var social = $('#widget-social');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            bacToTop.addClass('show');
            social.addClass('is-show');
        } else {
            bacToTop.removeClass('show');
            social.removeClass('is-show');
        }
    });
    bacToTop.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });




// sticky header

$(document).bind('scroll', function () {

    var currenttop = $(document).scrollTop();

    //var Target = $('.igi_banner');

    var scrollY = $(window).scrollTop();

    var Head = $('#header').height();



    /*Sticky header*/

    if (currenttop > 50) {

        $('#header').addClass('sticky');

        $('.igi-backtop').addClass('show');

    } else {

        $('#header').removeClass('sticky');

        $('.igi-backtop').removeClass('show');

    }



    // window.requestAnimationFrame(function () {

    //     $(Target).css({ '-webkit-transform': 'translate3d(0,' + scrollY * 0.3 + 'px, 0)', 'transform': 'translate3d(0,' + scrollY * 0.3 + 'px, 0)' });

    // });

});





// sticky navbar

// var navbar = document.getElementById("test");

// var sticky = navbar.offsetTop;



// window.onscroll = () => {

//  if (window.pageYOffset >= sticky) {

//      navbar.classList.add("sticky")

//  } else {

//      navbar.classList.remove("sticky");

//  }

// }



// custom

$('.slide-news').owlCarousel({

    loop: true,

    autoplay: false,

    slideSpeed: 1500,

    smartSpeed: 1500,

    lazyLoad: true,

    margin: 15,

    nav: true,

    dots: true,

    autoWidth: false,

    fluidSpeed: true,

    responsive: {

        0: {

            items: 1,

            nav: false,

        },

        320: {

            items: 1,

            nav: false,

        },

        576: {

            items: 1,

            nav: false,

        },

        768: {

            items: 4,

            nav: false,

        }

    },

    navText: ['<span><i class="fa fa-angle-left" aria-hidden="true"></i></span>', '<span><i class="fa fa-angle-right" aria-hidden="true"></i></span>'],

});





$('.slider-owl').owlCarousel({

    loop: true,

    autoplay: true,

    slideSpeed: 1500,

    smartSpeed: 1500,

    lazyLoad: true,

    margin: 15,

    nav: false,

    items: 1,

    dots: false,

    autoWidth: false,

    fluidSpeed: true,

    navText: ['', ''],

});

$('.slider-reivew').owlCarousel({

    loop: true,

    autoplay: false,

    slideSpeed: 1500,

    smartSpeed: 1500,

    lazyLoad: true,

    margin: 15,

    nav: false,

    items: 1,

    dots: false,

    autoWidth: false,

    fluidSpeed: true,

    navText: ['', ''],

});



// click popup social

$(document).ready(function () {

    $('.btn.btn-search').on('click', function (e) {

        $('.search-form-full').css('display', 'block');

    });



    $('.barcelona-sc-close').on('click', function (e) {

        $('.search-form-full').css('display', 'none');

    });

    $('#main-menu-mb').on('click', function (e) {

        $('.mobile-mm').slideToggle();

    });

    $('.has-dropdown span').on('click', function (e) {

        $(this).next('.sub-menu').slideToggle();

    });

    $('.header-button').on('click', function (e) {

        $('.menu-mobile').slideToggle();

    });

    $('.menu-item-has-children span').on('click', function (e) {

        $(this).next('.sub-menu').slideToggle();

    });

});



$(document).ready(function () {

    $('.btn-toggle').on('click', function (e) {

        $(this).parents('.btn-group-items-3').find('.btn.btn-default').toggleClass('show');

    });

});



$(document).ready(function () {

    $('#ic-bar').on('click', function (e) {

        $('#menu-hien-suggest').slideToggle();

    });

});



//

$(document).ready(function () {

    $('.btn-group-items-3 .btn-default:first-child').addClass('active');

    $('.btn-group-items-3 .btn-default').on('click', function (e) {

        $(this).parents('.btn-group-items-3').find('.btn-default').removeClass('active');

        $(this).addClass('active');

    });

});



$(document).ready(function () {

    $('.menu-item-has-children .fa-caret-right').on('click', function (e) {

        $(this).parent('.menu-item-has-children').children('ul').slideToggle();

        $(this).toggleClass('rotate');

    });

});