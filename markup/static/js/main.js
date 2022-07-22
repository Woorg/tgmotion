import svg4everybody from 'svg4everybody';
import LazyLoad from 'vanilla-lazyload';
// import header from '../../components/header/header';
// import { casesSlider, casesListToggle } from '../../components/cases/cases';
import Nav from '../../components/nav/nav';

import { includedSlider } from '../../components/included/included';
import { benefitsSlider } from '../../components/benefits/benefits';
// import tabs from '../../components/tabs/tabs';
import { examplesGallery } from '../../components/examples/examples';
import { reviewsSlider } from '../../components/reviews/reviews';
// import { validateForms, validateFormsEn } from '../../components/form/form';
// import {pageWidget} from '../../components/page-widget/page-widget';

document.addEventListener('DOMContentLoaded', function (event) {

    svg4everybody();

    let styles = [
        'padding: 2px 9px',
        'background: #2948ff',
        'color: #fff',
        'line-height: 1.56',
        'font-size: 16px',
    ].join('');

    console.log('%c Developed by igor gorlov https://igorlov.ru', styles);


    /*
        Lazyload images
    */

    let lazyLoadInstance = new LazyLoad({
        elements_selector: '.lazy',
        threshold: 0,
        // load_delay: 300,
        use_native: true
    });

    if (lazyLoadInstance) {
        lazyLoadInstance.update();
    }


    /*
        Nav
    */

    const nav = new Nav();

    /*
       Slider
    */

    const $includedSlider = document.querySelector('.included__slider');

    if ( $includedSlider ) {
        includedSlider();
    }

    /* Gallery */

    examplesGallery();

    /* Benefits slider */

    const $benefitsSlider = document.querySelector('.benefits__slider');

    if ( $benefitsSlider ) {
        benefitsSlider();
    }

    /* Reviews slider */

    const $reviewsSlider = document.querySelector('.reviews__slider');

    if ( $reviewsSlider ) {
        reviewsSlider();
    }


});
