//palindroma: scrivere una funzione per capire se una parola è palindroma. Quindi chiedere una parola all'utente, utilizzare la funzione per sapere se la parola inserita è palindroma e stampare un messaggio appropriato

//chiedere una parola all'utente
//var parola_utente = prompt('Inserisci una parola');

var user_word = prompt('Inserisci una parola');

//suddividere la parola in singole lettere
var single_letter = user_word.split('');
console.log(single_letter);

//impostare una funzione per verificare se la parola generata è un Palindromo

function palindrome(user_word) {
    var word_palindrome = '';
    for (var i = user_word.length-1; i >= 0; i--) {
        word_palindrome += user_word[i];
    }
    return word_palindrome;
}
var result = palindrome(user_word);
console.log(result);

if (result == user_word ) {
    console.log(' la parola è un palindromo');
} else {
    console.log(' la parola non è un palindromo');
}
