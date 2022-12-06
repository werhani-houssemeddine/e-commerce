import foot from '../components/footer/index.js';
import decoration from '../components/footer/index.css' assert {type: 'css'};

export default class Footer extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        let shadow = this.attachShadow({mode: 'open'});
        shadow.adoptedStyleSheets = [decoration];
        shadow.append(foot);
    }
}