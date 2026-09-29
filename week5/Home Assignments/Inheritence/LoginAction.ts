import { BaseAction } from "./BaseAction";
class LoginAction extends BaseAction{

    login(username:string,password:string,loginButton:string){

        console.log("UserName"+username,"PassWord"+password)
    }





}
let loginOptions=new LoginAction();
 
loginOptions.openUrl("https://opensource-demo.orangehrmlive.com/");
loginOptions.click("ClickButton Locator");
loginOptions.login("Admin","admin123","login button locator")