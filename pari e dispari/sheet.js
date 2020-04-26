//gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

//chiedere un numero compreso tra 1 e 5 all'utente
var numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 5'));
console.log(numero_utente);
//far scegliere all'utente tra pari e dispari
var scelta_utente = prompt('Pari o Dispari ?');
console.log(scelta_utente);
//generare un numero casuale compreso tra 1 e 5
var numero_pc = Math.floor(Math.random() * 5) +1;
console.log(numero_pc);
//sommare il numero utente con il numero del pc per verificare se il risultato sarà pari o dispari
var somma_numeri = numero_utente + numero_pc;
console.log(somma_numeri);
//console.log(somma);
//imposto una variabile per il resto
var resto = somma_numeri % 2;
console.log(resto);
//comunico l'esito all'utente
if ((resto == 0 && numero_utente == 0)) {
    console.log('la somma dei numeri è pari ' + somma_numeri + ' Hai vinto!');
} else if ((resto == 0 && numero_utente != 0)) {
    console.log('la somma dei numeri è dispari ' + somma_numeri + ' Hai vinto!');
} else {
    console.log( + somma_numeri + ' Hai perso!');
}
