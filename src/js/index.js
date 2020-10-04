import { elements } from "./views/base";
import "./models/pwa-install";
import { tagsView, selectedTags } from "./views/tagsView";
import { collectSelectedTags } from "./models/tags";
import * as resultView from "./views/resultView";

//fetching data from database
let url = "./data/food-additives.json";

fetch(url)
  .then((e) => {
    return e.json();
  })
  .then((fetchedData) => {
    //--window. option helps to track data in console log
    window.fetchedData = fetchedData;

    //--filling tags controller
    tagsView(fetchedData.additives);

    //--searching controller
    //determine the selected tags and highlight it
    selectedTags();

    //show Selected foods that matches the tags
    const showSelectedFoods = (el) => {
      //clear the UI
      resultView.removeUI();

      //make new UI
      resultView.makeNewUI();

      //render result UI
      resultView.renderResultUI(el, fetchedData.foodsURL, fetchedData.foods);
    };

    //get data when pushing search button
    elements.searchBtn.addEventListener("click", () => {
      //getting selected tags
      const result = collectSelectedTags();
      //--Matching selected tags and foods
      let selectedOnes = [];
      Object.keys(fetchedData.foods).forEach((el) => {
        let areSame = true;
        for (var b = 0; b < fetchedData.foods[el].length; b++) {
          if (!result.includes(fetchedData.foods[el][b])) {
            areSame = false;
            break;
          }
        }
        if (areSame) {
          selectedOnes.push(el);
        }
      });
      //window. opetion helps us to use console log to check them
      window.elements = selectedOnes;
      showSelectedFoods(selectedOnes);
    });
  });
