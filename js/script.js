  const form = document.getElementById('orderForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const order = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      product: document.getElementById('product').value,
      quantity: document.getElementById('quantity').value,
      price: document.getElementById('price').value
    };

    localStorage.setItem('latestOrder', JSON.stringify(order));
    window.location.href = 'myorder.html';
  });