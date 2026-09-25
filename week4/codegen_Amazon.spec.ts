import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByRole('searchbox', { name: 'Search Amazon' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon' }).fill('dell laptop');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.locator('body').press('ArrowDown');

  await page.getByRole('link', { name: '16 Touchscreen Laptop DC16251' }).click();
  await page.getByRole('button', { name: 'Add to cart', exact: true }).click();
  await page.locator('#sw-gtc').getByRole('link', { name: 'Go to Cart' }).click();
  await expect(page.getByRole('list', { name: 'Shopping Cart' })).toContainText('110,902.');

  await page.waitForTimeout(10000);
});