import { BaseAction } from "./BaseAction";

class DashBoardAction extends BaseAction {
    

    verifyDashboard(welcomeTextLocator:string){

    }
}

let DashBoardActionObj=new DashBoardAction();

DashBoardActionObj.getText("TextLocator")
DashBoardActionObj.verifyDashboard("welcometextLocator")
