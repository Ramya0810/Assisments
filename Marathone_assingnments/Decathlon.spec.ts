import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    //Launch browser and navigate to Decathlon website https://www.decathlon.in/
  await page.goto('https://www.decathlon.in/');
  //Verify URL using Playwright assertions
    await expect.soft(page).toHaveURL("https://www.decathlon.in/");
//Verify the Decathlon homepage is displayed
  await expect.soft(page.locator('[data-test-id="header-desktop:logo-link"]')).toBeVisible();
//Verify if search box is enabled
  await page.locator('[data-test-id="search-input-desktop:form"]').click();

  await expect.soft(page.getByRole("searchbox",{name:"Search for 60"})).toBeEnabled()

  //Click on the search Box
await page.getByRole("searchbox",{name:"Search for 60"}).click();


  //Enter the product name “Shoes”

  await page.locator('[data-test-id="search-input-desktop:container"]').fill('shoes');
  //Press Enter or select a suggestion from the dropdown

  await page.locator('[data-test-id="search-input-desktop:container"]').press('Enter');
await expect(page).toHaveTitle("Search | shoes");


//Click on the Sport filter dropdown

  await page.locator('[data-test-id="filter-sidebar-desktop:container-13"]').getByRole('button', { name: 'Sport' }).click();
  //Select Running from the Sport dropdown
  await page.getByRole("checkbox",{name:"Running 29"}).click();


  //Click on the Gender filter dropdown
 await page.locator('[data-test-id="filter-sidebar-desktop:container-13"]').getByRole('button', { name: 'Gender' }).click();
//Select Men

  await page.locator("//input[@data-test-id='filter-checkbox-gender_id_en-MEN']").click();

//Click on the Size filter dropdown
  await page.getByRole('button', { name: 'Size' }).click();
//Select size UK 10.5
  await page.locator('[data-test-id="filter-checkbox-indian_size-10.5"]').check();
  //From the filtered results, click on the first available product
  await page.locator("//span[text()='Decathlon']/parent::div").first().click();
 //On the product details page, select Size – UK 10
 await page.getByRole("button",{name:"Select size 10.5"}).click()

 //Click on Add to cart button and Verify that the product is successfully added to the cart
await page.getByText("Add to cart",{exact:true}).click();

await page.waitForTimeout(7000)

});