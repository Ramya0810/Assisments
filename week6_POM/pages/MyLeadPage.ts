import {Page,Locator} from "@playwright/test"
export class LeadPage{

    page:Page;
    companyNameField:Locator;
    firstnameField:Locator;
    lastNameField:Locator;
    clickcreateleadbutton:Locator;

    constructor(page:Page){
this.page=page;
this.companyNameField=this.page.locator("//input[@id='createLeadForm_companyName']");
this.firstnameField=this.page.locator("//input[@id='createLeadForm_firstName']");
this.lastNameField=this.page.locator("//input[@id='createLeadForm_lastName']");
this.clickcreateleadbutton=this.page.getByRole("button",{name:"Create Lead"});

    }

    async LeadDetails(companyName:string,firstName:string,LastName:string){
await this.companyNameField.fill(companyName);
await this.firstnameField.fill(firstName);
await this.lastNameField.fill(LastName);
await this.clickcreateleadbutton.click();
    }
}

