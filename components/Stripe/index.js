var stripe = Stripe(
  "pk_test_51HDmCdDXFdSLUUcdOlxCDX6xW3LKz77WtornGCRsUvr7MrqZnZgx0LRqScE8pdBYZ73c6UWOpVhAFOpGjvw3OOLG00HZ23pqmt"
);

var checkoutButton = document.querySelector("#checkout-button");
checkoutButton.addEventListener("click", function () {
  stripe.redirectToCheckout({
    lineItems: [
      {
        price: "price_1HEAZRDXFdSLUUcdCiR2I1Dn",
        quantity: 1
      }
    ],
    mode: "payment",
    successUrl: "https://www.google.com/",
    cancelUrl: "https://www.jumia.com.ng/"
  });
});
