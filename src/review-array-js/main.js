//1 tao mang  bang ngoac vuong, hoac constructor
const traiCay = ["cam", "xoai", "nho", "tao", "tao"];
console.log(typeof traiCay);
console.log(traiCay);

//truy cap cao phan tu
console.log(traiCay[0]);
console.log(traiCay[1]);
console.log(traiCay[2]);

//2. mang long nhau
const mang = [1, "hello", true, null, undefined, [1, 2, 3]];

//2.1 truy cap mang long nhau
console.log(mang[5][0]);
console.log(mang[5][1]);

//3. mot so phuong thuc thuong dung
//3.1 push(): them phan tu vao cuoi mang
traiCay.push("dua");
console.log(traiCay);

//3.2 map() :(map se duyet qua tung phan tu cua mang) tao mang moi tu mang cu
const so = [1, 2, 3, 4, 5];
console.log(so);
const so2 = so.map((item) => item * 2);
console.log(so2)

//bien doi phan tu cua mang thanh doi tuong moi
const so3 = so.map((item) => ({ so: item }))
console.log(so3)

//3.3 findIndex
const kq = traiCay.findIndex((item) => {
    return item === "tao"
})
console.log(kq)

const bienDoiMang = traiCay.map((item) => (item + "!"))
console.log(bienDoiMang)