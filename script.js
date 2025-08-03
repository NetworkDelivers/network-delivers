let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: ₹${total}`;
}

document.getElementById("submitDelivery").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const location = document.getElementById("location").value;

  if (name && address && location) {
    alert("Delivery info submitted successfully!");
    console.log("Delivery Info:", { name, address, location });
  } else {
    alert("Please fill out all fields.");
  }
});

// Optional: Geolocation Auto Fill
window.onload = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        document.getElementById("location").value =
          `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`;
      },
      err => {
        console.warn("Geolocation permission denied.");
      }
    );
  }
};
