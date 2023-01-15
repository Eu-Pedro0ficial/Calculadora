import {mathOperators} from './complementary.js'

window.data = {
    "=": () => {
        result.textContent = eval(result.textContent)
    },
    "Enter": () => {
        result.textContent = eval(result.textContent)
    },
    "Backspace": () => {
        result.textContent = result.textContent.slice(0, -1)
    }

}
window.operators = {
    '/': () => mathOperators('/'),
    '*': () => mathOperators('*', ')'),
    '-': () => mathOperators('-', ''),
    '+': () => mathOperators('+', ''),
    '.': () => mathOperators('.'),
    '(': () => mathOperators('(', ''),
    ')': () => mathOperators(')', ''),
    '%': () => mathOperators('%'),
}