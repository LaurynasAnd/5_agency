function renderFunFacts(data, selector) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length;
    for (let i = 0; i < size; i++) {
        HTML += `<div class="fact col-12 col-md-6 col-lg-4" data-animate="true">
                    <p class="number">${data[i].number}</p>
                    <p class="description">${data[i].description}</p>
                </div>`
    }
    return DOM.innerHTML = HTML;
}

function animateFunFact(block){
    const numberElement = block.querySelector('.number');
    
    const   number = parseInt(numberElement.innerText),
            totalTime = 2000,
            fps = 30,
            timeGap = 1000 / fps,
            totalFrames = totalTime / timeGap;
    let currentNumber = 0,
        currentFrame = 0;
    
    
    numberElement.innerText = 0;

    const timer = setInterval( () => {
        currentFrame++
        currentNumber += (number/totalFrames);
        numberElement.innerText = Math.round(currentNumber);
        if (currentFrame >= totalFrames) {
            clearInterval(timer)
        }
    },timeGap)
    
    return;
}

function addEventListenerFunFactsOnScroll() {
    window.addEventListener('scroll', () => {
        const blocks = document.querySelectorAll('.fact');
        for (const block of blocks) {
            const blockBottomPosition = block.offsetHeight + block.offsetTop;
            const windowHeight = window.innerHeight;
            const windowPosition = {x:0,y:0};
            const windowBottomPosition = window.innerHeight + window.pageYOffset;
            if (windowBottomPosition >= blockBottomPosition) {
                if (block.dataset.animate === 'true') {
                    animateFunFact(block);
                    block.dataset.animate = 'false';
                }
            }

        }
        return;
    });
}




export {renderFunFacts, addEventListenerFunFactsOnScroll};