export const orders = JSON.parse(localStorage.getItem('orders')) || [];

function addOrder(order) {
  orders.unshift(order);
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

