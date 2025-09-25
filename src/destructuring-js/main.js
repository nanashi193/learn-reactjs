//1. Destructuring
const userName = ["toan", "ha", "vy"];
const user1 = userName[0];
const user2 = userName[1];
const user3 = userName[2];
console.log(user1, user2, user3);
//nhung neu dung destructuring, se ngan gon hon
const [user4, user5, user6] = userName;
console.log(user4, user5, user6)
//2. bo qua phan tu bang cach de dau phay
const [, user7, user8] = userName;
console.log(user7);