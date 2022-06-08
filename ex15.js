//es6에서는 class 기능이 추가됨
//생성자는 무조건 constructor임. 그리고 this로 표현
//자바는 무조건 class 명과 같아야함 생성자와.
class Student{
    //생성자
    constructor(name){
        this.name=name;
    }
    //맴버함수
    writeName(){
        console.log(`내이름은 ${this.name}이랍니당`);
    }
}
//클래스 생성
let s1=new Student("마이클");
console.log("이름 : "+s1.name);
s1.writeName();
let s2=new Student("케서린");
console.log(`이름 : ${s2.name}`);
s2.writeName();