const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
	let results = [];

	// Make fruit list lowercased
	let fruitLowerCase = fruit.map(fruit => fruit.toLowerCase());

	// Have user input lowercased
	let inputLowerCase = str.toLowerCase();

	// Loop through fruit to return fruits that includes user input string

	for(i = 0; i < fruitLowerCase.length; i++){
		if (fruitLowerCase[i].includes(inputLowerCase)){
			results.push(fruitLowerCase[i]).toString;
		};

	};

	return results;

}

function searchHandler(e) {
	e.preventDefault();
	const results = search(input.value);
	showSuggestions(results, input.value)
}

function showSuggestions(results, inputVal) {

	// makes sure that suggestions is empty unless there's user input
	suggestions.innerText= '';

	// If value is inputted, iterate results and for each fruit that matches user input, make a list element.

	if (inputVal != ''){
		results.forEach(result => {
			let dropDown = document.createElement("li");
			dropDown.textContent = result;
			suggestions.appendChild(dropDown);
		});
	};
}

function useSuggestion(e) {
	// makes sure that suggestions list is cleared once a suggestion is selected
	suggestions.innerText = "";

	// Set input value to selected suggestion
	input.value = e.target.innerText;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
