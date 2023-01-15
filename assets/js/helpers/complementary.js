import calc from './calc.js';

function mathOperators(value, search = false, twoSearch = false, permission = true){
    if(result.textContent.slice(-1) === search){
        return value;
    }else if(testRegex(isNumeric, result.textContent.slice(-1))){
        return value;
    }else if(result.textContent.slice(-1) === twoSearch){
        return value;
    }
    return '';
}
function testRegex(pattern, string){
    return pattern.test(string)
}
function checkEvent(evn){
    if(evn.type === "click"){
        calc(evn.target.getAttribute("data-value"), evn);
        return;
    }
    calc(evn.key, evn);
}   

export {mathOperators, testRegex, checkEvent};