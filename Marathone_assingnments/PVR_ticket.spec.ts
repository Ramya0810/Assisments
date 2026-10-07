import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
    //load URL
  await page.goto('https://www.pvrcinemas.com/');
  //click location
   await page.locator("//div[@class='show-desktop-view']/div").first().click();
   //type chennai
    await page.getByRole("combobox",{name:"Cities"}).fill("chennai")
//select chennai
  await page.getByRole('option', { name: 'Chennai' }).click();
  //select movie
  await page.locator('span').filter({ hasText: 'Select Movie' }).click();
  await page.getByRole('listbox').getByText('HANUMAN ANSH').click();
  //select date
  await page.locator('li').filter({ hasText: 'Tomorrow, 2 Oct' }).click();
  //select cinema location
  await page.getByText('INOX Luxe Phoenix Market City').click();
  //select time
  await page.getByText('3:15 PM').click();
  //clcik book
  await page.getByRole('button', { name: 'Submit' }).click();
  //click accept
  await page.getByRole('button', { name: 'Accept' }).click();
  //select seat
  await page.locator("//span[text()='4']").first().click();
  //clcik proceed
  await page.getByRole('button', { name: 'Proceed' }).click();
  //verify the total amount
  await expect(page.getByText('75.95',{exact:true})).toContainText('75.95');
  //clcik continue
  await page.getByRole('button', { name: 'Continue' }).click();
  //verify title
await expect(page).toHaveTitle('PVR Cinemas');

await page.waitForTimeout(5000)
});