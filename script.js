// 🌍 AUTO TRANSLATE
const lang = navigator.language.startsWith("pl") ? "pl" : "en";

document.querySelectorAll("[data-pl]").forEach(el => {
  el.textContent = el.dataset[lang];
});

// 📝 BLOG
async function loadPosts() {
  const res = await fetch("posts.json");
  const posts = await res.json();

  const container = document.getElementById("posts");

  posts.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h2>${p.title}</h2>
      <p>${p.content}</p>
      <button onclick="share('${p.title}')">Share</button>
    `;

    container.appendChild(div);
  });
}

// 🛠️ PROJECTS
async function loadProjects() {
  const res = await fetch("projects.json");
  const projects = await res.json();

  const container = document.getElementById("projects");

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h2>${p.title}</h2>
      <p>${p.description}</p>
      <button onclick="share('${p.title}')">Share</button>
    `;

    container.appendChild(div);
  });
}

// 🔗 SHARE
function share(title) {
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    });
  } else {
    navigator.clipboard.writeText(url);
    alert("Link skopiowany!");
  }
}