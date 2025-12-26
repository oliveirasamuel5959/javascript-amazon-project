import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {
  console.log('Page loaded');
}

loadPage().then(() => {
  console.log('Next step after page load');
})

new Promise((resolve) => {
  
})

renderOrderSummary();
renderPaymentSummary();
