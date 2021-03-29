/**********************************
        PAROLA PALINDROMA
**********************************/

// 1- Chiedere all’utente di inserire una parola.
// 2- Creare una funzione per capire se la parola inserita è palindroma.


// 1- Chiedere all'utente di inserire una parola.
var parola = prompt('Inserisci una parola');
console.log(parola);

// 2- Invocazione funzione.
var parolaPalindroma = reverseChars(parola);
console.log(parolaPalindroma);

if (parola === parolaPalindroma) {
    console.log('La parola', parola,'è palindroma');
} else {
    console.log('La parola', parola,'non è palindroma');
}


// UTILITIES
// Definizione funzione

function reverseChars(parola) {
    var reverse = '';

    for (var i = parola.length - 1; i >= 0; i--) {
        reverse += parola[i];
    }

    return reverse;
}



/**********************************
        PARI E DISPARI
**********************************/

// 1- L’utente sceglie pari o dispari.
// 2- Inserisce un numero da 1 a 5.
// 3- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// 4- Sommiamo i due numeri.
// 5- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// 6- Dichiariamo chi ha vinto.

// 1- L’utente sceglie pari o dispari.
var scelta = prompt('Scegli pari o dispari').toLowerCase().trim();
console.log(scelta);

// 2- Inserire un numero da 1 a 5.
var numero = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('Il numero inserito è: ', numero);

// 3- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var randomComputer = generatorNumber(1,5);
console.log('Il numero random del computer è: ', randomComputer);

// 4- Sommiamo i due numeri.
var risultato = numero + randomComputer;

// 5- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
var risultatoFinale = pariDispari(risultato);
console.log('La somma è: ', risultato, risultatoFinale);

// 6. 
if (risultatoFinale === scelta) {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}


// UTILITIES
// 3-Definizione funzione (generatore numero random computer).

function generatorNumber(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);  
    return random;
}

// 5-Definizione funzione (pari o dispari?)

function pariDispari(num){
    var somma;

    if (num % 2 === 0){
        somma = 'pari';
    } else {
        somma = 'dispari';
    }

    return somma;
}



