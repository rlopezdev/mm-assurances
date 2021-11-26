$(document).ready(() => {


    var splide = new Splide('.splide', {
        type: 'loop',
        rewind: true,
        drag: false,
        lazyLoad: 'nearby'
    });
    splide.mount();

    setTimeout(() => {
        $('#homepage-headline').parallax({
            imageSrc: 'assets/img/background-homapge-headline.jpg',
            positionY: 'top'
        });
        $('#follow-block').parallax({
            imageSrc: 'assets/img/background-homapge-social.jpg',
            positionY: 'auto'
        });
    }, 200)
})