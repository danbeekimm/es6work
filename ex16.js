//ex5에서도 객체개념은있었다

// function Person(name,age){
//     this.name=name;
//     this.age=age;

// }
// //prototype:멤버함수
// Person.prototype.printProfile=function(){
//     console.log("이름은"+this.name+"이고 나이는"+this.age+"입니다");
// }

//<es6 의 class> 
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    printProfile(){
        console.log(`내이름은 ${this.name}이고 나이는 ${this.age}입니다`);
    }

    static showTitle(){
        console.log("ES6의 정적함수");
    }

}
let p1=new Person("이영자",34);
p1.printProfile(); // 화살표함수는 false로 나옴

console.log("printProfile"in p1.__proto__); //t
console.log("printProfile"in Person.prototype);//t
Person.showTitle(); //static함수는 클래스명으로 호출



// let p1=new Person("이영자",34);
// p1.printProfile();

//prototype에 등록되었는지 확인 2가지방법
// console.log("printProfile"in p1.__proto__); //t
// console.log("printProfile"in Person.prototype);//t