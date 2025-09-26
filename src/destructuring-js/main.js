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

//2.3 destructuring voi gia tri mac dinh
const [user9, user10, user11, user12 = "default name"] = userName;
console.log(user12)

//2.4 destructuring voi rest parameter:
const [user13, ...abc] = userName;
//lay cac phan tu con lai sau 'user13'
console.log(user13)





//3. Destructuring object
const user = {
    name: "nanashi",
    age: 19,
};
//neu lay ra cac thuoc tinh trong object
const ten = user.name;
const tuoi = user.age;
//nhung neu dung destructuring
const { name, age } = user
console.log(name);
console.log(age)

//3.2 doi ten bien khi destructuring
const { name: ten1, age: tuoi1 } = user;
//3.3 destructuring voi default value, gia tri mac dinh
