import { test } from "@playwright/test";
import path from "path";


test("Test to verify file upload", async ({ page }) => {


    await page.goto("https://blazorise.com/docs/components/file-picker");

    const fileUploadPromise = page.waitForEvent("filechooser");


    await page.locator("//span[text()='Choose files']").first().click();

    const fileUploadRef = await fileUploadPromise;


    await fileUploadRef.setFiles(path.join(__dirname, "../../tests/Data/Playwright.png"));

    await page.waitForTimeout(5000);
});