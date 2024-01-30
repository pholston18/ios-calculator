export function formatResult(number) {
    return new Intl.NumberFormat(
        'en-US',
        {
            maximumSignificantDigits: 8,
        }).format(number)
}

export function isOperation(char) {
    return ['+', '-', '*', '/'].includes(char);
}

export function getPartialExpression(expr) {
    let arr = [];
    let exprArray = expr.split('');

    let currChar = exprArray.pop();
    while (exprArray.length > 0 && !isOperation(currChar)) {
        arr.push(currChar);
        currChar = exprArray.pop();
    }

    arr.push(currChar);

    let partialExpression = arr.reverse().toString().replaceAll(',', '')

    if (partialExpression == "0") {
        partialExpression = "";
    }

    return;
}

export function getLastOperation(expr) {
    let exprArray = expr.split('');

    for (let i = exprArray.length - 1; i > 0; i--) {
        if (isOperation(exprArray[i])) {
            return exprArray[i];
        }
    }

    return "";
}

export function isHigherPriority(expression, operation) {

    const opPriotity = {
        "*": 2,
        "/": 2,
        "+": 1,
        "-": 1,
        "" : -1,
    }

    let lastOperation = getLastOperation(expression);

    return opPriotity[lastOperation] >= opPriotity[operation];
}

export function calculate(expression) {

    try {

    if (isOperation(expression.charAt(expression.length - 1))) {
        expression = expression.slice(0, expression.length - 1);
    }

    return formatResult(eval(expression));
    
    } catch {

        return "Error";

    }

}