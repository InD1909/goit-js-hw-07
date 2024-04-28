const categoriesList = document.querySelector("#categories");

const categories = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("li");

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elements.length}`);
});

categoriesList.classList.add("list-text");

document
  .querySelectorAll("#categories > .item > ul > li:not(.item)")
  .forEach((li) => {
    if (!li.classList.contains("inside-item")) {
      li.classList.add("inside-item", "inside-item:not(:last-child)");
    }
  });

document.querySelectorAll("#categories > .item > h2").forEach((h2) => {
  h2.classList.add("list-title");
});
