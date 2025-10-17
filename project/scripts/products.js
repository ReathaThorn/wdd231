fetch('data/products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.querySelector('.product-list');
    products.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => console.error('Error loading products:', error));
