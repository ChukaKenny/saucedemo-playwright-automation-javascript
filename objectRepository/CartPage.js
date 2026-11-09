/**
 * Page object for the Cart Page.
 * Handles checking the cart content and starting the checkout.
 */

const { expect } = require('@playwright/test');
const selector = require('../selectors/saucedemoSelectors.js');

class CartPage {

  constructor(page) {
    this.page = page;
    this.pageTitle = page.locator(selector.CartPage.pageTitle);
    this.cartItemNames = page.locator(selector.CartPage.cartItemNames);
    this.checkoutButton = page.locator(selector.CartPage.checkoutButton);
  }

  async assertThatCartContains(products) {
    await expect(this.pageTitle).toHaveText('Your Cart');
    await expect(this.cartItemNames).toHaveText(products.map((product) => product.name));
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = { CartPage };
