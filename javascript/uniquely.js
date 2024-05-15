const clothingItems = [
    { id: 1, name: 'Acid Wash Oversize T-Shirt ', price: 35 },
    { id: 2, name: 'Acid Wash Oversize Long Sleeve T-Shirt ', price: 35 },
    { id: 3, name: 'Vintage Wash Frayed Fleece Hoodie', price: 55 },
    { id: 4, name: 'Vintage Wash Frayed T-Shirt', price: 40 },
];

const clothingItemsContainer = document.getElementById('clothing-items');
const cartContainer = document.getElementById('cart');
const cartItemsContainer = document.getElementById('cart-items');
const viewCartBtn = document.getElementById('view-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');

// Display clothing items
function displayClothingItems() {
    clothingItemsContainer.innerHTML = '';
    clothingItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('clothing-item');
        itemElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        clothingItemsContainer.appendChild(itemElement);
    });
}

// Add item to cart
function addToCart(itemId) {
    const selectedItem = clothingItems.find(item => item.id === itemId);
    const cartItem = document.createElement('li');
    cartItem.textContent = `${selectedItem.name} - $${selectedItem.price}`;
    cartItemsContainer.appendChild(cartItem);
}

// Show/hide cart
viewCartBtn.addEventListener('click', () => {
    cartContainer.classList.toggle('hidden');
});

// Checkout
checkoutBtn.addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cartItemsContainer.innerHTML = '';
});

// Display initial clothing items
displayClothingItems();