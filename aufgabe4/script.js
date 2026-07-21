// Einfache Taschenrechner-Logik
const display = document.getElementById('display');
let current = '0';
let previous = null;
let operator = null;
let shouldReset = false;

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => handle(btn.dataset.value));
});

function handle(value) {
    if (value === '=') {
        calculate();
    } else if (['+', '-', '*', '/'].includes(value)) {
        setOperator(value);
    } else {
        appendValue(value);
    }
}

function appendValue(v) {
    if (shouldReset || current === '0') {
        current = v === '.' ? '0.' : v;
        shouldReset = false;
    } else {
        if (v === '.' && current.includes('.')) return;
        current += v;
    }
    update();
}

function setOperator(op) {
    if (operator && !shouldReset) calculate();
    previous = current;
    operator = op;
    shouldReset = true;
}

function calculate() {
    if (operator === null || previous === null) return;
    const a = parseFloat(previous);
    const b = parseFloat(current);
    let result;
    switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b === 0 ? 'Fehler' : a / b; break;
    }
    current = result.toString();
    operator = null;
    previous = null;
    shouldReset = true;
    update();
}

function update() {
    display.textContent = current;
}
