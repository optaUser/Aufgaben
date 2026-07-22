function rechnen(operator) {
    const a = Number(document.getElementById('zahl1').value);
    const b = Number(document.getElementById('zahl2').value);

    let ergebnis;
    switch (operator) {
        case '+': ergebnis = a + b; break;
        case '-': ergebnis = a - b; break;
        case '*': ergebnis = a * b; break;
        case '/':
            ergebnis = b === 0 ? 'Division durch 0 nicht möglich' : a / b;
            break;
    }

    console.log(`Ergebnis (${operator}): ${ergebnis}`);
}
