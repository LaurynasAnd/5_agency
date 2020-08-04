function renderServices(data, selector) {
    //validation

    //logic
    let HTML = '';
    const DOM = document.querySelector(selector);
    const size = data.length;
    for (let i = 0; i < size; i++) {
        const service = data[i];
        HTML += `<div class="service">
                    ${service.icon}
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                </div>`;
    }
return DOM.innerHTML = HTML;
}

export default renderServices;