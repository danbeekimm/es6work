//비교연산자

let a=6;
let b="6";
console.log(a==b); //t : 값만 같으면 true
console.log(a===b);//f : 타입까지도 같아야 true가 나옴
console.log(Object.is(a,b)); //f : 얘도 타입까지같아야함
console.log(`a의 타입은 ${typeof(a)}입니다`);
console.log(`b의 타입은 ${typeof(b)}입니다`);
 