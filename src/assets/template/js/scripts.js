$(function() {

    var main_slider = $('.main-slider');
    main_slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    $('.slick-prev', main_slider).on('click', function(){
        main_slider.slick('slickPrev');
    });
    $('.slick-next', main_slider).on('click', function(){
        main_slider.slick('slickNext');
    });

    $('.main-service__more-btn').click(function(){
        var _this = $(this);
        var tab = ".main-service__item";
        if (_this.parents(tab).hasClass('active')) {
            _this.parents(tab).removeClass('active');
            return false;
        }
        
        var timeout = 500;
        if ($(tab+'.active').length==0) {
            timeout = 0;
        }

        $(tab).removeClass('active');

        setTimeout(function(){
            _this.parents(tab).addClass('active'); 
        }, timeout);    
        
        return false;
    });

    $('.product-big__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.product-small__slider',
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    $('.product-small__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-big__slider',
        dots: false,
        arrows: true,
        centerPadding: '0px',
        centerMode: false,
        focusOnSelect: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            }
        ]
    });



    $('select.selectric').selectric({
        maxHeight: 210
    });


    $('.zoom').magnificPopup({
        type  : 'image'
    });

    $('.product-big__slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        zoom: {
            enabled: true,
            duration: 100
        },
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled:true
        }
    });
    
});

$(window).resize(function(){
//    moveto('body.product-page .product__title', '.product__buy', '.product__slider', 750);
});

