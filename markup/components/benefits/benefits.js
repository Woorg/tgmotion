import Swiper, { Navigation, Pagination } from 'swiper';

export function benefitsSlider() {
    let mySwiper = new Swiper('.benefits__slider .swiper', {
        modules: [Navigation, Pagination],
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
        preloadImages: true,
        lazy: true,
        autoHeight: true,
        slideToClickedSlide: true,
        observer: true,
        observeSlideChildren: true,
        observeParents: true,
        resizeObserver: true,
        waitForTransition: true,
        speed: 600,
        // freeMode: {
        //     enabled: true,
        //     sticky: true,
        // },
        pagination: {
            el: '.benefits__slider .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        // navigation: {
        //     nextEl: '.benefits__slider .swiper-button-next',
        //     prevEl: '.benefits__slider .swiper-button-prev',
        // },
        breakpoints: {
            0: {
                slidesPerView: 'auto',
                spaceBetween: 10,
                loop: false,
            },
            768: {
                slidesPerView: 'auto',
                spaceBetween: 20,
                loop: false,
            },
            960: {
                loop: false,
                // slidesPerView: 3,
                slidesPerView: 'auto',
                spaceBetween: 20,
                // spaceBetween: 20,
            }
        }
    });
}
