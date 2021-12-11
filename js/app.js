document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar__list");
  const sections = document.querySelectorAll("section");
  const listItems = document.createDocumentFragment();

  sections.forEach((section) => {
    const itemId = section.getAttribute("id");
    const text = section.getAttribute("data-nav");

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", `#${itemId}`);

    link.textContent = text;
    listItem.appendChild(link);
    listItems.appendChild(listItem);
  });

  navbar.appendChild(listItems);
  console.log(navbar);
});
