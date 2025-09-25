
//1. object la gi
const user = {
    //thuoc tinh
    name: "nanashi",
    age: 70,
    "gioi tinh": "Nam",

    //phuong thuc
    xinChao() {
        console.log("Xin chao ban");
        console.log(this.age);
        return 1;
    }
}
console.log(user);
console.log(user.name);
console.log(user["gioi tinh"]);
console.log(user.xinChao());

//class
class User {
    constructor(name, age) {
        (this.name = name),
            (this.age = age);
    }
    xinChao() {
        console.log("Xin chao ban");
        console.log(this.age);
        return 1;
    }
}
const user1 = new User("Hung", 18);
console.log(user1.name);
console.log(user1.age);

const user2 = new User("Trung", 20);
console.log(user2.name)
console.log(user2.xinChao())