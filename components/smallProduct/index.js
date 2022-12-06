import decoration from './index.css' assert {type: 'css'};
import specProd from '../specProduct/index.js';

export class SmallProd extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadow = this.attachShadow({mode: 'open'});
        shadow.adoptedStyleSheets = [decoration];
        let obj = this.getAttribute('prod-info');
        obj = JSON.parse(obj);

        //setTimeout(Main.hidden(), 10**4);
        shadow.innerHTML = this.render(obj);
        this.script(shadow, obj);
    }

    render(obj){
        let {category, description, id, image, rating, title, price} = obj;
        return `
            <div class="product">
                <figure>
                    <img src="${image}" alt="">
                    <figcaption>
                        <p>${title}</p>
                    </figcaption>
                </figure>
                <section>
                    <span class="price">${price}</span>
                    <span class="seeMore" id-value="${id}">See More</span>
                </section> 
            </div>
        `;
    }

    script(shadow, obj){
        let btn = shadow.querySelector('.seeMore');
        let main = document.querySelector('main-element')
        btn.onclick = (e) =>{
            let p = specProd()
            console.log(p);
        }

    }
}



export class CreateProd{
    constructor(src, name, price, id){
        this.src = src;
        this.name = name;
        this.price = price;
        this.id = id;
    }
}
/*<figure>
                */