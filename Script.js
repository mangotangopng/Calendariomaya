function trovaNahual(){

const dataInput =
document.getElementById("birthdate").value;

if(!dataInput){
alert("Inserisci una data");
return;
}

const dataNascita =
new Date(dataInput);

/*
Data di riferimento:
21 dicembre 2012
4 Ajpu
*/

const riferimento =
new Date("2012-12-21");

const giorni =
Math.floor(
(dataNascita - riferimento)
/
(1000*60*60*24)
);

const indice =
((giorni % 20) + 20) % 20;

const nahual =
nahuales[indice];

document.getElementById("nome").innerText =
nahual.nome;

document.getElementById("animale").innerText =
"Animale: " + nahual.animale;

document.getElementById("offerta").innerText =
nahual.offerta;

document.getElementById("descrizione").innerText =
nahual.descrizione;

document.getElementById("immagine").src =
nahual.immagine;

document.getElementById("risultato")
.classList.remove("hidden");

}
