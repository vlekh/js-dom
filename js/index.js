let enteringInput = document.getElementById("entering");
let resultInput = document.getElementById("result");
let numBtns = document.getElementsByClassName("number");
let arithmeticBtns = document.getElementsByClassName("arithmetic");
let resultBtn = document.getElementById("count");
let num1;
let num2;
let operator;
 for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function(event) {
        enteringInput.value += event.target.textContent;
    });
}
 for (let i = 0; i < arithmeticBtns.length; i++) {
    arithmeticBtns[i].addEventListener("click", function(event) {
        operator = event.target.textContent;
        num1 = checkAndSaveValue();
        enteringInput.placeholder += ` ${operator}`;
        enteringInput.value = '';
        resultInput.value = '';
    });
}
function checkAndSaveValue() {
    if (!isNaN(Number(enteringInput.value))) {
       let num = Number(enteringInput.value);
        return num;
    } else {
        alert('Будь-ласка введіть число!');
        enteringInput.placeholder = `0`;
        return undefined;
    }
}
resultBtn.addEventListener("click", function(event) {
    num2 = checkAndSaveValue();
    if ((num1 == undefined || num2 == undefined || operator == undefined || isNaN(num1) || isNaN(num2))) {
        result = '';
        enteringInput.placeholder = `Введіть перше число!`;
    } else {
        enteringInput.placeholder = `${num1} ${operator} ${num2}`;
        let result;
        if (operator == '+') {
            result = num1 + num2;
        } else if (operator == '-') {
            result = num1 - num2;
        } else if (operator == '*') {
            result = num1 * num2;
        } else if (operator == '/') {
            if (num2 == 0) { result = 'Ділення на 0 заборонено'; } else {
                result = num1 / num2;
            }
        } else {
            result = '';
            enteringInput.placeholder = `Введіть перше число`;
        }
        resultInput.value = '' + result;
    }
    num1 = undefined;
    num2 = undefined;
    operator = undefined;
    enteringInput.value = '';

});