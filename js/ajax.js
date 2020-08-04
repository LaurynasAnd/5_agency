'use strict';

function ajax(callback, callbackParams) {
    const URL = 'https://laurynasand.github.io/5_agency/data/services.json'
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(xhttp.responseText);
            callback(response, callbackParams)
        }
    };
    xhttp.open("GET", URL, true);
    xhttp.send();
    return; 
}

export {ajax};