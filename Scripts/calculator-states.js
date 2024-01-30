import { formatResult, getPartialExpression, isHigherPriority, isOperation, calculate} from "./helpers.js"

export class ClearState {

    handleValueInput(calculator, value) {
        calculator.display = value
        calculator.expression = value
    }

    handleOperationInput(calculator, operation) {
        calculator.expression = "0" + operation;
    }

    handleEquateInput(calculator) {
        let result = calculate(calculator.expression);
        calculator.display = result;
        calculator.expression = result;
    }

    handleClearInput(calculator) {
        calculator.display = "0";
        calculator.expression = '';
    }

    name() {
        return "Clear State"
    }
}

export class ValueState {

    handleValueInput(calculator, value) {
        calculator.display += value
        calculator.expression += value
    }

    handleOperationInput(calculator, operation) {

        if (isHigherPriority(calculator.expression, operation)) {
            console.log(isHigherPriority(calculator.expression, operation))
            calculator.display = calculate(calculator.expression);
        }

        calculator.expression += operation;
    }

    handleEquateInput(calculator) {

        let result = calculate(calculator.expression);
        
        calculator.display = result;
        calculator.expression = result;
    }

    handleClearInput(calculator) {
        let exprArray = calculator.expression.split('');

        while (exprArray.length > 0 && !isOperation(exprArray[exprArray.length - 1])) {
            exprArray.pop();
        }
    
        calculator.display = "0"
        calculator.expression = exprArray.toString().replaceAll(',','');
    }

    name() {
        return "Value State"
    }
}

export class OperationState {

    handleValueInput(calculator, value) {
        calculator.display = value
        calculator.expression += value
    }

    handleOperationInput(calculator, operation) {
        let expr = calculator.expression;
        calculator.expression = expr.slice(0, expr.length - 1) + operation;
    }

    handleEquateInput(calculator) {
        let expr = calculator.expression;

        let currOperator = expr.slice(expr.length - 1, expr.length);
        let currExpression = expr.slice(0, expr.length - 1);

        let result = calculate(currExpression + currOperator + currExpression);

        calculator.display = result;
        calculator.expression = result;
    }

    handleClearInput(calculator) {
        calculator.display = "0";
    }

    name() {
        return "Operation State"
    }
}

export class EquateState {

    handleValueInput(calculator, value) {
        calculator.display = value
        calculator.expression = value
    }

    handleOperationInput(calculator, operation) {
        calculator.expression = display.value
    }

    handleEquateInput(calculator) {
        let lastPartialExpression = getPartialExpression(calculator.expression);
        let result = calculate(calculator.expression + lastPartialExpression);
        calculator.expression = result
        calculator.display = result
    }

    handleClearInput(calculator) {
        calculator.display = '0'
        calculator.expression = '';
    }

    name() {
        return "Equate State"
    }
}