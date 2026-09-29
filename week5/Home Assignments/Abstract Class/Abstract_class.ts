
export abstract class BasePage implements IPageActions {
 constructor(public readonly pageName: string) {}
  logPageInfo(): void {
    console.log(`Page: ${this.pageName}`);
  }

  abstract open(url: string): void;
  abstract getTitle(): string;
  abstract isElementVisible(locator: string): boolean;
}