import decoration from '../ads/index.css' assert {type : 'css'};

export default class Ads extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadow = this.attachShadow({mode: 'open'});
        shadow.adoptedStyleSheets = [decoration];
        shadow.innerHTML = this.render(this);
    }

    render(element){
        if(!element.getAttribute('img-src')){  
            return `
                <aside>
                    <div class='close'>X</div>
                    <div class='content'> Pub </div>
                </aside>
            `;
        }else{
            return `
                <aside>
                    <div class='close'>X</div>
                    <img src='${element.getAttribute("img-src")}' width='${element.getAttribute("width")}'>
                </aside>
            `;
        }
    }
}