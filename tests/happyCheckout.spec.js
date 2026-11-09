const { test } = require('@playwright/test');
const { PageManager } = require('../objectRepository/PageManager');
const { USERS } = require('../test-data/users');
const { PRODUCTS } = require('../test-data/products');
const { CUSTOMER } = require('../test-data/customer');
const { getExpectedTotals } = require('../utils/orderTotals');

/**
 * End-to-end checkout test for the eCommerce site.
 * User can complete checkout flow (E2E)
 * Validates the full purchase flow from login to order completion.
 */
test('User can complete checkout flow', async ({ page }) => {
  const pages = new PageManager(page);
  const items = [PRODUCTS.backpack, PRODUCTS.bikeLight];

  await test.step('Log in as a standard user', async () => {
    await pages.loginPage.navigateToLoginPage();
    await pages.loginPage.loginAs(USERS.standard);
    await pages.loginPage.assertThatLoginWasSuccessful();
  });

  await test.step('Add two items to the cart', async () => {
    await pages.inventoryPage.addItemsToCart(items);
    await pages.inventoryPage.assertThatCartBadgeShows(items.length);
  });

  await test.step('Review the cart', async () => {
    await pages.inventoryPage.openTheCart();
    await pages.cartPage.assertThatCartContains(items);
  });

  await test.step('Input the shipping details', async () => {
    await pages.cartPage.proceedToCheckout();
    await pages.shippingDetailsPage.inputShippingDetails(CUSTOMER);
  });

  await test.step('Check the order totals', async () => {
    await pages.orderOverviewPage.assertThatOrderTotalsAre(getExpectedTotals(items));
  });

  await test.step('Place the order', async () => {
    await pages.orderOverviewPage.placeTheOrder();
    await pages.orderCompletedPage.assertThatOrderWasCreatedSuccessfully();
  });
});
