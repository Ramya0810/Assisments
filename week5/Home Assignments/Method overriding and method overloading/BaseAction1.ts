export class BaseActions1 {

  click(locator: string): void;
  click(locator: string, description: string): void;
  click(locator: string, _description?: string): void {
    console.log("BaseActions: Clicked");
  }
}