import {elements} from './base'

export const removeUI = () => {
    elements.firstSection.innerHTML = "";
}
export const makeNewUI = () => {
    elements.resultsSection.style = ('display','block');
}
export const renderResultUI = (el) => {
    el.forEach(element => {
        const markup = `
            <li>${element}</li>
        `
        elements.results.insertAdjacentHTML('beforeend',markup);
    });
}