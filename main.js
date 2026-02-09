// Język domyślny
let lang = localStorage.getItem('lang') || 'pl';

// Toggle języka
document.getElementById('lang-toggle').addEventListener('click', () => {
  lang = (lang === 'pl') ? 'en' : 'pl';
  localStorage.setItem('lang', lang);
  location.reload();
});

// Funkcje pomocnicze
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return lang === 'pl'
    ? date.toLocaleDateString('pl-PL')
    : date.toLocaleDateString('en-US', {month:'short', day:'numeric', year:'numeric'});
}
