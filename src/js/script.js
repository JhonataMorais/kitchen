const Methods = {
    init() {
        Methods.sliders();
        Methods.menuMobile();
    },

    menuMobile() {
        const toggleMenu = document.querySelectorAll('.toggle-menu');
        const menu = document.querySelector('.menu');

        toggleMenu.forEach(item => {
            item.addEventListener('click', () => {
                menu.classList.toggle('is--active');
            });
        });
    },

    sliders() {
        $('.list-banners').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000
        });

        $('.list-faq').slick({
            dots: false,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    }
};

document.addEventListener('DOMContentLoaded', function() {
    Methods.init()
});
