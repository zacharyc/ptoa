
const load = () => {
	console.log("this is here");
	debugger;

	var elementsWrapper = document.getElementById("elementsWrapper");
	while (elementsWrapper.firstChild) {
		elementsWrapper.removeChild(elementsWrapper.firstChild);
	}

	for (var column of elements.columns) {
		var colDiv = document.createElement("div");
		colDiv.className = "column";

		var columnTitle = document.createElement("h2");
		columnTitle.innerHTML = column.columnTitle;
		colDiv.appendChild(columnTitle);

		// Need to do elements
		for (element of column.elements) {
			var elDiv = document.createElement("div");
			elDiv.className = "item";

			var symbol = document.createElement("span");
			symbol.innerHTML = element.symbol;
			symbol.className = "symbol";
			elDiv.appendChild(symbol);

			var nameSpan = document.createElement("span");
			nameSpan.innerHTML = element.name;
			nameSpan.className = "name";
			elDiv.appendChild(nameSpan);

			colDiv.appendChild(elDiv);
		}

		elementsWrapper.appendChild(colDiv);
	}
}

