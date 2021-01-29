class Calculator {

    constructor() {
        this.tempValue = '';
        this.stack = [];
        this.ADDITION_OPERATOR = '+';
        this.SUBTRACTION_OPERATOR = '-';
        this.MULTIPLICATION_OPERATOR = '*';
        this.DIVISION_OPERATOR = '/';
        this.EQUALS_OPERATOR = '=';
        this.CLEAR_OPERATOR = 'C';
        this.availableOperator = [
            this.ADDITION_OPERATOR,
            this.SUBTRACTION_OPERATOR,
            this.MULTIPLICATION_OPERATOR,
            this.DIVISION_OPERATOR,
            this.EQUALS_OPERATOR,
        ];
        this.math = this.initMathOperations();
    }

    initMathOperations() {
        let math = {};

        math[this.ADDITION_OPERATOR] = function (aggr, value) {
            return aggr + value;
        }

        math[this.SUBTRACTION_OPERATOR] = function (aggr, value) {
            return aggr - value;
        }

        math[this.MULTIPLICATION_OPERATOR] = function (aggr, value) {
            return aggr * value;
        }

        math[this.DIVISION_OPERATOR] = function (aggr, value) {
            return aggr / value;
        }
        return math;

    }

    setTempValue(tempValue) {
        this.tempValue += tempValue;
    }

    getTempValue() {
        return this.tempValue;
    }

    clearTempValue() {
        this.tempValue = '';
    }

    pushToStack(stackItem) {
        this.stack.push(stackItem);
    }

    getStackString() {
        return this.stack.join(' ');
    }
    getCalculatedValue() {
        let finalValue = 0;
        let previousOperator = null;
        this.stack.forEach((stackItem, index, self) => {

            let value = parseInt(stackItem);

            if (index === 0) {
                finalValue = value;
            }
            else if (this.isOperator(stackItem)) {
                previousOperator = stackItem
            }
            else if (this.isNumber(value)) {

                finalValue = this.math[previousOperator](finalValue, value);
            }
        });
        return finalValue;
    }

    isStackWithOneElement() {
        return this.stack.length === 0;
    }

    isNumber(value) {
        return !isNaN(value);
    }

    isOperator(value) {
        return this.availableOperator.includes(value);
    }

    processInput(btnValue) {
        let displayValue = '';

        if (this.isNumber(btnValue)) {
            this.setTempValue(btnValue);
        } else if (this.isOperator(btnValue)) {
            let tempValue = this.getTempValue();
            if (tempValue) {
                this.pushToStack(tempValue);
                this.pushToStack(btnValue);
                this.clearTempValue();
            } else {
                let length = this.stack.length;
                if (length > 0) {
                    this.stack[length - 1] = btnValue;
                    this.clearTempValue();
                }
            }


            if (btnValue === this.EQUALS_OPERATOR) {
                displayValue = this.getCalculatedValue();
                this.stack.length = 0;
                this.setTempValue(displayValue);
                //this.pushToStack(displayValue);
            }
        }
        else if (btnValue == this.CLEAR_OPERATOR) {
            this.clearScreenValue();
        }

        if (this.isStackWithOneElement()) {
            displayValue = this.getTempValue();
        }
        else {
            if (btnValue !== this.EQUALS_OPERATOR) {
                let screenValue = `${this.getStackString()} ${this.getTempValue()}`;
                displayValue = screenValue;
            }
        }
        return displayValue;

    }

    clearScreenValue() {
        this.tempValue = '';
        this.stack = [];
    }

    isInputValid(btnValue) {
        let length = this.stack.length;
        if (length > 0) {
            return !this.isOperator(this.stack[length - 1]);
        }
        return true;
    }
}


class ModCalculator extends Calculator {

    constructor() {
        debugger;
        super();
        this.MOD_OPERATOR = '%';
        this.availableOperator = [...  this.availableOperator, ...this.MOD_OPERATOR];
        this.math[this.MOD_OPERATOR] = this.calculateMod;
    }

    calculateMod(aggr, value) {
        return aggr % value;
    }



}
