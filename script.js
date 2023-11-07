const input = document.querySelector('#fruit');
const suggestionsList = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const search = (inputValue) => fruit.filter(f => f.toLowerCase().includes(inputValue));

function clearSuggestions() {
	suggestionsList.textContent = '';
}

function searchHandler(event) {
	const inputValue = event.target.value;

	// Only show suggestions if there is input
	if (inputValue.trim() !== '') {
		const inputLowerCase = inputValue.toLowerCase();
		const results = search(inputLowerCase);
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
		clearSuggestions();
	}
}

input.addEventListener('keyup', searchHandler);
suggestionsList.addEventListener('click', useSuggestion);


