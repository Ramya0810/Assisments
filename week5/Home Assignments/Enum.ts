
enum Days {
Monday = 1,
Tuesday = 2,
Wednesday = 3,
Thursday = 4,
Friday = 5,
Saturday = 6,
Sunday = 7,
}


enum Browsers {
Chrome = "chrome",
Firefox = "firefox",
Edge = "edge",
}

enum Responses {
Success = 200,
Error = "ERROR",
}

const enum Environments {
QA = "https://qa.testleaf.com",
PROD = "https://prod.testleaf.com",
}


console.log("Days.Monday:",Days.Monday);
console.log("Days[3]:",Days[3]);
console.log("Browsers.Chrome:", Browsers.Chrome);
console.log("Browsers.Firefox:", Browsers.Firefox);


console.log("Response.Success:", Responses.Success);
console.log("Response.Error:", Responses.Error);


const selectedDay: Days = Days.Monday;
const selectedBrowser: Browsers = Browsers.Chrome;
const currentEnvironment: Environments = Environments.QA;

console.log("Selected Day:", Days[selectedDay]);
console.log("Selected Browser:", selectedBrowser);
console.log("Current Environment:", currentEnvironment);

console.log("All browsers:", Browsers.Chrome, Browsers.Firefox, Browsers.Edge);
console.log("AllDays")
for (let i = 1; i <= 7; i++) {
  console.log(i, Days[i]);
}
