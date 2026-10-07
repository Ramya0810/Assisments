import {test} from "@playwright/test"
import { Loginpage } from "../pages/LoginPage";
import { MyHomePage } from "../pages/MyHomePage";
import { WelcomePage } from "../pages/WelcomePage";
import { CreateLeadPage } from "../pages/CreateLeadPage";
import { LeadPage } from "../pages/MyLeadPage";
import loginData from "../../DataForLogin/loginData.json"
import fs from "fs"




test("Test to create a lead in leaftap",async({page})=>{
let loginobj=new Loginpage(page);
let welcomeobj=new WelcomePage(page);
let Myhomeobj=new MyHomePage(page);
let createLeadobj=new CreateLeadPage(page);
let leadobj=new LeadPage(page);


loginobj.login(loginData.username,loginData.password);

welcomeobj.clickcrm();
Myhomeobj.clicklead();
createLeadobj.clickleadlink();
leadobj.LeadDetails("testleaf","Ramya","Marimuthu")

await page.waitForTimeout(5000)



})

