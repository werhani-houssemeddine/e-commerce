import main from '../components/main/index.js';
import {SmallProd, CreateProd} from '../../components/smallProduct/index.js';
import decoration from '../components/main/index.css' assert {type: 'css'};

customElements.define('small-prod', SmallProd);

export default class Main extends HTMLElement{
    constructor(){
        super();
    }
    
    connectedCallback(){
        let shadow = this.attachShadow({mode: 'open'});
        shadow.adoptedStyleSheets = [decoration];
        shadow.append(main);
        this.addProduct(shadow);
        //this.addProduct(shadow);
    }

    addProduct(shadow){
        let main = shadow.querySelector('main main');
        let products = [];

        fetch('https://fakestoreapi.com/products')
            .then(res =>res.json())
            .then(data =>{
                data.forEach(element => {
                    //console.table(element);
                    products.push(element);
                    //product.push(new CreateProd(element.image, element.title, element.price, element.id));
                });
                products.forEach(element =>{
                    let prod = document.createElement('small-prod');
                    prod.setAttribute('prod-info', JSON.stringify(element));
                    main.append(prod);
                })

                
            })
            .catch(err => console.error(err));

        console.log(products)
    }
}