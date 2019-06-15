import {elements} from './views/base';
import {alaki} from "./models/pwa-install";

import {tagsView} from './views/tagsView';
import {selectedTags} from './views/tagsView';
import {collectSelectedTags} from './models/tags';
import * as resultView from './views/resultView';



//fetching data from firebase
fetch("./data/food-additives.json")
.then(e => {
    return e.json()
}).then(fetchedData => {

    //--filling tags controller
    window.fetchedData = fetchedData;
    tagsView(fetchedData.additives);

    //--searching controller
    //determine the selected tags and highlight it
    selectedTags();




    //show Selected foods that matches the tags
    const showSelectedFoods = el => {
        //clear the UI
        resultView.removeUI()
        
        //make new UI
        resultView.makeNewUI()

        //render result UI
        resultView.renderResultUI(el,fetchedData.foodsURL,fetchedData.foods);
        
    }

    //get data when pushing search button
    elements.searchBtn.addEventListener('click',() =>{
        //getting selected tags
        const result = collectSelectedTags();
        //--Matching selected tags and foods
        let selectedOnes = [];
        Object.keys(fetchedData.foods).forEach(el => {
            let areSame = true;
                for(var b=0;b<fetchedData.foods[el].length;b++){
                    if(!result.includes(fetchedData.foods[el][b])){
                        areSame = false;
                        break;
                    }
                }  
                if(areSame){
                    selectedOnes.push(el);
                }
        })
        window.elements = selectedOnes;
        showSelectedFoods(selectedOnes);    
    })

})
