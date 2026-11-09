# Saucedemo E-commerce (Playwright, JavaScript)

End-to-end tests for https://www.saucedemo.com covering the checkout flow, login validation and checkout validation.

## Setup
```
npm install
npx playwright install chromium
cp .env.example .env
```

## Run
```
npm test              # headless
npm run test:headed   # watch the browser
npm run report        # open the last HTML report
```
Run one file:
```
npx playwright test tests/happyCheckout.spec.js --headed
```

## Structure
```
objectRepository/   page objects, one class per page
  PageManager.js    single entry point for all page objects
selectors/          all locators in one file
test-data/          users, products and customer details
utils/              order totals calculation
tests/              spec files
.github/workflows/  GitHub Actions pipeline
```

## Notes
- `BASE_URL` in `.env` points the suite at another environment without touching the code.
- Locally the browser runs with `slowMo` and full video so the flow is easy to follow. On CI both are turned off, and video is kept only for failures.
- Two workers, since saucedemo is a shared public site.
