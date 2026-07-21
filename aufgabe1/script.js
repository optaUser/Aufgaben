function rechnen(operator){

    let a = Number(document.getElementById("zahl1").value);
    let b = Number(document.getElementById("zahl2").value);

    let ergebnis;

    switch(operator){
        case "+":
            ergebnis = a + b;
            break;

        case "-":
            ergebnis = a - b;
            break;

        case "*":
            ergebnis = a * b;
            break;

        case "/":
            if(b === 0){
                ergebnis = "Division durch 0 nicht möglich";
            }else{
                ergebnis = a / b;
            }
            break;
    }

    document.getElementById("ergebnis").innerHTML = "Ergebnis: " + ergebnis;
}
