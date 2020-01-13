let btn = document.querySelector('.btn');
let searchInput = document.querySelector('.form-control');
let errorHolder = document.querySelector('.errorHolder');
let resultsTable = document.querySelector('.table');
btn.addEventListener("click", onButtonClicked);
toggleError(false);
toggleResultsTable(false);

function onButtonClicked() {

	let xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = handleResponse;
	
    xmlHttp.open("GET", 'https://www.omdbapi.com/?apikey=e4db3ced&t=' +  searchInput.value);
    xmlHttp.send();
    handleResponse(xmlHttp);
}

function handleResponse(response) {
	if (this.readyState == 4 && this.status == 200) {
        var movie = JSON.parse(this.responseText);
		if (!movie || movie.Response === 'False') {
			showError();
		} else {
			renderHtml(movie);
		}
    }
}

function renderHtml(data) {
	toggleError(false);
	toggleResultsTable(true);
	
	let tableRow = document.querySelector('.table .movie');
	tableRow.innerHTML = '';
	
	appendColumn(tableRow, data.Title);
	appendColumn(tableRow, data.Plot);
	appendColumn(tableRow, data.imdbRating + ' (' + data.imdbVotes + ' votes)');
	appendColumn(tableRow, data.Runtime);
	appendColumn(tableRow, data.Director);
}

function appendColumn(rowElement, text) {
	let titleTd = document.createElement('td');
	titleTd.innerHTML = text;
	rowElement.appendChild(titleTd);
}

function showError() {
	toggleError(true);
	toggleResultsTable(false);
}

function toggleResultsTable(show) {
	if (show) {
		resultsTable.style.display = "block";
	} else {
		resultsTable.style.display = "none";
	}
}

function toggleError(show) {
	if (show) {
		errorHolder.style.display = "block";
	} else {
		errorHolder.style.display = "none";
	}
}