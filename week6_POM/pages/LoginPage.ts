import {Page,Locator} from "@playwright/test"
//import dotenv from 'dotenv';
//import path from 'path';
//import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename);
export class Loginpage{

    page:Page;
    userNameField:Locator;
    passwordField:Locator;
    loginButton:Locator;

    constructor(page:Page){
this.page=page;
this.userNameField=this.page.getByRole("textbox",{name:"Username"});
this.passwordField=this.page.getByRole("textbox",{name:"Password"});
this.loginButton=this.page.getByRole("button",{name:"Login"});

    }

    async login(username:string,password:string){
        //const result= dotenv.config({path:path.resolve(__dirname,"DATA/test.env")})
        //console.log(result);
        await this.page.goto(process.env.BASE_URL!);

await this.userNameField.fill(process.env.LEAFTAPS_USERNAME!);
await this.passwordField.fill(process.env.LEAFTAPS_PASSWORD!);
await this.loginButton.click();

    }
}