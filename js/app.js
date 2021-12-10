const navbar = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
const listItems = document.createDocumentFragment();

sections.forEach((section) => {
  const listItem = document.createElement("li");
  const text = section.getAttribute("data-nav");
  listItem.textContent = text;
  listItems.appendChild(listItem);
});

navbar.appendChild(listItems);
console.log(navbar);
