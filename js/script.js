// const prezzoIniziale= km * 0.21;
// let sconto= 0;

// if (età < 18){
//     sconto = 0.20;
// } 
// else if (età > 65) {
//     sconto = 0.40;
// } 
// const prezzoFinale = (prezzoIniziale * (1 - sconto)).toFixed(2);
// console.log(`Il prezzo del biglietto è di: € ${prezzoFinale}` );



// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: 
// usando esclusivamente due input e un bottone (non stilizzati),
// realizziamo le specifiche scritte sopra. 
// La risposta finale (o output) sarà anch’essa da scrivere in console. 

const form = document.querySelector(`form`);

form.addEventListener(`submit`, function(e) {
    e.preventDefault();

    const km = Number(Number(document.getElementById(`userKm`).value).toFixed(2));
    const age = Number(Number(document.getElementById(`userAge`).value).toFixed(2));
    console.log(`km: ${km}`);
    console.log(`age: ${age}`);
    console.log(typeof km);
});