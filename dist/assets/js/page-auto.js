$(document).ready(() => {
    $('.call-to-action').parallax({
        imageSrc: 'assets/img/background-logo.jpg',
        positionY: 'auto'
    });
    $('#follow-block').parallax({
        imageSrc: 'assets/img/background-homapge-social.jpg',
        positionY: 'auto'
    });
    console.log($('.page-title-container'))
    $('.page-title-container').parallax({
        imageSrc: 'assets/img/background-vehicules.jpg',
        positionY: 'auto'
    });
})