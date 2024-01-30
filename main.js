import Calculator from "./Scripts/calculator.js";

const display = document.getElementById("display");

const clear = document.getElementById("clear")

const plusmn = document.getElementById("plusmn");
const percent = document.getElementById("percent");
const equal = document.getElementById("equal")

const values = document.getElementsByClassName("value");
const operations = document.getElementsByClassName("operation");


let calculator = new Calculator()

clear.addEventListener('click', () => {
    calculator.handleClearInput()

    display.value = calculator.display
    clear.innerHTML = "AC"

    findActiveOperation().map((operation) => {
        operation.classList.remove('active-operation')
    });

})

plusmn.addEventListener('click', () => {
    expression = expression.slice(0, expression.length - display.value.length)
    display.value = toggleSign(display.value)
    expression += display.value;
});

percent.addEventListener('click', () => {
    expression = expression.slice(0, expression.length - display.value.length)
    display.value = Number(display.value.replace(',',''))/100
    expression += display.value;
})

equal.addEventListener('click', () => {
    calculator.handleEquateInput()
    display.value = calculator.display;
})

Array.prototype.map.call(values, (value) => {
    value.addEventListener('click', () => {

        findActiveOperation().map((operation) => {
            operation.classList.remove("active-operation")
        });

        calculator.handleValueInput(value.innerHTML)
        display.value = calculator.display
    });
});

Array.prototype.map.call(operations, (operation) => {
    operation.addEventListener('click', () => {

        let operator = getOperator(operation.innerHTML)

        findActiveOperation().map((operation) => {
            operation.classList.remove("active-operation")
        });

        operation.classList.add("active-operation");

        calculator.handleOperationInput(operator)
        display.value = calculator.display


    });
});

function toggleSign(str) {
    return str.startsWith('-') ?  str.replace('-', '') : ('-' + str);
}

function getOperator(operator) {
    switch (operator) {
        case "÷":
            return "/";
            break;
        case "×":
            return "*";
            break;
        case "−":
            return "-";
            break;
        case "+":
            return "+";
            break;
    }
}

function findActiveOperation() {
     return Array.prototype.filter.call(operations, (operation) => {
        return operation.classList.contains("active-operation")
    })
}

const buttons = document.getElementsByTagName("button");

Array.prototype.map.call(buttons, (button) => {
    button.addEventListener('click', () => {
        console.log({
            "(1) Button Pressed": button.innerHTML,
            "(2) Displayed Value": display.value,
            "(3) Expression": calculator.expression,
            "(4) Calculator State": calculator.state.name(),
            "(5) Active Operation?": findActiveOperation().length > 0 ? "Yes!" : "No.",
        });
    });
});