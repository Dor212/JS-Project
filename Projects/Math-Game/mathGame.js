const calc = document.getElementById('calcDiv');
const num1 = document.getElementById('num1');
const selectOperator = document.getElementById('selectOperator');
const num2 = document.getElementById('num2');
const outcme = document.getElementById('outcme');
const startGame = document.getElementById('startGame')
const btn = document.getElementById('btn');
const range = document.getElementById('range');
const oper = document.getElementById('oper');

const randomNum1 = (max)=>{
    let num1 = Math.random()*(max+1);
    num1 = Math.floor(num1);
    return num1;
}
function randomNum2(){
    return Math.floor(Math.random() * (1000-100 +1))+100;
}
function randomNum3(){
    return Math.floor(Math.random() * (1500-1000 +1))+1000;
}
function plus(num1,num2) {
    let aaa = Number(num1)+Number(num2);
    let sum = Number(aaa);
    return sum;
}
function minus(num1,num2) {
    let exe = Number(num1)-Number(num2);
    let sum = Number(exe);
    return sum;
}
function Dual(num1,num2) {
    let exe = Number(num1)*Number(num2);
    let sum = Number(exe);
    return sum;
}
function division(num1,num2) {
    let exe = Number(num1)/Number(num2);
    let sum = Number(exe);
    return sum;
}
function test(ans, sum) {
    sum = outcme.value;
    ans = 
}

startGame.addEventListener('click', ()=>{
    outcme.innerHTML = "";
if (range.value == '100'){
    let newnum1;
    newnum1 = randomNum1(100);
    num1.value = newnum1;
    num1.innerHTML = newnum1;
    let newnum2;
    newnum2 = randomNum1(100);
    num2.value = newnum2;
    num2.innerHTML = newnum2;

} else if(range.value == '1000') {
    let newnum1;
    newnum1 = randomNum2();
    num1.value = newnum1;
    num1.innerHTML = newnum1;
    let newnum2;
    newnum2 = randomNum2();
    num2.value = newnum2;
    num2.innerHTML = newnum2;
}else {
    let newnum1;
    newnum1 = randomNum3();
    num1.value = newnum1;
    num1.innerHTML = newnum1;
    let newnum2;
    newnum2 = randomNum3();
    num2.value = newnum2; 
    num2.innerHTML = newnum2;
}
if(selectOperator.value == 'plus'){
    oper.textContent = '+';
} else if (selectOperator.value == 'minus'){
    oper.textContent = '-';
} else if (selectOperator.value == 'Dual'){
    oper.textContent = '*';
} else if (selectOperator.value =='division'){
    oper.textContent = '/';
}
})

btn.addEventListener('click', ()=>{
/*     if(selectOperator.value == 'plus'){
let res = plus(num1.value, num2.value);
outcme.innerHTML= res;
} else if (selectOperator.value == 'minus'){
    let diff = minus(num1.value, num2.value);
    outcme.innerHTML = diff;
} else if (selectOperator.value == 'Dual'){
    let dou = Dual(num1.value, num2.value)
    outcme.innerHTML = dou;
} else if (selectOperator.value =='division'){
    let divi = division(num1.value, num2.value)
    outcme.innerHTML = divi; */
    if (outcme.value ===)
})





