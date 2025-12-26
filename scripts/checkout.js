import { loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {
  console.log('load page');

  await loadProductsFetch();

  return 'value2';
}

loadPage().then((value) => {
  console.log('Next step');
  console.log(value);
})

new Promise((resolve) => {
  
})

renderOrderSummary();
renderPaymentSummary();
