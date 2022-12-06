import nav from '../components/navBar/index.js';
import decoration from '../components/navBar/index.css' assert {type: 'css'};
import cliked from '../components/navBar/clicked.css' assert {type: 'css'};

export default class MyNav extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadow = this.attachShadow({mode: 'open'});
        shadow.adoptedStyleSheets = [decoration];
        shadow.append(nav);
        this.config(shadow);
        //this.setImage(shadow);
        console.log(this.offsetWidth);
    }

    config(shadow){
        let arrow = shadow.querySelector('.arrow');

        arrow.addEventListener('click', ()=>{
            //console.log(arrow.getAttribute('default-value'));
            let r = document.querySelector(':root');
            if(arrow.getAttribute('default-value') === "false"){
                r.style.setProperty('--nav-width', '100px');
                shadow.adoptedStyleSheets = [decoration, cliked];
                arrow.setAttribute('default-value', 'true');
                shadow.querySelector('nav').removeAttribute('part');
            }else{
                shadow.adoptedStyleSheets = [decoration];
                r.style.setProperty('--nav-width', '250px');
                arrow.setAttribute('default-value', 'false');
            }
        });

        let more = shadow.querySelector('.more');
        let user = shadow.querySelector('.user');

        more.addEventListener('click',()=> show(true));
        user.addEventListener('mouseenter', () => show(false, 'false'));
        user.addEventListener('mouseleave', () => show(false, 'true', 0.5));

        function show(click = false, enter = 'false', delay = 0){
            let div = shadow.querySelector('.information');
            let hidden = div.getAttribute('is-hide');
            let value = hidden === 'true'?'false':'true';
            if(click === true){
                div.setAttribute('is-hide', value);
                return ;
            }else{
                div.setAttribute('is-hide', enter);
                div.style = `transition-delay: ${delay}s`;
            }
        }
    }

    setImage(shadow){
        let user = shadow.querySelector('.user');
        let img = new Image(42, 42);
        img.src = '../image/user.jpg';
        user.children[0].remove();
        user.append(img)
    }
}