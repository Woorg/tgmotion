import Swiper, { } from 'swiper';

export function reviewsSlider() {
    let mySwiper = new Swiper('.reviews__slider .swiper', {
        // modules: [Navigation, Pagination],
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
        freeMode: {
            enabled: true,
            sticky: true,
        },
        // pagination: {
        //     el: '.reviews__slider .swiper-pagination',
        //     type: 'bullets',
        //     clickable: true,
        // },
        // navigation: {
        //     nextEl: '.benefits__slider .swiper-button-next',
        //     prevEl: '.benefits__slider .swiper-button-prev',
        // },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: false,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: false,
            },
            960: {
                loop: false,
                // slidesPerView: 3,
                slidesPerView: 'auto',
                spaceBetween: 20,
            }
        }
    });
}
