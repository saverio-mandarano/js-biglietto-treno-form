// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const km= parseFloat(prompt("Inserisci il numero di chilometri che vuoi percorrere:"))
const età= parseInt(prompt("Adesso inserisci l'età del passeggero:"))

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
const prezzoIniziale= km * 0.21;
let sconto= 0;

// va applicato uno sconto del 20% per i minorenni
if (età < 18){
    sconto = 0.20;
} 
// va applicato uno sconto del 40% per gli over 65.
else if (età > 65) {
    sconto = 0.40;
} 
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
const prezzoFinale = (prezzoIniziale * (1 - sconto)).toFixed(2);
// Output partite da semplice log, e poi se volete stampate in pagina come sapete fare.
console.log(`Il prezzo del biglietto è di: € ${prezzoFinale}` );
// alert(`Il prezzo del biglietto è di: € ${prezzoFinale}` );
document.getElementById("prezzo-biglietto-iniziale").innerHTML = "Il prezzo del biglietto iniziale è di: € " + prezzoIniziale;
document.getElementById("prezzo-biglietto-finale").innerHTML += ` € ${prezzoFinale}`
document.getElementById("sconto").innerHTML += ` ${sconto * 100} %`;



// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: 
// usando esclusivamente due input e un bottone (non stilizzati),
// realizziamo le specifiche scritte sopra. 
// La risposta finale (o output) sarà anch’essa da scrivere in console. 