let loadData = (function () {
    function loadData(searchType) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                CSV = this.response;
                let a = (csv_to_array(CSV));
                var data = {
                    YEAR: "",
                    SCORE: "",
                    TITLE: ""
                }

                for (const b of a) {
                    var data = {
                        YEAR: b[0],
                        SCORE: b[1],
                        TITLE: b[2]
                    }

                    document.getElementById("demo").innerHTML += `<pre><h5>NAME:${data.TITLE}  
   - YEAR:${data.YEAR}    
   - SCORE:${data.SCORE}</h5></pre>`
                }
            }
        };
        xhttp.open("GET", "data.csv", true);
        xhttp.send();
    }

    return loadData;
})()

function csv_to_array(CSV, delimeter = ",") {
    let splittedStr = CSV.split('\n');

    let secondDimArr = splittedStr.map(x => x.split(delimeter));
    secondDimArr.shift();
    //return secondDimArr//CSV to YEML

    var myJSON = JSON.stringify(secondDimArr);
    //return myJSON//CSV to JSON

    var my = JSON.parse(myJSON);
    return my//CSV to JSON to YEML

}


