const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
	let results = [];

	// Make fruit list lowecased
	let fruitLowerCase = fruit.map(fruit => fruit.toLowerCase());

	// Have user input lowercased
	let inputLowerCase = str.toLowerCase();


	
	// // // Filter the list of fruits by user input and return the result
	results.push(fruitLowerCase.filter(fruit => fruit.includes(inputLowerCase)));

	results.forEach(result => {
	})
	return results;
}

function searchHandler(e) {
e.preventDefault();
const results = search(input.value);
showSuggestions(results, input.value)
}

function showSuggestions(results, inputVal) {
	suggestions.innerText= '';

	if (inputVal != ''){
		results.forEach(result => {
			let dropDown = document.createElement("li");
			dropDown.textContent = results;
			suggestions.appendChild(dropDown);
		});
	};
}

function useSuggestion(e) {
suggestions.innerText = "";
input.value = e.target.innerText;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);