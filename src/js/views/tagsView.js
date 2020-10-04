import { elements } from "./base";

export const tagsView = (array) => {
  array.forEach((element) => {
    const markup = `
        <li>${element}</li>
        `;
    elements.tagsSection.insertAdjacentHTML("beforeend", markup);
  });
};

export const selectedTags = () => {
  document.querySelectorAll(".tags ul li").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.target.classList.toggle("tag-selected");
    });
  });
};
