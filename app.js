
const display = document.getElementById('display')
const deleteButton = document.getElementById('del')
const clearButton = document.getElementById('clear')
const times = document.getElementById('x')
const devision = document.getElementById('/')
const sevenButton = document.getElementById('7')
const eightButton = document.getElementById('8')
const nineButton = document.getElementById('9')
const minus = document.getElementById('-')
const fourButton = document.getElementById('4')
const fiveButton = document.getElementById('5')
const sixButton = document.getElementById('6')
const plus = document.getElementById('+')
const oneButton = document.getElementById('1')
const twoButton = document.getElementById('2')
const threeButton = document.getElementById('3')
const zeroButton = document.getElementById('zero')
const decimal = document.getElementById('decimal')
const equals = document.getElementById('equals')

let operators = ['+', '-', 'x', '÷', "."]

function addNumberFunc(num){
    if(display.textContent === '0'){
        display.textContent = num
    } else{
        display.textContent += num
    }
}

function addOperatorFunc(operator){
    let arr = display.textContent.split('')
    if(!operators.includes(arr[arr.length - 1])){
        display.textContent += operator
    }
}

deleteButton.addEventListener('click', () => {
    if(display.textContent !== '0' && display.textContent.split('').length != 1){
        let arr = display.textContent.split('')
        arr.pop()
        display.textContent = arr.join('')
    } else if(display.textContent !== '0' && display.textContent.split('').length == 1){
        display.textContent = '0'
    }
})

function solve(){
    display.textContent = eval(display.textContent)
}

plus.addEventListener('click', () => {
    addOperatorFunc('+')
})

minus.addEventListener('click', () => {
    addOperatorFunc('-')
})

decimal.addEventListener('click', () => {
    addOperatorFunc('.')
})

times.addEventListener('click', () => {
    addOperatorFunc('*')
})

devision.addEventListener('click', () => {
    addOperatorFunc('/')
})

clearButton.addEventListener('click', () => {
    display.textContent = '0'
})

sevenButton.addEventListener('click', () => {
    addNumberFunc('7')
})

eightButton.addEventListener('click', () => {
    addNumberFunc('8')
})

nineButton.addEventListener('click', () => {
    addNumberFunc('9')
})

fourButton.addEventListener('click', () => {
    addNumberFunc('4')
})

fiveButton.addEventListener('click', () => {
    addNumberFunc('5')
})

sixButton.addEventListener('click', () => {
    addNumberFunc('6')
})

oneButton.addEventListener('click', () => {
    addNumberFunc('1')
})

twoButton.addEventListener('click', () => {
    addNumberFunc('2')
})

threeButton.addEventListener('click', () => {
    addNumberFunc('3')
})

zeroButton.addEventListener('click', () => {
    addNumberFunc('0')
})

equals.addEventListener('click', () => {
    solve()
})

