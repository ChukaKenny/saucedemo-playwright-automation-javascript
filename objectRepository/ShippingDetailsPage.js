/**
 * Page object for the Shipping Details Page.
 * Handles the customer information step of the checkout.
 */

const { expect } = require('@playwright/test');
const selector = require('../selectors/saucedemoSelectors.js');

class ShippingDetailsPage {

  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator(selector.ShippingDetailsPage.firstNameInput);
    this.lastNameInput = page.locator(selector.ShippingDetailsPage.lastNameInput);
    this.postalCodeInput = page.locator(selector.ShippingDetailsPage.postalCodeInput);
    this.continueButton = page.locator(selector.ShippingDetailsPage.continueButton);
    this.errorMessage = page.locator(selector.ShippingDetailsPage.errorMessage);
  }

  //Fills in the customer details and clicks continue. Empty values are filled as empty.
  async inputShippingDetails(customer) {
    await this.firstNameInput.fill(customer.firstName);
    await this.lastNameInput.fill(customer.lastName);
    await this.postalCodeInput.fill(customer.postalCode);
    await this.continueButton.click();
  }

  async assertThatShippingErrorIs(message) {
    await expect(this.errorMessage).toHaveText(message);
    await expect(this.page).toHaveURL(/checkout-step-one\.html/);
  }
}

module.exports = { ShippingDetailsPage };
