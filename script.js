const productsData = [
    { id: 1, name: 'Laptop', category: 'electronics', price: 80, image: 'laptop.jpg' },
    { id: 2, name: 'T-Shirt', category: 'clothing', price: 20, image: 'tshirt.jpg' },
    { id: 3, name: 'JavaScript Book', category: 'books', price: 30, image: 'jsbook.jpg' },
    { id: 4, name: 'Smartphone', category: 'electronics', price: 60, image: 'smartphone.jpg' },
    { id: 5, name: 'Jeans', category: 'clothing', price: 40, image: 'jeans.jpg' },
    { id: 6, name: 'Python Book', category: 'books', price: 25, image: 'pythonbook.jpg' },
    //... add more products
];

const productsDiv = document.getElementById('products');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const priceValue = document.getElementById('priceValue');

function renderProducts(products) {
    productsDiv.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        </div>
    `).join('');
}

function filterProducts() {
    let filteredProducts = productsData;

    const searchTerm = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
    const maxPrice = parseInt(priceFilter.value);

    filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm) &&
        (category === 'all' || product.category === category) &&
        product.price <= maxPrice
    );

    renderProducts(filteredProducts);
}

searchInput.addEventListener('input', filterProducts);
categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('input', () => {
    priceValue.textContent = `Price: $${priceFilter.value}`;
    filterProducts();
});

renderProducts(productsData); // Initial render