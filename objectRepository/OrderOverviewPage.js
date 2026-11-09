/**
 * Page object for the Order Overview Page.
 * Handles the order summary check and placing the order.
 */

const { expect } = require('@playwright/test');
const selector = require('../selectors/saucedemoSelectors.js');

class OrderOverviewPage {

  constructor(page) {
    this.page = page;
    this.itemTotal = page.locator(selector.OrderOverviewPage.itemTotal);
    this.tax = page.locator(selector.OrderOverviewPage.tax);
    this.total = page.locator(selector.OrderOverviewPage.total);
    this.finishButton = page.locator(selector.OrderOverviewPage.finishButton);
  }

  //Soft assertions so one wrong figure does not hide the others.
  async assertThatOrderTotalsAre(totals) {
    await expect(this.page).toHaveURL(/checkout-step-two\.html/);
    await expect.soft(this.itemTotal).toHaveText(totals.itemTotal);
    await expect.soft(this.tax).toHaveText(totals.tax);
    await expect.soft(this.total).toHaveText(totals.total);
  }

  async placeTheOrder() {
    await this.finishButton.click();
  }
}

module.exports = { OrderOverviewPage };
