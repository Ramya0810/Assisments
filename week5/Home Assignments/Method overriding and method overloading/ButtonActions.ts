import { BaseActions1 } from "./BaseAction1";
class ButtonActions extends BaseActions1 {
click(locator: string, description?: string){
    if (description !== undefined) {
      console.log("ButtonActions: Clicking on button");
    }

    super.click(locator);
  }

  clickAndVerifyText(locator: string, expectedText: string){
    console.log("ButtonActions: Clicking and verifying text");
  }
}
let buttonobj = new ButtonActions();
buttonobj.click("#submitBtn");
buttonobj.click("#submitBtn", "Submit Button");
buttonobj.clickAndVerifyText("#submitBtn", "Submit");