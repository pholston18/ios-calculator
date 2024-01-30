import { ClearState, ValueState, OperationState, EquateState } from "./calculator-states.js"

export default class Calculator {

    constructor() {
        this.state = new ClearState();
        this.expression = '';
        this.display = '0';
    }

    setState(state) {
        this.state = state
    }

    handleValueInput(value) {
        this.state.handleValueInput(this, value)
        this.state = new ValueState();
    }

    handleOperationInput(operation) {
        this.state.handleOperationInput(this, operation)
        this.state = new OperationState();
    }

    handleEquateInput() {
        this.state.handleEquateInput(this);
        this.state = new EquateState();
    }

    handleClearInput() {
        this.state.handleClearInput(this);
        this.state = new ClearState();
    }
}