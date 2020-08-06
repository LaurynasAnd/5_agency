'use strict';
//import data
import data from '../data/data.js';

// import rendering functions
import renderServices from './renderServices.js';
import {ajax} from './ajax.js';
import {Slider} from './Slider.js';
import {renderFunFacts, addEventListenerFunFactsOnScroll} from './renderFunFacts.js';

// execute functions
const {funFacts, portfolio, news} = data;
ajax(renderServices, '#services .services');
// renderServices(services, '#services .services');
renderFunFacts(funFacts, '#fun_facts > .fact-list');
new Slider({
    selector:'#portfolio_slider',
    data: portfolio,
    imgPath: './img/portfolio/'
});
new Slider({
    selector:'#news_slider',
    data: news,
    imgPath: './img/blog/'
});

// actions after content rendering
// animateFunFacts();
addEventListenerFunFactsOnScroll();