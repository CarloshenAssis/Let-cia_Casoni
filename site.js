const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '×' : '☰';
  });
}

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    menu?.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    if (toggle) toggle.textContent = '☰';
  });
});

const quotes = [
  {
    text: 'A nutri Letícia Casoni é maravilhosa. Por sua competência e profissionalismo, estou resgatando minha saúde e qualidade de vida.',
    author: 'Viviane Costa · Avaliação Google'
  },
  {
    text: 'Estou me sentindo muito bem com o tratamento. A glicose abaixou bastante fazendo corretamente a alimentação sugerida pela Letícia.',
    author: 'Maria Benedita · Avaliação Google'
  },
  {
    text: 'Agradeço à nutricionista Letícia pelo carinho e atenção. Ela me ajudou muito e recomendo o trabalho dela.',
    author: 'Joelma Lemes · Avaliação Google'
  }
];

let quoteIndex = 0;
const quoteText = document.querySelector('[data-quote]');
const quoteAuthor = document.querySelector('[data-quote-author]');

function showQuote(index) {
  if (!quoteText || !quoteAuthor) return;
  quoteIndex = (index + quotes.length) % quotes.length;
  quoteText.textContent = `“${quotes[quoteIndex].text}”`;
  quoteAuthor.textContent = quotes[quoteIndex].author;
}

document.querySelector('[data-prev-quote]')?.addEventListener('click', () => showQuote(quoteIndex - 1));
document.querySelector('[data-next-quote]')?.addEventListener('click', () => showQuote(quoteIndex + 1));

const contactForm = document.querySelector('#contact-form');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get('nome') || '';
  const interest = data.get('interesse') || '';
  const message = data.get('mensagem') || '';
  const text = `Olá, Letícia! Meu nome é ${name}. Tenho interesse em ${interest}. ${message}`;
  window.open(`https://wa.me/5512997936153?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
});

document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
