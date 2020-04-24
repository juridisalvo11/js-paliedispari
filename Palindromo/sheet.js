//palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

//chiedere una parola all'utente
//var parola_utente = prompt('Inserisci una parola');

var parola_utente = 'anna';

//suddividere la parola in singole lettere
var lettera = parola_utente.split('');
console.log(lettera);

//impostare una funzione per verificare se la parola generata è un Palindromo

function palindromo(parola_utente) {
    var parola_palindroma = '';
    for (var i = parola_utente.lenght; i >= 0; i--) {
        parola_palindroma += parola_utente
    }

    return parola_palindroma;
}

var risultato = palindromo(parola_utente);

if (parola_utente == risultato) {
    console.log(' la parola è un palindromo');

} else {
    console.log(' la parola non è un palindromo');
}
