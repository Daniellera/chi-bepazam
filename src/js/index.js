navigator.serviceWorker.register('../sw.js')
import {elements} from './views/base';
//--Getting Tags
import {tags} from './views/base';
//--Getting foods
import {foods} from './views/base';
import {tagsView} from './views/tagsView';
import {selectedTags} from './views/tagsView';
import {collectSelectedTags} from './models/tags';
import * as resultView from './views/resultView';


//--filling tags controller
tagsView(tags);

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
    resultView.renderResultUI(el);
    
}

//get data when pushing search button
elements.searchBtn.addEventListener('click',() =>{
    //getting selected tags
    const result = collectSelectedTags();
    //--Matching selected tags and foods
    let selectedOnes = [];
    Object.keys(foods).forEach(el => {
        let areSame = true;
            for(var b=0;b<foods[el].length;b++){
                if(!result.includes(foods[el][b])){
                    areSame = false;
                    break;
                }
             }  
            if(areSame){
                selectedOnes.push(el);
            }
    })
    console.log(selectedOnes)
    showSelectedFoods(selectedOnes);    
})

