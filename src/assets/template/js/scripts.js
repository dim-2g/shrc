$(function() {
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

    $(".incrementer .minus").on("click", function (e) {
        e.preventDefault();
        var input = $(this).parents(".incrementer").find(".js_zcount");
        var input_val = parseInt( input.val() );

        if(input_val > 1){
            input_val--;
            input.attr("data-current", input_val);
            input.val(input_val);
        }
        if (input.hasClass('count_live')) {
            input.parents('form').submit();    
        }
    });

    $(".incrementer .plus").on("click", function (e) {
        e.preventDefault();
        var input = $(this).parents(".incrementer").find(".js_zcount");
        var input_val = parseInt( input.val() );

        if(input_val < 999){
            input_val++;
            input.attr("data-current", input_val);
            input.val(input_val);
        }


        if (input.hasClass('count_live')) {
            input.parents('form').submit();    
        }
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
    $('.scrollto').click(function(){
        var id = $(this).attr('href');
        if ($(id).length>0){
            $('html,body').animate({ scrollTop: $(id).offset().top }, 1200);
        }
        return false;
    })
    moveto('body.product-page .product__title', '.product__buy', '.product__slider', 750);
});

$(window).resize(function(){
    moveto('body.product-page .product__title', '.product__buy', '.product__slider', 750);
});

function moveto(elem, after_from, after_to, breakpoint){
    if (elem.length==0) return;

    if ($(window).width()<breakpoint){
        $(elem).prependTo(after_to);
    }else{
        $(elem).prependTo(after_from);
    }

}