export const collectSelectedTags = () => {
    const collectedData = [];
    document.querySelectorAll('.tags ul li[data-selected=true]').forEach(el => {
        collectedData.push(el.textContent);
    });
    return collectedData;
}