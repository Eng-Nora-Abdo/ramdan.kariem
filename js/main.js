  const orderResult = document.getElementById('orderResult');

  const order = JSON.parse(localStorage.getItem('latestOrder'));

  if(order) {
    orderResult.innerHTML = `
      <div class="card p-3">
        <h4>Order Details</h4>
        <p><strong>Name:</strong> ${order.name}</p>
        <p><strong>Phone:</strong> ${order.phone}</p>
        <p><strong>Address:</strong> ${order.address}</p>
        <p><strong>Product:</strong> ${order.product}</p>
        <p><strong>Quantity:</strong> ${order.quantity}</p>
        <p><strong>Price:</strong> $${order.price}</p>
      </div>
    `;
  } else {
    orderResult.innerHTML = "<p>No order found.</p>";
  }