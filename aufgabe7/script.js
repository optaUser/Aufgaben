function ermitteln() {
    const gewicht = Number(document.getElementById('gewicht').value);
    const groesseCm = Number(document.getElementById('groesse').value);

    if (!gewicht || !groesseCm) {
        document.getElementById('ergebnis').textContent =
            'Bitte Gewicht und Größe eingeben.';
        return;
    }

    // BMI = Gewicht (kg) / Größe (m)²
    const groesseM = groesseCm / 100;
    const bmi = gewicht / (groesseM * groesseM);
    const bmiRund = bmi.toFixed(2);

    let kategorie;
    if (bmi < 18.5) kategorie = 'Untergewicht';
    else if (bmi < 25) kategorie = 'Normalgewicht';
    else if (bmi < 30) kategorie = 'Übergewicht';
    else kategorie = 'Adipositas';

    document.getElementById('ergebnis').textContent =
        `Ihr BMI: ${bmiRund} (${kategorie})`;
}
