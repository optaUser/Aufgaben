// Live-Taschenrechner
// Display zeigt die komplette Eingabe. Nach "=" leert sich das Display
// und zeigt nur das Ergebnis. Ergebnis wird auch in die Konsole geloggt.

const display = document.getElementById('display');
let eingabe = '';

document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => handle(btn.dataset.value));
});

function handle(value) {
    if (value === '=') {
        berechne();
    } else if (['+', '-', '*', '/'].includes(value)) {
        eingabe += ' ' + value + ' ';
    } else {
        eingabe += value;
    }
    render();
}

function berechne() {
    try {
        const result = eval(eingabe);
        console.log('Ergebnis: ' + result);
        eingabe = String(result);
    } catch (e) {
        console.log('Fehler bei der Berechnung');
        eingabe = 'Fehler';
    }
    render();
}

function render() {
    display.textContent = eingabe || '0';
}
