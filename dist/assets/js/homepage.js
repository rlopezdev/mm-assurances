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


    /* Burger nav */
    const burgerNavBtn = document.getElementById('burger-nav-btn')
    const burgerNavList = document.getElementById('burger-nav-list')
    burgerNavBtn.onclick = function() {
        if (burgerNavBtn.classList.contains('closed')) {
            burgerNavBtn.classList.remove('closed')
            burgerNavBtn.classList.add('open')

            burgerNavList.classList.remove('hidden')
            burgerNavList.classList.add('visible')
        } else if (burgerNavBtn.classList.contains('open')) {
            burgerNavBtn.classList.remove('open')
            burgerNavBtn.classList.add('closed')

            burgerNavList.classList.remove('visible')
            burgerNavList.classList.add('hidden')
        }
    }
})