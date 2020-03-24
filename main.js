// OGGETTO ESERCIZIO
// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// variabili
var lastNameList;
var userLastName;
var yourNameIndex;

// array di cognomi
lastNameList = [
    "Battaglia",
    "Fiaschi",
    "Randazzo",
    "Capone",
    "Grossano",
    "Andreoli",
    "Fraternali",
    "Valenti",
];

console.log(lastNameList);

// richiesta cognome utente
userLastName = prompt("Scrivi qui il tuo cognome");

// inserimento cognome utente nell'array
lastNameList.push(userLastName);

// array in ordine alfabetico
newList = lastNameList.sort();

console.log(newList);

// ciclo for per determinare posizione nuovo cognome nella lista
for (var i = 0; i < lastNameList.length; i++) {

    if (userLastName == lastNameList[i]) {
        yourNameIndex = i + 1;
    }
}

console.log("Il tuo cognome è il numero "+ yourNameIndex + " della lista");
