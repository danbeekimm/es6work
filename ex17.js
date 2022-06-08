class School{
    constructor(sname){
        console.log("부모클래스생성자 호출");
        this.sname=sname;
    }

    writeSchool(){
        console.log(`나의 학교명은 ${this.sname}고등학교입니다`);
    }
}
//상속
class Student extends School{
    constructor(sname,myname){
        super(sname); //자바는 생략가능하지만 여기선 생략x
        console.log("자식 클래스생성자 호출");
        this.myname=myname;
    }
    writeInfo(){
        this.writeSchool();
        console.log(`내이름은 ${this.myname}입니다`);
    }
}

let a = new Student("휘문","김단비");
a.writeInfo();