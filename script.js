// Example product array (you can link it to Firebase or database later)
const products = [
  { name: "Smartwatch", image: "https://via.placeholder.com/250x180?text=Smartwatch" },
  { name: "Gaming Headset", image: "https://via.placeholder.com/250x180?text=Headset" },
  { name: "Wireless Charger", image: "https://via.placeholder.com/250x180?text=Charger" },
  { name: "Bluetooth Speaker", image: "https://via.placeholder.com/250x180?text=Speaker" },
  { name: "Fitness Tracker", image: "https://via.placeholder.com/250x180?text=Tracker" },
];

// Add products dynamically
const container = document.querySelector('.products-container');
products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('product-card');
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <button onclick="addToCart('${product.name}')">Add to Cart</button>
  `;
  container.appendChild(card);
});

// Cart functionality
let cartItems = [];

function addToCart(productName) {
  cartItems.push(productName);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartList.appendChild(li);
  });
}

// Geolocation (for delivery tracking)
function detectLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, showError);
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

function showLocation(position) {
  alert(`Location Detected:\nLatitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`);
}

function showError(error) {
  alert("Unable to retrieve location.");
}
