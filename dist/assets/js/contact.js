$(document).ready(() => {
    setTimeout(() => {
        console.log($('.page-title-container'))
        $('.page-title-container').parallax({
            imageSrc: 'assets/img/background-contact.jpg',
            positionY: 'auto'
        });
    }, 100)
})