import { BasePage } from "./Abstract_class";

class LoginPage extends BasePage {
   open(url: string): void {
    console.log(`Navigating to login page: ${url}`);
  }

   getTitle(): string {
    return "Login Page - OrangeHRM";
  }

   isElementVisible(locator: string): boolean {
    console.log(`Element ${locator} is visible: true`);
    return true;
  }

  /** Simulate submitting login credentials. */
  login(username: string, password: string): void {
    console.log(`Performing login with username: ${username}, password: ${password}`);
  }
}

let loginPageobj = new LoginPage("LoginPage");
loginPageobj.logPageInfo();
loginPageobj.open("https://opensource-demo.orangehrmlive.com/");
console.log(loginPageobj.getTitle());
loginPageobj.isElementVisible("#username");
loginPageobj.login("Admin", "admin123");
