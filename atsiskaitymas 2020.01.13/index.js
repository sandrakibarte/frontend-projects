let btn = document.querySelector('.btn');
btn.addEventListener("click", onButtonClicked);

function onButtonClicked() {

	let xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = handleResponse;
	
    xmlHttp.open("GET", 'https://www.omdbapi.com/?apikey=e4db3ced&t=titanic');
    xmlHttp.send();
    handleResponse(xmlHttp);
}

function handleResponse(response) {
	if (this.readyState == 4 && this.status == 200) {
        var movie = JSON.parse(this.responseText);
		if (movie == 0) {
			showError();
		} else {
			renderHtml(movie);
		}
    }
}

function renderHtml(data) {
	alert(data.Title + ' ' + data.Year);
}

function showError() {
	alert('Error');
}
