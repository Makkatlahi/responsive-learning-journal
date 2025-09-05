import { blogs } from "./data.js";

const blogsContainer = document.querySelector(".blogs");
const viewMoreBtn = document.querySelector(".view-more-btn");
const viewLessBtn = document.querySelector(".view-less-btn");

blogs.slice(0, 3).forEach((blog) => {
  const blogDiv = document.createElement("div");
  blogDiv.classList.add("blogs__blog");
  blogDiv.innerHTML = `
  <img class="blogs__blog--image" src="${blog.image}" alt="${blog.altText}"/>
  <p class="blogs__blog--date">${blog.date}</p>
  <h2 class="blogs__blog--title">${blog.title}</h2>
  <p class="blogs__blog--description">${blog.description}</p>
  `;
  blogsContainer.appendChild(blogDiv);
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-more-btn")) {
    viewMoreBtn.classList.add("hidden");
    viewLessBtn.classList.remove("hidden");

    blogs.slice(3).forEach((blog) => {
      const blogDiv = document.createElement("div");
      blogDiv.classList.add("blogs__blog");
      blogDiv.innerHTML = `
  <img class="blogs__blog--image" src="${blog.image}" alt="${blog.altText}"/>
  <p class="blogs__blog--date">${blog.date}</p>
  <h2 class="blogs__blog--title">${blog.title}</h2>
  <p class="blogs__blog--description">${blog.description}</p>
  `;
      blogsContainer.appendChild(blogDiv);
    });
  } else if (e.target.classList.contains("view-less-btn")) {
    viewLessBtn.classList.add("hidden");
    viewMoreBtn.classList.remove("hidden");
    const blogItems = blogsContainer.querySelectorAll(".blogs__blog");
    blogItems.forEach((item, index) => {
      if (index >= 3) {
        item.remove();
      }
    });
  } else if (e.target.classList.contains("home")) {
    const header = document.querySelector(".header");
    const heroSection = document.querySelector(".hero");
    const heroImage = document.querySelector(".hero__image");
    const articleSection = document.querySelector(".article");

    header.classList.add("remove-bg");
    heroSection.style.color = "rgb(9, 9, 1)";
    heroSection.style.padding = "2.4375rem 1rem 9rem 1rem";
    heroImage.classList.remove("hidden");
    articleSection.classList.remove("hidden");
  }
});
