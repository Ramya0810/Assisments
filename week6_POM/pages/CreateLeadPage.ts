import {Page,Locator} from "@playwright/test"
export class CreateLeadPage{

    page:Page;
    createleadlink:Locator;
    

    constructor(page:Page){
this.page=page;
this.createleadlink=this.page.getByRole("link",{name:"Create Lead"})
    }
    async clickleadlink(){
     await this.createleadlink.click();
    }
}

