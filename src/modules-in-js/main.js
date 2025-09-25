// //1. lay 1 phan tu
// import { myVar } from "./named.js";
// console.log(myVar)

// //2. lay 1 so phan tu can thiet
// import { myFunction, myVar } from "./named.js";
// console.log(myVar);
// myFunction;
//3. lay tat ca
import * as name from "./named.js"
console.log(name.myVar)
name.myFunction();
console.log(name.df2); //undefined

import df2, { myVar, myFunction } from "./named.js";
console.log(df2);

//4. import default
// import df from "./default.js";
// console.log(df)
import total from "./default.js";
console.log(total(4, 1));

//5. doi ten import

//5.1 import default
import b from "./default.js";
console.log(b(8, 5));
//5.2 import named: dat ten moi voi as
import { myVar as tenMoi } from "./named.js";
console.log(tenMoi);