import{test,expect}from "@playwright/test"

test("Checkbox",async({page})=>
{

await page.goto("https://leafground.com/checkbox.xhtml");

 await page
  .locator("//h5[text()='Basic Checkbox']/following-sibling::div//div[contains(@class,'ui-chkbox-box')]")
  .click();
  await expect(page.getByRole("checkbox", { name: "Basic" })).toBeChecked();
 await page
  .locator("//h5[text()='Notification']/following-sibling::div//div[contains(@class,'ui-chkbox-box')]")
  .click();

  await expect(page.locator("//span[text()='Checked']")).toContainText("Checked");
await page.
locator("(//h5[text()='Choose your favorite language(s)']/following-sibling::div//div[contains(@class,'ui-chkbox-box')])[2]")
.click();

await page.locator("(//h5[text()='Choose your favorite language(s)']/following-sibling::div//div[contains(@class,'ui-chkbox-box')])[3]")
.click();

await page.locator("(//h5[text()='Choose your favorite language(s)']/following-sibling::div//div[contains(@class,'ui-chkbox-box')])[1]")
.click();

await page.locator("//h5[text()='Tri State Checkbox']/following-sibling::div//div[contains(@class,'ui-chkbox-box')]")
    .click();
await page.locator("//h5[text()='Toggle Switch']/following-sibling::div").click();

await expect(page.locator("//span[text()='Checked']")).toContainText("Checked");

await expect(page.locator("//h5[text()='Verify if check box is disabled']/following-sibling::div//input[@aria-disabled='true']"))
.toBeDisabled();
await page.locator("//h5[text()='Select Multiple']/following-sibling::div//ul").click();

await page.locator("//label[text()='Miami']/ preceding-sibling::div//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']").click();

await page.locator("//label[text()='Berlin']/ preceding-sibling::div//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']").click();

await page.locator("//label[text()='Rome']/ preceding-sibling::div//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default']").click();

await page.locator("//span[@class='ui-icon ui-icon-circle-close']/parent::a").click();
  await page.waitForTimeout(5000);
});
