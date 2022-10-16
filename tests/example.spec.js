// @ts-check
const { test, expect } = require('@playwright/test');

test('User List Found', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/User List/);



});