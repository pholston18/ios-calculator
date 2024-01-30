import Calculator from "../Scripts/calculator.js";


//Test getPartialExpression
let calculator = new Calculator();

console.log("*******************************************************")
console.log("Calculator state: " + calculator.state.name())
console.log("Calculator display: " + calculator.display)
console.log("Calculator expression: " + calculator.expression)
console.log("*******************************************************")
console.log("")

calculator.handleValueInput("5");

console.log("*******************************************************")
console.log("Calculator state: " + calculator.state.name())
console.log("Calculator display: " + calculator.display)
console.log("Calculator expression: " + calculator.expression)
console.log("*******************************************************")
console.log("")

calculator.handleOperationInput("+");

console.log("*******************************************************")
console.log("Calculator state: " + calculator.state.name())
console.log("Calculator display: " + calculator.display)
console.log("Calculator expression: " + calculator.expression)
console.log("*******************************************************")
console.log("")

calculator.handleValueInput("6");

console.log("*******************************************************")
console.log("Calculator state: " + calculator.state.name())
console.log("Calculator display: " + calculator.display)
console.log("Calculator expression: " + calculator.expression)
console.log("*******************************************************")
console.log("")

calculator.handleOperationInput("*");

console.log("*******************************************************")
console.log("Calculator state: " + calculator.state.name())
console.log("Calculator display: " + calculator.display)
console.log("Calculator expression: " + calculator.expression)
console.log("*******************************************************")
console.log("")

calculator.handleValueInput("4");

console.log("*******************************************************")
console.log("Calculator state: " + calculator.state.name())
console.log("Calculator display: " + calculator.display)
console.log("Calculator expression: " + calculator.expression)
console.log("*******************************************************")
console.log("")

calculator.handleClearInput();

console.log("*******************************************************")
console.log("Calculator state: " + calculator.state.name())
console.log("Calculator display: " + calculator.display)
console.log("Calculator expression: " + calculator.expression)
console.log("*******************************************************")
console.log("")

calculator.handleEquateInput();

console.log("*******************************************************")
console.log("Calculator state: " + calculator.state.name())
console.log("Calculator display: " + calculator.display)
console.log("Calculator expression: " + calculator.expression)
console.log("*******************************************************")
console.log("")


