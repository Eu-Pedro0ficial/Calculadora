'use strict';
import {checkEvent} from './helpers/complementary.js';

interactions.addEventListener('click', (evn)=>{
    checkEvent(evn);
})
document.addEventListener('keydown', (evn)=>{
    checkEvent(evn);
})