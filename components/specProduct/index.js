export default function specProd(){
    let section = document.createElement('section');
    section.attachShadow({mode: 'open'});
    section.innerHTML = '<p> Hello world </p>'
    return section;
}