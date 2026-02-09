const blogList = document.getElementById('blog-list');
const sortSelect = document.getElementById('sort');

let posts = [];

fetch('blog.json')
  .then(res => res.json())
  .then(data => {
    posts = data;
    renderPosts();
  });

sortSelect.addEventListener('change', renderPosts);

function renderPosts() {
  const method = sortSelect.value;
  let sorted = [...posts];

  switch(method) {
    case 'a-z':
      sorted.sort((a,b) => a.title[lang].localeCompare(b.title[lang])); break;
    case 'z-a':
      sorted.sort((a,b) => b.title[lang].localeCompare(a.title[lang])); break;
    case 'newest':
      sorted.sort((a,b) => new Date(b.date) - new Date(a.date)); break;
    case 'oldest':
      sorted.sort((a,b) => new Date(a.date) - new Date(b.date)); break;
  }

  blogList.innerHTML = '';
  sorted.forEach(post => {
    const div = document.createElement('div');
    div.className = 'blog-card';
    div.innerHTML = `
      <h3>${post.title[lang]}</h3>
      <p>${post.author} — ${formatDate(post.date)}</p>
      <a href="blog-post.html?id=${post.id}">${lang === 'pl' ? 'Czytaj więcej' : 'Read more'}</a>
    `;
    blogList.appendChild(div);
  });
}
