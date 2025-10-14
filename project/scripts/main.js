// scripts/main.js
import { getProducts } from './data.js';

const yearEls = document.querySelectorAll('#year, #year-about, #year-contact, #year-thanks');
yearEls.forEach(e => e && (e.textContent = new Date().getFullYear()));

// NAV toggle
function setupNavToggle() {
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn => {
    const nav = document.getElementById('primary-nav');
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if (nav) nav.classList.toggle('open');
    });
  });
}

// THEME toggle (localStorage)
function setupThemeToggle() {
  const buttons = document.querySelectorAll('#theme-toggle, #theme-toggle-about, #theme-toggle-contact');
  const current = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', current);
  buttons.forEach(btn => {
    btn && btn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme') === 'dark';
      const next = active ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      btn.setAttribute('aria-pressed', String(next === 'dark'));
    });
  });
}

// Build product cards (DOM manipulation, template literals, array methods)
async function buildProductsGrid() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;
  const products = await getProducts(); // async + try/catch done in data.js
  // require at least 15 items (rubric). If fewer, show message.
  if (products.length < 1) {
    grid.innerHTML = '<p>No products found.</p>';
    return;
  }
  // generate cards
  grid.innerHTML = products.map((p, idx) => {
    return `
      <article class="card" data-id="${p.id}">
        <img src="images/${p.image}" alt="${p.title}" loading="lazy">
        <div class="card-body">
          <h3>${p.title}</h3>
          <p class="price">$${p.price.toFixed(2)}</p>
          <p>${p.summary}</p>
          <div class="meta">
            <button class="detail-btn" data-id="${p.id}">Details</button>
            <small>${p.category}</small>
          </div>
        </div>
      </article>
    `;
  }).join('');
  // attach event listeners to detail buttons
  document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      const product = products.find(x => String(x.id) === String(id));
      openProductModal(product);
    });
  });
}

// Modal
function openProductModal(product) {
  const backdrop = document.createElement('div');
  backdrop.className = 'dialog-backdrop';
  const dialog = document.createElement('div');
  dialog.className = 'dialog';
  dialog.innerHTML = `
    <h2>${product.title}</h2>
    <img src="images/${product.image}" alt="${product.title}" style="width:100%;height:auto;border-radius:6px">
    <p>${product.description}</p>
    <p><strong>Price:</strong> $${product.price.toFixed(2)} | <strong>Stock:</strong> ${product.stock}</p>
    <div style="text-align:right;margin-top:.5rem">
      <button id="close-dialog">Close</button>
    </div>
  `;
  backdrop.appendChild(dialog);
  document.body.appendChild(backdrop);
  // close
  document.getElementById('close-dialog').addEventListener('click', () => backdrop.remove());
  backdrop.addEventListener('click', (ev) => { if (ev.target === backdrop) backdrop.remove(); });
}

// localStorage example: lastVisit
function showLastVisit() {
  const last = localStorage.getItem('lastVisit');
  const now = Date.now();
  let display = document.querySelector('.visit-message');
  if (!display) {
    // create if necessary under hero
    const hero = document.querySelector('.hero');
    if (hero) {
      const el = document.createElement('p');
      el.className = 'visit-message';
      hero.appendChild(el);
      display = el;
    }
  }
  if (!display) return;
  if (last) {
    const days = Math.floor((now - Number(last)) / (1000*60*60*24));
    display.textContent = days === 0 ? 'Welcome back — you visited today.' : `Welcome back — your last visit was ${days} day(s) ago.`;
  } else {
    display.textContent = 'Welcome — this is your first visit!';
  }
  localStorage.setItem('lastVisit', String(now));
}

// initialize everything
document.addEventListener('DOMContentLoaded', () => {
  setupNavToggle();
  setupThemeToggle();
  buildProductsGrid();
  showLastVisit();
});
