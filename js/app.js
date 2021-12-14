const createNavbar = (sections) => {
  const emptyNavbar = document.querySelector("#navbar__list");
  const navItems = document.createDocumentFragment();

  sections.forEach((section) => {
    const itemId = section.getAttribute("id");
    const text = section.getAttribute("data-nav");

    const link = document.createElement("a");
    link.setAttribute("href", `#${itemId}`);
    link.classList.add("menu__link");
    link.textContent = text;

    const navItem = document.createElement("li");
    navItem.appendChild(link);

    navItems.appendChild(navItem);
  });

  emptyNavbar.appendChild(navItems);
};

const toggleActiveSections = (sections) => {
  document.addEventListener("scroll", () => {
    sections.forEach((section) => {
      const sectionPosition = section.getBoundingClientRect().top;
      if (sectionPosition < 300 && sectionPosition > -500) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  });
};

const buildScrolling = () => {
  const navbar = document.querySelector("#navbar__list");

  navbar.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href");
    const section = document.querySelector(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  createNavbar(sections);

  toggleActiveSections(sections);

  buildScrolling();
});
