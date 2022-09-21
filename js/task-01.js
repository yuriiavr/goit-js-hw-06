const numberOfCategories = document.querySelectorAll("li.item").length;
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories}`);
categories.forEach((category) => {
    console.log(`Category: ${category.querySelector("h2").textContent}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`);
})