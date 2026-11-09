/**
 * Page object for the Inventory Page.
 * Handles adding and removing products and opening the cart.
 */

const { expect } = require('@playwright/test');
const selector = require('../selectors/saucedemoSelectors.js');

class InventoryPage {

  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator(selector.InventoryPage.inventoryItems);
    this.cartBadge = page.locator(selector.InventoryPage.cartBadge);
    this.cartLink = page.locator(selector.InventoryPage.cartLink);
  }

  //Adds every product in the list to the cart.
  async addItemsToCart(products) {
    for (const product of products) {
      await this.inventoryItems
        .filter({ hasText: product.name })
        .getByRole('button', { name: 'Add to cart' })
        .click();
    }
  }

  //Removes one product from the cart using its button on the inventory page.
  async removeItemFromCart(product) {
    await this.inventoryItems
      .filter({ hasText: product.name })
      .getByRole('button', { name: 'Remove' })
      .click();
  }

  async openTheCart() {
    await this.cartLink.click();
  }

  async assertThatCartBadgeShows(count) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}

module.exports = { InventoryPage };
