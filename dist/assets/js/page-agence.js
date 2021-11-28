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
        imageSrc: 'assets/img/background-pros.jpg',
        positionY: 'auto'
    });
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