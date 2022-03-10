// Snack 1:
// A partire da un array di stringhe, crea un secondo array formattando le 
// stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es:
// ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

/*
const output = document.querySelector('.output');
const arrNames = ['pippo', 'PLUTO', 'Paperino', 'topOLIno', 'MinniE'];
const arrCorrectNames = [];

const arrLowerNames = arrNames.map((name) => {
    return name.toLowerCase();
})

const arrNewNames = arrLowerNames.map((name) => {
    return name[0].toUpperCase() + name.slice(1);
})
output.innerHTML = arrNewNames;
*/



// Snack 2:
// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:
// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]
// Crea un nuovo array con la lista dei mammiferi.


/*
const output = document.querySelector('.output');

const animals = [
    {
        nome: 'leone',
        famiglia: 'felidi',
        classe: 'mammiferi' ,
    },
    {
        nome: 'cane',
        famiglia: 'canidi',
        classe: 'mammiferi' ,
    },
    {
        nome: 'gallina',
        famiglia: 'fasianidi',
        classe: 'uccelli' ,
    }
]

const arrClasse = [];

animals.forEach(element => {
    if (element.classe == 'mammiferi') {
        arrClasse.push(element.nome);
    }
})

output.innerHTML = arrClasse;
*/



// Snack 3:
// Crea un array di oggetti che rappresentano delle persone.
// Ogni persona ha un nome, un cognome e un’età.
// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il 
// nome e cognome e l’indicazione se può guidare, in base all’età.

/*
const output = document.querySelector('.output');

const parents = [
    {
        nome: 'Angelo',
        cognome: 'Serra',
        età: 90,
    },
    {
        nome: 'Rossana',
        cognome: 'Manca',
        età: 55,
    },
    {
        nome: 'Ester',
        cognome: 'Simbula',
        età: 41,
    },
]

const arrDrivers = [];

parents.forEach(element => {

    if (element.età > 80) {
        arrDrivers.push(`${element.nome} ${element.cognome} non può guidare`); 
    } else {
        arrDrivers.push(`${element.nome} ${element.cognome} può guidare`);
    }
})

output.innerHTML = arrDrivers;
*/