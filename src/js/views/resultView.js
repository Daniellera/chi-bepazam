import {elements} from './base'

export const removeUI = () => {
    elements.firstSection.innerHTML = "";
}
export const makeNewUI = () => {
    elements.resultsSection.style = ('display','block');
}
export const renderResultUI = (el) => {
    if(el.length === 0){
        const markup = "<li>با این چیزایی که خونه داری باید تلفن را برداری زنگ بزنی رستوران</li>";
        elements.results.insertAdjacentHTML('beforeend',markup);
    }else{
        el.forEach(element => {
            const markup = `
                <li>${element}</li>
            `
            elements.results.insertAdjacentHTML('beforeend',markup);
        });
    }

}