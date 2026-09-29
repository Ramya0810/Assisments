
export class BaseAction{
    pageName:string;
    locator:string;

  openUrl(url:string){
console.log("Open Url" +url)

  }
  click(locator:string){

console.log("Button Clicked"+locator)


  }

  getText(locator:string){
console.log("Got Text"+locator)

  }
    
}
