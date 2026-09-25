import { test } from "@playwright/test";
import path from "path";


test("Fileupload",async({page})=>{

await page.goto("https://demoqa.com/upload-download");

await page.getByRole("button",{name:"Choose file"}).setInputFiles(
    path.join(__dirname, "../../tests/Data/Playwright.png"));



})