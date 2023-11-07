const input = document.querySelector('#fruit');
const suggestionsList = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(inputValue) {
	const inputLowerCase = inputValue.toLowerCase();

	// Filter fruits that include the input string (case-insensitive)
	return fruit.filter(f => f.toLowerCase().includes(inputLowerCase));
}

function clearSuggestions() {
	suggestionsList.textContent = '';
}

function searchHandler(e) {
	const inputVal = e.target.value;

	// Only show suggestions if there is input
	if (inputVal.trim() !== '') {
		const results = search(inputVal);
		showSuggestions(results);
	} else {
		clearSuggestions()
	}
}

function showSuggestions(results) {
	clearSuggestions();

	results.forEach(result => {
		let listItem = document.createElement("li");
		listItem.textContent = result;
		suggestionsList.appendChild(listItem);
	});
}

function useSuggestion(e) {
	if (e.target.tagName.toLowerCase() === 'li') {
		input.value = e.target.textContent;
		clearSuggestions(); // clear suggestions
	}
}

input.addEventListener('keyup', searchHandler);
suggestionsList.addEventListener('click', useSuggestion);


