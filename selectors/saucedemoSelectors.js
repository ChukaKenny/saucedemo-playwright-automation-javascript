module.exports = {
  LoginPage: {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
    errorMessage: '[data-test="error"]',
  },
  InventoryPage: {
    pageTitle: '[data-test="title"]',
    inventoryItems: '.inventory_item',
    cartBadge: '[data-test="shopping-cart-badge"]',
    cartLink: '[data-test="shopping-cart-link"]',
  },
  CartPage: {
    pageTitle: '[data-test="title"]',
    cartItemNames: '[data-test="inventory-item-name"]',
    checkoutButton: '[data-test="checkout"]',
  },
  ShippingDetailsPage: {
    firstNameInput: '[data-test="firstName"]',
    lastNameInput: '[data-test="lastName"]',
    postalCodeInput: '[data-test="postalCode"]',
    continueButton: '[data-test="continue"]',
    errorMessage: '[data-test="error"]',
  },
  OrderOverviewPage: {
    itemTotal: '[data-test="subtotal-label"]',
    tax: '[data-test="tax-label"]',
    total: '[data-test="total-label"]',
    finishButton: '[data-test="finish"]',
  },
  OrderCompletedPage: {
    completeHeader: '[data-test="complete-header"]',
  },
};
