$(document).ready(function ($) {
    // scroll to------------------
    $('.header__block--nav a').on('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 0
        }, 600);
    });
    //btn to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({scrollTop: 0}, 600);
        return false;
    });
    //burger---------------------------
    $('.header__burger').click(function (e) {
        $('.header__burger, .header__block--nav').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.nav-link').on('click', function () {
        $('.header__burger, .header__block--nav').removeClass('active');
        $('body').removeClass('lock');
    });
    //burger------------------------end

//open popup
    $('.acc-link').on('click', function (e) {
        e.preventDefault();
        $('.modal').removeClass('hidden');
    });

//close popup
    $('.modal').on('click', function (e) {
        if ($(e.target).is('.btn-close') || $(e.target).is('.modal')) {
            e.preventDefault();
            $(this).addClass('hidden');
        }
    });
    $(document).keyup(function (e) {
        if (e.which === '27') {
            $('.modal').addClass('hidden');
        }
    });

    //modal toggle tabs
    $('.form').find('input, textarea').on('keyup blur focus', function (e) {
        let $this = $(this),
            label = $this.prev('label');
        if (e.type === 'keyup') {
            if ($this.val() === '') {
                label.removeClass('active highlight');
            } else {
                label.addClass('active highlight');
            }
        } else if (e.type === 'blur') {
            if( $this.val() === '' ) {
                label.removeClass('active highlight');
            } else {
                label.removeClass('highlight');
            }
        } else if (e.type === 'focus') {
            if( $this.val() === '' ) {
                label.removeClass('highlight');
            }
            else if( $this.val() !== '' ) {
                label.addClass('highlight');
            }
        }
    });
    $('.tab a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
        let target = $(this).attr('href');
        $('.tab-content > div').not(target).hide();
        $(target).fadeIn(600);
    });

    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

