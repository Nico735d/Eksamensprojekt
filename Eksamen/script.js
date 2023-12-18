document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        // Konfiguration her
        loop: true, // Gør karrusellen uendelig
        autoplay: {
            delay: 5000, // Autoplay hvert 5. sekund
            disableOnInteraction: false, // Lad autoplay fortsætte, selvom brugeren interagerer med karrusellen
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});


