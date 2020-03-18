$(document).ready(function () {
    $('.hamburger-mennu').on('click', function () {
        $(this).toggleClass('open');
        $('.main-nav').toggleClass('open');
    });

    $('.main-nav .nav-link').on('click', function () {
        $('.hamburger-menu').removeClass('open');
        $('.main-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        },1000);
    });

    $('section a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        },1000);
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});

const mainNav = document.querySelector(".main-nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", function() {
  mainNav.classList.toggle("open");
});