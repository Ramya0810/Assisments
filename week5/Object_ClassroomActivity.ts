let empDetails:{

    empId:number,
    empName:string,
    department?:string,
    isActive?:boolean,
    salary?:number,
    location?:string
}={
    empId:4321,
    empName:"Ramya",
    department:"testing",
    isActive:true,
    salary:700000

}
console.log(empDetails.empId)
console.log(empDetails.empName)
console.log(empDetails.department)
console.log(empDetails.isActive)
console.log(empDetails.salary)

    empDetails.salary=100000;
    empDetails.isActive=false;
    empDetails.location="Chennai";
    delete empDetails.department;

console.log(empDetails.empId)
console.log(empDetails.empName)
console.log(empDetails.department)
console.log(empDetails.isActive)
console.log(empDetails.salary)
console.log(empDetails.location)
