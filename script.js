function operate(op, a, b) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    }
}
let operator = '';
let operand1 = 0;

let inputArea = document.querySelector("#inputarea");
let calcArea = document.querySelector("#calcarea");
let numKeys = document.querySelectorAll(".number");
numKeys.forEach((numKey) => 
    numKey.addEventListener("click", (e) => {
        inputArea.textContent += e.target.textContent;
    }));

let opKeys = document.querySelectorAll(".op");
opKeys.forEach((opKey) =>
    opKey.addEventListener("click", (e) => {
        if (operator) {
            let operand2 = Number(inputArea.textContent);
            operand1 = operate(operator, operand1, operand2);
        } else {
            operand1 = Number(inputArea.textContent);
        }
        inputArea.textContent = '';
        operator = e.target.textContent;
        calcArea.textContent = operand1.toString() + operator;
    }));

let equalKey = document.querySelector("#equal");
equalKey.addEventListener("click", () => {
    let operand2 = Number(inputArea.textContent);
    operand1 = operate(operator, operand1, operand2);
    calcArea.textContent = operand1;
    inputArea.textContent = '';
    operator = '';
});

let clearKey = document.querySelector("#clear");
clearKey.addEventListener("click", () => {
    inputArea.textContent = '';
    calcArea.textContent = '';
    operator = '';
    operand1 = 0;
})