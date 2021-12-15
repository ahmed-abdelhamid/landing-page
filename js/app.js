// Find section in view then apply active class
const toggleActiveSections = () => {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionPosition = section.getBoundingClientRect().top;
    if (sectionPosition < 300 && sectionPosition > -500) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
};

// Navigate to section when click on navigation link
const buildScrolling = (event) => {
  event.preventDefault();
  const sectionId = event.target.getAttribute("href");
  const section = document.querySelector(sectionId);
  section.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navbar = document.querySelector("#navbar__list");
  const navItems = document.createDocumentFragment();

  // Create navigation items
  sections.forEach((section) => {
    const itemId = section.getAttribute("id");
    const text = section.getAttribute("data-nav");

    // Create anchor tage and apply attributes to it
    const link = document.createElement("a");
    link.setAttribute("href", `#${itemId}`);
    link.classList.add("menu__link");
    link.textContent = text;

    // Creat list tag and append anchor element to it
    const navItem = document.createElement("li");
    navItem.appendChild(link);

    navItems.appendChild(navItem);
  });

  // Append all list items to the empty navbar
  navbar.appendChild(navItems);

  document.addEventListener("scroll", toggleActiveSections);

  navbar.addEventListener("click", buildScrolling);
});
