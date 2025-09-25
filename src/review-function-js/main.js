//khai bao ham function declaration
function xinChao() {
    console.log("xin chao ban");
}
xinChao();

function xinChao2(userName) {
    console.log("xin chao ban " + userName);
}

xinChao2("nanashi");
xinChao2("hung");
xinChao2();

function tichHaiSo(a = 1, b = 8) {
    return a * b;
}
let kq = tichHaiSo(4, 5);
console.log(kq);

let kq2 = tichHaiSo();
console.log(kq2);


function xinChao3(userName = "no name") {
    console.log("xin chao ban " + userName);
}
xinChao3("nanashiiiii");
//2. khai bao ham function expression
let tong = function (a, b) {
    return a + b;
}
console.log(tong(5, 6));

//3. arrow function
console.log("arrow function");
//3.1 voi truong hop tong quat, cu phap

let multiplyAndAddArrow = (c, d) => {
    let product = c * d;
    let sum = c + d;
    return product + sum;
};

let kq4 = multiplyAndAddArrow(4, 5)
console.log(kq4);
//3.2 khi than ham chi co 1 lenh duy nhat
let nhan = (a, b) => a * b;
let kq5 = nhan(4, 7)
console.log(kq5)

//3.3 khi tra ve 1 doi tuong
// let person = (ten, tuoi) => {
//     return { "ho va ten": ten, "huong tho": tuoi }
// };
let person = (ten, tuoi) => ({ "ho va ten": ten, "huong tho": tuoi });


console.log(person("Lan", 60))
