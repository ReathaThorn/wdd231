// scripts/data.js
export async function getProducts() {
  try {
    const res = await fetch('../data/products.json');
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();
    return data.products;
  } catch (err) {
    console.error('getProducts error:', err);
    return [];
  }
}
