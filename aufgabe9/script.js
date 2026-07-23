// Personenverwaltung - einfache CRUD-App
// Daten leben nur im RAM (verschwinden beim Reload)

let personen = [];

function render() {
    const list = document.getElementById('list');
    if (personen.length === 0) {
        list.innerHTML = '<p class="leer">Noch keine Personen vorhanden.</p>';
        return;
    }
    list.innerHTML = personen.map(p =>
        `<div class="eintrag">${p.name} ${p.adresse} ${p.plz} ${p.ort}</div>`
    ).join('');
}

function readForm() {
    return {
        name: document.getElementById('name').value.trim(),
        adresse: document.getElementById('adresse').value.trim(),
        plz: document.getElementById('plz').value.trim(),
        ort: document.getElementById('ort').value.trim()
    };
}

function anzeigen() {
    render();
    console.log('Personenliste:', personen);
}

function hinzufuegen() {
    const p = readForm();
    if (!p.name) {
        alert('Bitte mindestens einen Namen eingeben.');
        return;
    }
    personen.push(p);
    render();
    console.log('Hinzugefügt:', p);
}

function loeschen() {
    const name = document.getElementById('name').value.trim();
    if (!name) {
        alert('Bitte einen Namen zum Löschen eingeben.');
        return;
    }
    const vorher = personen.length;
    personen = personen.filter(p => p.name !== name);
    if (personen.length === vorher) {
        alert('Person nicht gefunden: ' + name);
    } else {
        render();
        console.log('Gelöscht:', name);
    }
}

function bearbeiten() {
    const name = document.getElementById('name').value.trim();
    if (!name) {
        alert('Bitte den Namen der zu bearbeitenden Person eingeben.');
        return;
    }
    const person = personen.find(p => p.name === name);
    if (!person) {
        alert('Person nicht gefunden: ' + name);
        return;
    }
    const neu = readForm();
    if (neu.name) person.name = neu.name;
    if (neu.adresse) person.adresse = neu.adresse;
    if (neu.plz) person.plz = neu.plz;
    if (neu.ort) person.ort = neu.ort;
    render();
    console.log('Bearbeitet:', person);
}

// Initial: Liste einmal anzeigen
render();
