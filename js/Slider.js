import {ajax} from './ajax.js';

class Slider {
    constructor(params){
        this.selector = params.selector;
        this.data = params.data;
        this.dataURL = params.dataURL;
        this.renderPosition = params.renderPosition;
        this.maxItemsOnMobile = 9;
        this.imgPath = params.imgPath
        
        this.DOM = null;
        this.cardList = null;
        this.controls = null;

        this.init();
    }
    init() {
        //selector validation
        if(!this.isValidSelector()){
            return;
        }
        this.willItOverwriteContent()
        //content rendering
        ajax(this.dataURL, this.render);
    }

    isValidSelector(){
        if (this.selector === undefined){
            console.error('Slider has to have a selector');
            return false;
        }
        if (typeof this.selector !== 'string') {
            console.error('Slider selector has to be a string type');
            return false;
        }
        if (this.selector.length === 0) {
            console.error('Slider selector is empty');
            return false;
        }
        this.DOM = document.querySelector(this.selector);
        if(!this.DOM) {
            console.error('Could not find HTML element by given selector');
            return false;
        }
        return true;
    }
    willItOverwriteContent(){
        if(typeof this.renderPosition === undefined){
            if (this.DOM.innerHTML) {
                console.warn('Rendering Sleder overwritten content');
            }
        } else {
            switch(this.renderPosition){
                case 'beforebegin':
                case 'afterbegin':
                case 'beforeend':
                case 'afterend':
                    break;
                default:
                    console.warn('Possible option for "renderPosition" are: beforebegin, afterbegin, beforeend, afterend');
                    break;
            }
        }
    }
    render() {
        this.cardList = new CardList({
            data: this.data,
            imgPath: this.imgPath
        });
        this.controls = new Controls();
        const HTML = `<div class="slider">
                        ${this.cardList.render()}
                        ${this.controls.render()}
                    </div>`;
        if (this.renderPosition === undefined) {
            this.DOM.innerHTML = HTML;
        } else {
            this.DOM.insertAdjacentHTML(this.renderPosition, HTML)
        }
    }
}

class CardList {
    constructor(params) {
        this.data = params.data;
        this.imgPath = params.imgPath
    }
    render(){
        let HTML = '';
        for (const item of this.data) {
            HTML += `<div class="item" style="--items-count: ${this.data.length}">
                        <img src="${this.imgPath}${item.photo}" alt="${item.title} list image">
                        <div class="details">
                            <div class="category">${item.category}</div>
                            <h3 class="title">${item.title}</h3>
                            <a href="${item.link}" class="btn read-more">Read more</a>
                        </div>
                    </div>`
        }
        return `<div class="list">${HTML}</div>`
    }
}

class Controls {
    constructor(params) {
        this.currentlyActive = 0;
    }
    render() {

        return `<div class="controls">.....</div>`
    }

    showNext(step=1) {
        this.currentlyActive += step;
    }
    showPrevious(step=1) {
        this.currentlyActive -= step;
    }
}

export {Slider}