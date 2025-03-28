import faker from 'faker';

let cartItems = [];

for (let i = 0; i < 5; i++) {
    cartItems.push({
        id: i,
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price()),
        image: `https://picsum.photos/200?random=${i}`, // Use Picsum to generate random images
    });
}

const totalProducts = cartItems.length;
const totalCost = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
const freeShippingThreshold = 50; // Example threshold for free shipping
const progress = Math.min((totalCost / freeShippingThreshold) * 100, 100).toFixed(2);

const cartText = cartItems
    .map((item) => `<div class="carts-item" key=${item.id}>
        <img src="${item.image}" alt="${item.name}" />
        ${item.name} - $${item.price}
    </div>`)
    .join('');

document.querySelector('#carts').innerHTML = cartText;

document.querySelector('#carts-summary').innerHTML = `
    <div class="progress-bar">
        <div class="progress" style="width: ${progress}%;"></div>
    </div>
    <p>${progress >= 100 ? 'You qualify for free shipping!' : `Spend $${(freeShippingThreshold - totalCost).toFixed(2)} more for free shipping.`}</p>
    <p>Subtotal (${totalProducts} products): <strong>$${totalCost}</strong></p>
    <label><input type="checkbox"> This order is a gift</label>
    <button class="checkout-button">Proceed to Checkout</button>
`;
