/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 5;
const num2 = 10;

if (num1 > num2) {
  console.log(`Il numero 1: ${num1} è il numero intero più grande del numero2: ${num2} `);
} else {
  console.log(`Il numero 2: ${num2} è il numero intero più grande del numero 1: ${num1} `);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numNuovo = 7;

if (numNuovo !== 5) {
  console.log(`Il numero: ${numNuovo} è diverso da 5`);
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numFornito = 13;

if (numFornito % 5 === 0) {
  console.log(`Il numero fornito: ${numFornito} è divisibile per 5.`);
} else {
  console.log(`Il numero: ${numFornito} non è divisibile per 5`);
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numIntero1 = 3;
const numIntero2 = 5;

// il valore di uno di essi sia 8

if (numIntero1 === 8) {
  console.log(`Il numero intero ${numIntero1} ha come valore 8`);
} else if (numIntero2 === 8){
  console.log(`Il numero intero ${numIntero2} ha come valore 8`);
} else if (numIntero1 + numIntero2 === 8){   //se la loro addizione/sottrazione sia uguale a 8.
  console.log(`La somma dei numeri: ${numIntero1} e ${numIntero2} è uguale a 8`);
} else if (numIntero1 - numIntero2 === 8){
  console.log(`La sottrazione dei numeri: ${numIntero1} e ${numIntero2} è uguale a 8`);
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//  Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".

let totalShoppingCart = null;

//  se il totale del carrello supera 50
//      diritto alla spedizione gratuita 
//  (altrimenti la spedizione ha un costo fisso pari a 10)

//  totale utente checkout per spedizione alg,



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const variabile0 = 1;
const variabile1 = 2;
const variabile2 = 20;

// ordinare dal più alto al più basso
const contenitoreVariabili = [];
// const newCont = [];

console.log(contenitoreVariabili);

if (variabile0 > variabile1) {
  contenitoreVariabili.push(variabile1);    //alla fine più piccolo
  contenitoreVariabili.unshift(variabile0); //prima posizione grande
} else {
  contenitoreVariabili.push(variabile0);
  contenitoreVariabili.unshift(variabile1);
}
if (variabile2 > variabile1) {
  
  if(variabile2 > variabile0){
    contenitoreVariabili.unshift(variabile2);
  }else{
    contenitoreVariabili.splice(1, 0, variabile2);
  }
} else {
  contenitoreVariabili.push(variabile2); 
}
console.log(contenitoreVariabili);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const valForn0 = "10";
// const risultatoNum = valForn0 + 10;
const valConfronto = 10;

// if(risultatoNum !== numeroFinito){
//   console.log("Il valore fornito non è un numero");
// }
// else{
//   console.log("Il valore fornito è un numero");
// }

console.log(typeof valForn0);
console.log(typeof valConfronto);

if(typeof valForn0 === typeof valConfronto){
  console.log("Il valore è un numero");
}else{
  console.log("Il valore non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const valDivisibile = 31;

if(valDivisibile % 2 === 0){
  console.log("Il numero è pari");
}else{
  console.log("Il numero è dispari");
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Prima delle modifiche ", me);

me.city = "Toronto";

console.log("Dopo le modifiche", me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
