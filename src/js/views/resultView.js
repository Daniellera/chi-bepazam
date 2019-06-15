import {elements} from './base';

export const removeUI = () => {
    elements.firstSection.innerHTML = "";
}
export const makeNewUI = () => {
    elements.resultsSection.style = ('display','block');
}
export const renderResultUI = (el,url,foods) => {
    let markup;
    if(el.length === 0){
        markup = "<li>با این چیزایی که خونه داری باید تلفن را برداری زنگ بزنی رستوران</li>";
        elements.results.insertAdjacentHTML('beforeend',markup);
    }else{
        el.forEach((element) => {
            markup = `
                <li><a href=${url[Object.keys(foods).indexOf(element)]}>${element.split("_").join(" ")}</a></li>
            `
            elements.results.insertAdjacentHTML('beforeend',markup);
        });
    }
}