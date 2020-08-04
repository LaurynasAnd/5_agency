'use strict';
//import data
import data from '../data/data.js';

// import rendering functions
import renderServices from './renderServices.js';
import {ajax} from './ajax.js';
import {renderFunFacts, addEventListenerFunFactsOnScroll} from './renderFunFacts.js';

// execute functions
const {funFacts} = data;
ajax(renderServices, '#services .services');
// renderServices(services, '#services .services');
renderFunFacts(funFacts, '#fun_facts > .fact-list');

// actions after content rendering
// animateFunFacts();
addEventListenerFunFactsOnScroll();