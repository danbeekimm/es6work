//객체할당
let obj1={"name":"lee","age":23};
console.log(obj1.name,obj1.age);

//오브젝트대입
let obj2=obj1;
console.log(obj2.name,obj2.age);

//이름과 나이를 단일변수에 대입 (es5)
let name1=obj2.name;
let age1=obj2.age;
console.log(name1,age1);

//es6
let name,age;
({name,age}=obj1); //{}를 통해서 값을 가져오기 //객체의 멤버와 같은 이름으로 선언해야함(name, age)
console.log(name,age);

//함수인자로 객체를 보낼경우
function f1({name='수지',age=20}={}){ //name하고 age 인객체일때만 보낸다는거기때문에
console.log(name,age);
}

//함수호출
f1(obj1);        //lee 23
f1();            //수지 20
f1(obj1.name);   //수지 20  >>>이름만불러오면 수지 20으로나옴.