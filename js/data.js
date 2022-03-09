// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per
//  visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai 
// vari tipi di icone (animal, vegetable, user). 
// Quando l'utente seleziona un tipo dalla select, visualizzare solamente 
// le icone corrispondenti.


const arrIcons = [
	{
		name: 'cat',
		prefix: 'fas fa-cat',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fas fa-crow',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fas fa-dog',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fas fa-dove',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fas fa-dragon',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fas fa-horse',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fas fa-hippo',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fas fa-fish',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fas fa-carrot',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fas fa-apple-alt',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fas fa-lemon',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fas fa-pepper-hot',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fas fa-user-astronaut',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fas fa-user-graduate',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fas fa-user-ninja',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fas fa-user-secret',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per
//  ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

const eleContainer = document.getElementById('main')

for (let i = 0; i < arrIcons.length; i++) {
    createCards(arrIcons[i]);
}

function createCards(arrIcons) {
	const eleMainContainer = document.createElement('div');
	eleContainer.classList.add('main-container');
	eleMainContainer.classList.add('icon-card');
	
	
	eleMainContainer.innerHTML = `
	<div class="content-card">
		<i class = "${arrIcons.prefix}"></i>
		<div class="main-text">${arrIcons.name}</div>
	</div>
	`;

	eleContainer.append(eleMainContainer);
}