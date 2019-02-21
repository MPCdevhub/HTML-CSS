$(document).ready(function () {
    //side button
    $('.side-btn').click(function () {
        $('.side-nav-links').slideToggle(3000);
        $('.side-btn').toggleClass('change')
    })
    //nav button

    $('.nav-btn').click(function() {
        $(".side-nav").toggleClass("margin");
        $('.nav-btn').toggleClass('change');
        $('main').toggleClass('max-width')
    })

    $('.songs-center').owlCarousel({
        smartSpeed: 2000,
        loop:true,
        margin:10,
        nav:true,
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

})