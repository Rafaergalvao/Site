// MENU MOBILE
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// COLEÇÕES
const collectionsData = [
  {
    name: "Shows",
    path: "portfolio/shows"
  },
  {
    name: "Portraits",
    path: "portfolio/portraits"
  }
];

const container = document.getElementById("collections");

collectionsData.forEach(col => {
  const div = document.createElement("div");
  div.classList.add("collection");

  div.innerHTML = `
    <a href="collection.html?name=${col.name}&path=${col.path}">
      <img src="${col.path}/cover.webp" loading="lazy">
      <span>${col.name}</span>
    </a>
  `;

  container.appendChild(div);
});
// HEADER SCROLL EFFECT
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

