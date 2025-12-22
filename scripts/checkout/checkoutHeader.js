export function renderCheckoutHeader(cartItemsTotal) {

  const html = `
    <a class="return-to-home-link js-total-items"
      href="amazon.html">${cartItemsTotal} items</a>
  `;

  document.querySelector(".js-total-items").innerHTML = html;
  
};
