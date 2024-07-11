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
let numKeys = document.querySelectorAll(".number");
numKeys.forEach((numKey) => 
    numKey.addEventListener("click", (e) => {
        inputArea.textContent += e.target.textContent;
    }));

let opKeys = document.querySelectorAll(".op");
opKeys.forEach((opKey) =>
    opKey.addEventListener("click", (e) => {
        operand1 = Number(inputArea.textContent);
        inputArea.textContent = '';
        operator = e.target.textContent;
    }));

let equalKey = document.querySelector("#equal");
equalKey.addEventListener("click", () => {
    let operand2 = Number(inputArea.textContent);
    inputArea.textContent = operate(operator, operand1, operand2);
});

let clearKey = document.querySelector("#clear");
clearKey.addEventListener("click", () => {
    inputArea.textContent = '';
    operator = '';
    operand1 = 0;
})