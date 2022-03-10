// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color"
//  in modo dinamico: generare in modo casuale un codice colore, sapendo che 
//  la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri 
//  alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.

const arrIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per
//  ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per
//  visualizzare le icone del colore corrispondente.

const eleContainer = document.getElementById('main')

function insertIcons(arrIcons, eleContainer) {

	eleContainer.innerHTML = "";

	arrIcons.forEach((arrIcons) => {
		
		const eleMainContainer = document.createElement('div');
		eleContainer.classList.add('main-container');
		eleMainContainer.classList.add('icon-card');
		
		eleMainContainer.innerHTML = `
		<div class="content-card">
			<i class = "${arrIcons.family} ${arrIcons.prefix}${arrIcons.name}" style = "color:${arrIcons.color}"></i>
			<div class="main-text">${arrIcons.name}</div>
		</div>
		`;
	
		eleContainer.append(eleMainContainer);
	});
}

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai 
// vari tipi di icone (animal, vegetable, user). 
// Quando l'utente seleziona un tipo dalla select, visualizzare solamente 
// le icone corrispondenti.

const iconsTypeSelector = document.getElementById("icons");
insertIcons(arrIcons, eleContainer);

iconsTypeSelector.addEventListener("change", function () {
  const iconsTypeSelected = this.value;

  if (iconsTypeSelected != "all") {
    const filteredIcons = arrIcons.filter((iconType) => {
      if (iconType.type == iconsTypeSelected) {
        return true;
      }
    });

    insertIcons(filteredIcons, eleContainer);
  } else {
    insertIcons(arrIcons, eleContainer);
  }
});