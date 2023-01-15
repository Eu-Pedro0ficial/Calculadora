import {testRegex} from './complementary.js'
 
export default function calc(value, evn){
    if(data[value] !== undefined){
        return data[value]();
    }

    if(!testRegex(isOperators, value) && testRegex(isEspecial, value)){
        evn.preventDefault();
        return result.textContent += '';
    }
    
    if(testRegex(isOperators, value) || testRegex(isNumeric, value)){
        result.textContent += operators[value] ? operators[value]() : value;
    }
}