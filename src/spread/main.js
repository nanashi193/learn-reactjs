//1. spread operator voi mang
// danh sach so thich hien tai
let soThich = ["doc sach", "nghe nhac"];

//so thich moi muon them vao
const soThichMoi = ["xem phim", "di choi"];

//cap nhat danh sach so thich
soThich = [...soThich, "abc", ...soThichMoi];
console.log("danh sach so thich sau khi them: ", soThich);

//2. spread operator voi object
//thong tin nguoi dung ban dau
let user = {
    id: 1,
    name: "nanashi",
    email: "nanashi@gmail.com",
};
const updates = {
    address: "123 duong ABC",
    role: "Admin",
};

//cap nhat thong tin nguoi dung
user = { ...user, ...updates }
console.log("danh sach sau khi cap nhat: ", user);
