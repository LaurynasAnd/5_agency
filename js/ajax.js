'use strict';

function ajax(dataFileURL, callback) {
    const URL = `https://laurynasand.github.io/5_agency/data/${dataFileURL}`;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(JSON.parse(xhttp.responseText));
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();
    return; 
}

export {ajax};