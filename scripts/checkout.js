import { loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {
  try {
    await loadProductsFetch();
  } catch (error) {
    console.error('Error loading products:');
  } 

  renderOrderSummary();
  renderPaymentSummary();

}

loadPage();

