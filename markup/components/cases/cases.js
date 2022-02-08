import Swiper, { EffectFade } from 'swiper';

export function casesSlider() {
    let mySwiper = new Swiper('.cases__slider', {
        modules: [EffectFade],
        // loop: true,
        // slidesPerView: 'auto',
        // centeredSlides: true,
        // spaceBetween: 20,
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
        preloadImages: true,
        lazy: true,
        autoHeight: true,
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
        slideToClickedSlide: true,

        breakpoints: {
            // when window width is >= 320px
            0: {
                slidesPerView: 1,
                // centeredSlides: true,
            },
            // when window width is >= 640px
            960: {
                slidesPerView: 'auto',
                centeredSlides: true,
            }
        }

    });
}
