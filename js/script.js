const form = document.querySelector(`form`);

//random-number calls
const carriageNum = getRandomIntInclusive(1, 10);
const seatNum = getRandomIntInclusive(1, 50);
console.log(`carriageNum: ${carriageNum}`);
console.log(`seatNum: ${seatNum}`);

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
        alert(`Input not valid. Please try again...`);
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

    price = Number((price * (1 - discount)));
    console.log(`typeof price`, typeof price);
    console.log(`Il prezzo del biglietto è di: € ${price}` );

    // Inserisco in HTML i valori calcolati
    document.getElementById("price").textContent = `€ ${price.toFixed(2)}`;
    document.getElementById("carriage").textContent = `${carriageNum}`;
    document.getElementById("seat").textContent = `${seatNum}`;

    document.getElementById("daNascondere").classList.remove("d-none");


});

//Funzione (riciclata da js-pariedispari ) che genera casualmente numero intero nell'intervallo [min, max]:
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min); 
    const maxFloored = Math.floor(max); 
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

//Funzione per nascondere seconda card con bottone annulla
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("daNascondere").classList.add("d-none");
});




