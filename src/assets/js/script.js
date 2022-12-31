'use strict';
const interactions = document.getElementById("interactions");
const result = document.getElementById("result");
let resultado = "";

function calc(value){
    let isOperators = /\/|\*|-|\+|\.|=|\(|\)|%/;
    let isNumeric = /[0-9]+/;

    if(value === "="){
        result.value = eval(resultado);
        return console.log(result.value)
    }

    if(isNumeric.test(value) || isOperators.test(value)){
        resultado += value;
        result.value += value;

    }
    
}

function checkEvent(evn){
    if(evn.type === "click"){
        calc(evn.target.getAttribute("data-value"));
        return;
    }
    calc(evn.key);
}   

interactions.addEventListener('click', (evn)=>{
    checkEvent(evn);
})
document.addEventListener('keydown', (evn)=>{
    checkEvent(evn);
})