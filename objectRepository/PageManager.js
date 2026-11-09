const { LoginPage } = require("./LoginPage");
const { InventoryPage } = require("./InventoryPage");
const { CartPage } = require("./CartPage");
const { ShippingDetailsPage } = require("./ShippingDetailsPage");
const { OrderOverviewPage } = require("./OrderOverviewPage");
const { OrderCompletedPage } = require("./OrderCompletedPage");

/**
 * Manages all page objects for the test suite.
 * Provides a single entry point for accessing page actions.
 */
class PageManager {

  constructor(page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
    this.cartPage = new CartPage(page);
    this.shippingDetailsPage = new ShippingDetailsPage(page);
    this.orderOverviewPage = new OrderOverviewPage(page);
    this.orderCompletedPage = new OrderCompletedPage(page);
  }
}

module.exports = { PageManager };
