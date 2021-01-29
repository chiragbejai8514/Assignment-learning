let loadData = (function () {
    function loadData() {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let parsedData = getParsedData(this.response);
                let results = parsedData.results;
                results.forEach(result => {
                    let finalResult = getDisplayTemplate(result);
                    document.getElementById("content-side").innerHTML += finalResult;
                });
            }
        };
        xhttp.open("GET", "https://swapi.co/api/people/?format=json", true);
        xhttp.send();
    }

    function getParsedData(data) {
        return JSON.parse(data);
    }

    function getDisplayTemplate(data) {
        return ` <div class="content-side-info">
            <div class="content-side-info-name">${data.name}</div>
            <div class="content-side-info-rest"><span>Height: </span>${data.height}</div>
            <div class="content-side-info-rest"><span>Mass: </span>${data.mass}</div>
            <div class="content-side-info-rest"><span>Hair_color: </span>${data.hair_color}</div>
            `;
    }

    return loadData;
})()