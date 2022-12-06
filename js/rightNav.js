import rNav from '../components/rightNav/index.js';
import decoration from '../components/rightNav/index.css' assert{type: 'css'};

export default class RightNav extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadow = this.attachShadow({mode: 'open'});
        shadow.append(rNav);
        shadow.adoptedStyleSheets = [decoration];
        this.swapMode(shadow);
        this.config(shadow);
    }

    swapMode(shadow){
        let token = shadow.querySelector('.mode');
        let div = shadow.querySelector('.chose');
        token.addEventListener('click', ()=>{
            div.classList.toggle('left');
        })
    }

    config(shadow){
        let notification = shadow.querySelector('.notifi svg');
        let content = shadow.querySelector('.notifi span');

        if(content.textContent != '')
            notification.classList.toggle('move');
    }
}