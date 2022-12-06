import head from '../components/header/index.js'
import decoration from '../components/header/index.css' assert {type: 'css'};

export default class Header extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        let shadow = this.attachShadow({mode: 'open'});
        shadow.adoptedStyleSheets = [decoration];
        shadow.append(head);
    }
}