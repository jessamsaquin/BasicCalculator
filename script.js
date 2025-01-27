const buttonValues = [
    '1', '2', '3', '4', 
    '5', '6', '7', '8', 
    '9', '0', '+/-', '%', 
    'x', '÷', '=', 'AC', '-',
    '.', '+'];
    const rightSymbols = ['x', '÷', '+', '-', '='];
    const topSymbols = ['AC', '+/-', '%'];

    for (let i = 0; i < buttonValues.length; i++) {
        
        let value = buttonValues[i];
        let button = document.createElement('button');
        button.innerText = value;

        document.getElementById('buttons').appendChild(button);
    }