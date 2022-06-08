//const : 상수
const PI=3.141592;
let r=3;

let area=r*r*PI;
console.log("반지름이 %d 인 원의 넓이 : %f",r,area.toFixed(1)); //toFixed : 소숫점자리1자리까지 함수 >>28.3

//PI=1.234; : 상수는 값변경 못함.

//const 로 객체도 선언가능
const pp={
    "name":"홍길동",
    "addr":"서울강남"
}
console.log("이름:"+pp.name);
console.log("주소:"+pp.addr);

//값변경이 됨. 객체타입일 경우 멤버는 변경가능
pp.name="이진";
pp.addr="엘에이";

console.log("이름:"+pp.name);
console.log("주소:"+pp.addr);

//pp={};// 객체값 통째로 자체변경은 에러발생 