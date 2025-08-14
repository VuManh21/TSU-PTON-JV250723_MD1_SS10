let math = Number(prompt('nhap diem mon toan cua ban '));
let physics = Number(prompt('nhap diem mon vat ly cua ban '));
let chemistry = Number(prompt('nhap diem mon hoa hoc cua ban '));

let tongdiem3mon = math + physics + chemistry;
let diemTb3mon = tongdiem3mon / 3;
console.log('diem trung binh 3 mon hoc la :' + diemTb3mon);
alert(`diem trung binh 3 mon hoc la :  ${diemTb3mon}`);
1