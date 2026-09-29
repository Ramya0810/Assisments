import { BaseActions1 } from "./BaseAction1";
class InputActions extends BaseActions1 {
  
   click(locator: string, description?: string){
    if (description !== undefined) {
      console.log("InputActions: Clicking on input field");
    }

    super.click(locator);
  }

  fill(locator: string, value: string) {
    console.log("InputActions: Entering text");
  }
}
let inputobj = new InputActions();
inputobj.click("username", "Username Field");
inputobj.fill("username", "Admin");