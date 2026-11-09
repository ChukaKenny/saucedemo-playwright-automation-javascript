const { test } = require('@playwright/test');
const { PageManager } = require('../objectRepository/PageManager');
const { USERS } = require('../test-data/users');
const { PRODUCTS } = require('../test-data/products');
const { CUSTOMER } = require('../test-data/customer');

/**
 * Checkout validation tests.
 * User cannot move past the shipping details step with a missing field.
 */
const missingFieldCases = [
  { field: 'first name', customer: { ...CUSTOMER, firstName: '' }, message: 'Error: First Name is required' },
  { field: 'last name', customer: { ...CUSTOMER, lastName: '' }, message: 'Error: Last Name is required' },
  { field: 'postal code', customer: { ...CUSTOMER, postalCode: '' }, message: 'Error: Postal Code is required' },
];

for (const { field, customer, message } of missingFieldCases) {
  test(`User cannot continue checkout without a ${field}`, async ({ page }) => {
    const pages = new PageManager(page);

    await test.step('Log in and add an item to the cart', async () => {
      await pages.loginPage.navigateToLoginPage();
      await pages.loginPage.loginAs(USERS.standard);
      await pages.inventoryPage.addItemsToCart([PRODUCTS.backpack]);
      await pages.inventoryPage.openTheCart();
    });

    await test.step('Input the shipping details with a missing field', async () => {
      await pages.cartPage.proceedToCheckout();
      await pages.shippingDetailsPage.inputShippingDetails(customer);
    });

    await test.step('Check the validation error', async () => {
      await pages.shippingDetailsPage.assertThatShippingErrorIs(message);
    });
  });
}
