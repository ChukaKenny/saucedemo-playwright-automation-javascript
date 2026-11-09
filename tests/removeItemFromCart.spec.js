const { test } = require('@playwright/test');
const { PageManager } = require('../objectRepository/PageManager');
const { USERS } = require('../test-data/users');
const { PRODUCTS } = require('../test-data/products');

/**
 * User can remove an item from the cart.
 * The cart badge and the cart content must reflect the removal.
 */
test('User can remove an item from the cart', async ({ page }) => {
  const pages = new PageManager(page);

  await test.step('Log in and add two items to the cart', async () => {
    await pages.loginPage.navigateToLoginPage();
    await pages.loginPage.loginAs(USERS.standard);
    await pages.inventoryPage.addItemsToCart([PRODUCTS.backpack, PRODUCTS.boltTShirt]);
    await pages.inventoryPage.assertThatCartBadgeShows(2);
  });

  await test.step('Remove one item', async () => {
    await pages.inventoryPage.removeItemFromCart(PRODUCTS.backpack);
    await pages.inventoryPage.assertThatCartBadgeShows(1);
  });

  await test.step('Check the cart content', async () => {
    await pages.inventoryPage.openTheCart();
    await pages.cartPage.assertThatCartContains([PRODUCTS.boltTShirt]);
  });
});
