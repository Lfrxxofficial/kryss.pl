const postSection = document.getElementById('post');
const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

fetch('blog.json')
  .then(res => res.json())
  .then(data => {
    const post = data.find(p => p.id === postId);
    if(!post) {
      postSection.innerHTML = '<p>Post not found / Wpis nie istnieje.</p>';
      return;
    }
    postSection.innerHTML = `
      <h1>${post.title[lang]}</h1>
      <p>${post.author} — ${formatDate(post.date)}</p>
      <div>${post.content[lang]}</div>
    `;
  });
