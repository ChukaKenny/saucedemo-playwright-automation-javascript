/**
 * Page object for the Order Completed Page.
 * Handles the final order confirmation check.
 */

const { expect } = require('@playwright/test');
const selector = require('../selectors/saucedemoSelectors.js');

class OrderCompletedPage {

  constructor(page) {
    this.page = page;
    this.completeHeader = page.locator(selector.OrderCompletedPage.completeHeader);
  }

  async assertThatOrderWasCreatedSuccessfully() {
    await expect(this.page).toHaveURL(/checkout-complete\.html/);
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
}

module.exports = { OrderCompletedPage };
