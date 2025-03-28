import faker from 'faker';

let products = [];

for (let i = 0; i < 10; i++) {
    products.push({
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: `https://picsum.photos/200?random=${i}`, // Use Picsum to generate random images
    });
}

// Render products in the DOM
const productList = document.querySelector('#product-list');
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <img src="${product.image}" alt="${product.name}" />
    `;
    productList.appendChild(productDiv);
});
