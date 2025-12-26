export const orders = [];

function addOrder(order) {
  orders.onShift(order);
}

function saveToLocalStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

