//gia su co 1 doi tuong don hang
const donHang = {
    maDonHang: 101,
    tienTe: "VND",
    tongTien: 50000,
}
const donHang2 = {
    maDonHang: 105,
    tienTe: "VND",
    tongTien: 560000,
}

//1. khong su dung destructuring
function xuLyDonHang(donHang) {
    const maDonHang = donHang.maDonHang;
    const tienTe = donHang.tienTe;
    const tongTien = donHang.tongTien;

    console.log(`Ma don hang: ${maDonHang}`);
    console.log(`Tien te: ${tienTe}`);
    console.log(`Tong tien: ${tongTien}`);
}
//goi hang
xuLyDonHang(donHang);
xuLyDonHang(donHang2)


//2. su dung destructuring

function xuLyDonHang2({ maDonHang, tienTe, tongTien }) {
    console.log(`Ma don hang: ${maDonHang}`);
    console.log(`Tien te: ${tienTe}`);
    console.log(`Tong tien: ${tongTien}`);
}
xuLyDonHang2(donHang2)

//3. su dung destructuring voi gia tri mac dinh 

function xuLyDonHang12({ maDonHang = 0, tienTe = "VND", tongTien = 0 }) {
    console.log(`Ma don hang: ${maDonHang}`);
    console.log(`Tien te: ${tienTe}`);
    console.log(`Tong tien: ${tongTien}`);
}
xuLyDonHang12({ maDonHang: 111 })

//4. su dung rest parameter
//tuong tu nhu luc truoc
function xuLyDonHang6({ maDonHang, ...rest }) {
    console.log(`Ma don hang: ${maDonHang}`);
    console.log(rest)
}
xuLyDonHang6({
    maDonHang: 103,
    tienTe: "USD",
    tongTien: 1000,
    khachHang: "nguyen van A",

})
