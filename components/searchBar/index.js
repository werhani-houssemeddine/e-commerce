import decoration from './index.css' assert {type: 'css'};

export default class SearchBar extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        let shadow = this.attachShadow({mode: 'open'});
        shadow.adoptedStyleSheets = [decoration];
        shadow.innerHTML = `
            <header>
                <div class="searchBar">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"></path>
                    </svg>

                    <input type="search" name="" placeholder="Search items collections markets and clothes ">
                        
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                        <path id="Stroke 1" d="M11.1437 17.8829H4.67114" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M15.205 17.8839C15.205 19.9257 15.8859 20.6057 17.9267 20.6057C19.9676 20.6057 20.6485 19.9257 20.6485 17.8839C20.6485 15.8421 19.9676 15.1621 17.9267 15.1621C15.8859 15.1621 15.205 15.8421 15.205 17.8839Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Stroke 5" d="M14.1765 7.39439H20.6481" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path id="Stroke 7" fill-rule="evenodd" clip-rule="evenodd" d="M10.1153 7.39293C10.1153 5.35204 9.43436 4.67114 7.39346 4.67114C5.35167 4.67114 4.67078 5.35204 4.67078 7.39293C4.67078 9.43472 5.35167 10.1147 7.39346 10.1147C9.43436 10.1147 10.1153 9.43472 10.1153 7.39293Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </header>
        `;
    }
}