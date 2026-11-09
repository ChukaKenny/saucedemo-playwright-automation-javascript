/**
 * Page object for the Login Page.
 * Handles logging in and the login error checks.
 */

const { expect } = require('@playwright/test');
const selector = require('../selectors/saucedemoSelectors.js');

class LoginPage {

  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator(selector.LoginPage.usernameInput);
    this.passwordInput = page.locator(selector.LoginPage.passwordInput);
    this.loginButton = page.locator(selector.LoginPage.loginButton);
    this.errorMessage = page.locator(selector.LoginPage.errorMessage);
    this.productsTitle = page.locator(selector.InventoryPage.pageTitle);
  }

  //Opens the login page.
  async navigateToLoginPage() {
    await this.page.goto('/');
  }

  //Logs in with the username and password of the given user.
  async loginAs(user) {
    await this.usernameInput.fill(user.username);
    await this.passwordInput.fill(user.password);
    await this.loginButton.click();
  }

  async assertThatLoginWasSuccessful() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.productsTitle).toHaveText('Products');
  }

  async assertThatLoginFailedWith(message) {
    await expect(this.errorMessage).toHaveText(message);
    await expect(this.loginButton).toBeVisible();
  }
}

module.exports = { LoginPage };
