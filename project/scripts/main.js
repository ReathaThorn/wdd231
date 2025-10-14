// scripts/main.js
import products from '../data/products.json' assert { type: 'json' };

document.addEventListener('DOMContentLoaded', () => {
    const cardsContainer = document.getElementById('product-cards');
    if (cardsContainer) {
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');

            card.innerHTML = `
                <img src="images/${product.image}" alt="${product.name}" loading="lazy">
                <h3>${product.name}</h3>
                <p>Price: $${product.price}</p>
                <p>${product.description}</p>
            `;

            cardsContainer.appendChild(card);
        });
    }

    // Hamburger toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
