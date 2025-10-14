// =====================================================
// FabricCrafts Main JS
// Author: Reatha Thorn
// =====================================================

// Add current year to footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Toggle mobile menu
const menuBtn = document.getElementById('menu');
const navLinks = document.querySelector('nav ul');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// Load products dynamically
const productList = document.getElementById('product-list');

if (productList) {
  // Fetch products from local JSON
  fetch('../data/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(products => {
      products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
          <img src="../images/${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: ${product.price}</p>
        `;
        productList.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Error loading products:', error);
      productList.innerHTML = '<p>Failed to load products. Please try again later.</p>';
    });
}
