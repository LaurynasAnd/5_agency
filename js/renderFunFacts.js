function renderFunFacts(data, selector) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length;
    for (let i = 0; i < size; i++) {
        HTML += `<div class="fact col-12 col-md-6 col-lg-4">
                    <p class="number">${data[i].number}</p>
                    <p class="description">${data[i].description}</p>
                </div>`
    }
    return DOM.innerHTML = HTML;
}

function animateFunFacts(){
    const allFacts = document.querySelectorAll('.fact-list > .fact > .number');
    const size = allFacts.length;
    for (let i = 0; i < size; i++) {
        const   number = parseInt(allFacts[i].innerText),
                totalTime = 3000,
                fps = 30,
                timeGap = 1000 / fps,
                totalFrames = totalTime / timeGap;
        let currentNumber = 0,
            currentFrame = 0;
        
        
        allFacts[i].innerText = 0;

        const timer = setInterval( () => {
            currentFrame++
            currentNumber += (number/totalFrames);
            allFacts[i].innerText = Math.round(currentNumber);
            if (currentFrame >= totalFrames) {
                clearInterval(timer)
            }
        },timeGap)
    }
    return;
}

export {renderFunFacts, animateFunFacts};