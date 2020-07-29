'use strict';
//import data
import data from '../data/data.js'

// import rendering functions
import renderServices from './renderServices.js'
// call functions
const {services, team} = data;

renderServices(services, '#services .services');