import Swiper, { EffectFade } from 'swiper';



export function casesSlider() {
    let mySwiper = new Swiper('.cases__slider', {
        modules: [EffectFade],
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
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
                loop: true,
                autoHeight: true,
                observer: true,
                observeSlideChildren: true,
                observeParents: true,
                resizeObserver: true,
            },
            960: {
                loop: false,
                slidesPerView: 'auto',
                spaceBetween: 0,
                centeredSlides: true,
                autoHeight: true,
            }
        }
    });


    let $item = document.querySelectorAll('.cases__item');

    $item.forEach( item => {

        let $listTrigger = item.querySelector('.cases__list-trigger');

        $listTrigger.addEventListener('click', function (e) {
            let $list = this.previousSibling.previousSibling;
            let $parent = this.previousSibling.previousSibling.parentNode.parentNode.parentNode;
            // console.log(this.previousSibling.previousSibling.parentNode);

            if ( this.classList.contains('cases__list-trigger_active') ) {
                this.classList.remove('cases__list-trigger_active');
                // this.text = 'Скрыть';
                $list.classList.remove('cases__list_expanded');
                $parent.classList.remove('cases__slide_expanded');
                // console.log($list);
            } else {
                this.classList.add('cases__list-trigger_active');
                // this.text = 'Показать все';
                $list.classList.add('cases__list_expanded');
                $parent.classList.add('cases__slide_expanded');
            }

            mySwiper.updateAutoHeight(50);

        });

    });


}

// export function casesListToggle() {


// }
