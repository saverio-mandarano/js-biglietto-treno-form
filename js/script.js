// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: 
// usando esclusivamente due input e un bottone (non stilizzati),
// realizziamo le specifiche scritte sopra. 
// La risposta finale (o output) sarà anch’essa da scrivere in console. 

const form = document.querySelector(`form`);

form.addEventListener(`submit`, function(e) {
    // prevengo comportamento di deafult del submit...
    e.preventDefault();


    // estraggo dati di input dell'utente...
    const inputKm = Number(document.getElementById(`userKm`).value.trim().replace(`,`, `.`)); //km in input, massimo due decimali e cambio virgole in punti sennò non funziona
    const km = Number(inputKm.toFixed(2)); //arrotondo a centesimi
   
    const age = parseInt(document.getElementById(`userAge`).value.trim().replace(`,`, `.`)); //age in input, numero intero


    // check di controllo input
    if (isNaN(km) || isNaN(age) || km <= 0 || age <= 0) {
        console.log(`Input not valid. Please try again...`);
        return;
    }


    console.log(`km: ${km}`);
    console.log(`age: ${age}`);
    console.log(`typeof km/age`, typeof km, typeof age);


    //calcolo del prezzo, con eventuali sconti applicati...
    let price = km * 0.21;
    let discount = 0;

    if (age < 18){
        discount = 0.20;
    } 
    else if (age > 65) {
        discount = 0.40;
    } 

    price = Number((price * (1 - discount)).toFixed(2));
    console.log(`typeof price`, typeof price);
    console.log(`Il prezzo del biglietto è di: € ${price}` );

});