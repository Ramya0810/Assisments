import{test,expect}from "@playwright/test"

test("Window Handling",async({page,context})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");

    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");

    await page.getByRole("button",{name:"Login"}).click();

    await page.getByRole("link",{name:"CRM/SFA"}).click();

    await page.getByRole("link",{name:"Contacts"}).click();

    await page.getByRole("link",{name:"Merge Contacts"}).click();

    const newPage1Promise = context.waitForEvent("page");

    await page.locator("//img[@src='/images/fieldlookup.gif']/parent::a").first().click();

    const newPage1 = await newPage1Promise;

    await newPage1.waitForLoadState();

    await newPage1.locator("//a[text()='DemoCustomer']").click();

    const newPage2Promise = context.waitForEvent("page");

    await page.locator("//img[@src='/images/fieldlookup.gif']/parent::a").last().click();

    const newPage2 = await newPage2Promise;

    await newPage2.waitForLoadState();

    await newPage2.locator("//a[text()='DemoLBCust']").click();


    page.on("dialog", async (dia) => {
       if (dia.type() === "confirm") {
            await dia.accept();
        }

        else {
            await dia.dismiss();
        }
    })
 await page.locator("//a[@class='buttonDangerous']").click();
await expect(page).toHaveTitle('Merge Contacts | opentaps CR');
    await page.waitForTimeout(6000);
})