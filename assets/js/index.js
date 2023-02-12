const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation span');
const buttons = document.querySelectorAll('#keyboard button');

class calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }

    // add digit to calculator screem  
    addDigit(digit) {
        // check if current operation has a dot
        if(digit === '.' && this.currentOperationText.innerText.includes(".")){
            return;
        }

        this.currentOperation = digit;
        this.updateScreem();
    }

    // Process all calculator operations
    processOperation(operation) {
        // Check if current is empty
        if(this.currentOperationText.innerText === "") {

            //Change operation 
            if(this.previousOperationText.innerText !== "") {
                this.changerOperation(operation);
            } return;
        }

        // Get current and previous value 
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;

        switch(operation) {
           
            case "+":
                operationValue = previous + current
                this.updateScreem(operationValue, operation, current, previous);
                break;
            case "-":
                operationValue = previous - current
                this.updateScreem(operationValue, operation, current, previous);
                break;
            case "x":
                operationValue = previous * current
                this.updateScreem(operationValue, operation, current, previous);
                break;
            case "÷":
                operationValue = previous / current
                this.updateScreem(operationValue, operation, current, previous);
                break;
            case "%":
                operationValue = previous * current /100
                this.updateScreem(operationValue, operation, current, previous);
                break;
            default:
                return;
        }
    }

    // Change values of the calculator screem
    updateScreem(
        operationValue = null, 
        operation = null, 
        current = null, 
        previous = null
        ) {

            if(operationValue === null) {
                this.currentOperationText.innerText += this.currentOperation;
            }else {
                // Check if value is zero, if it is just add current value
                if(previous === 0) {
                    operationValue = current
                }
                // Add current value to previuos
                this.previousOperationText.innerText = `${operationValue} 
                ${operation}`
                this.currentOperationText.innerText = "";
            }
    }

    // Change math operation
    changerOperation(operation) {
        const mathOperation = ["+", "-", "%", "x", "÷", "+/-"]

        if(!mathOperation.includes(operation)) {
            return
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
    }
}

const calc = new calculator(previousOperationText, currentOperationText);


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === '.') {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});