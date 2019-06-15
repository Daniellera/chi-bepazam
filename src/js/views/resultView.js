import {elements} from './base';
import { setTimeout } from 'timers';

export const removeUI = () => {
    elements.firstSection.innerHTML = "";
}
export const makeNewUI = () => {
    setTimeout(elements.resultsSection.style.display = "block",0.5);
    elements.resultsSection.style.transform = 'translateX(0vw)';
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