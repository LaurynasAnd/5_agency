'use strict';
//import data
import data from '../data/data.js';

// import rendering functions
import renderServices from './renderServices.js';
import {renderFunFacts, animateFunFacts} from './renderFunFacts.js';

// execute functions
const {services, funFacts} = data;

renderServices(services, '#services .services');
renderFunFacts(funFacts, '#fun_facts > .fact-list');

// actions after content rendering
animateFunFacts();