import { BasePage } from "./Abstract_class";
class DashboardPage extends BasePage {
   open(url: string): void {
    console.log(`Navigating to dashboard page: ${url}`);
  }

   getTitle(): string {
    return "Dashboard - OrangeHRM";
  }

   isElementVisible(locator: string): boolean {
    console.log(`Element ${locator} is visible: true`);
    return true;
  }
  verifyWelcomeMessage(): void {
    console.log("Dashboard welcome message is displayed successfully.");
  }
}
let dashboardPageobj = new DashboardPage("DashboardPage");
dashboardPageobj.logPageInfo();
dashboardPageobj.open("https://opensource-demo.orangehrmlive.com/");
console.log(`Title: ${dashboardPageobj.getTitle()}`);
dashboardPageobj.isElementVisible("#welcome");
dashboardPageobj.verifyWelcomeMessage();