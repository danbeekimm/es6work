//Number 객체
let a=12;
let b=23.0;
let c=12.6;
console.log(a+"는 정수인가?"+Number.isInteger(a)); //true
console.log(b+"는 정수인가?"+Number.isInteger(b)); //true <소수점이있냐없냐에 따라 나옴.>
console.log(c+"는 정수인가?"+Number.isInteger(c)); //false

let a1="NaN";
let b1=NaN;
let c1="안녕";
let d1=12;

//es5의 isNaN   - 숫자가 아닐경우 t 숫자일경우 f
//숫자인지아닌지 판별할때 쓰기
console.log("es5 isNaN");
console.log(a1+"은 NaN인가>"+isNaN(a1)); //t
console.log(b1+"은 NaN인가>"+isNaN(b1)); //t
console.log(c1+"은 NaN인가>"+isNaN(c1)); //t
console.log(d1+"은 NaN인가>"+isNaN(d1)); //f

//es6의 isNaN -정말 nan인경우 실제 에러나는경우만 t
//에러인지아닌지 볼때 쓰기
console.log("es6 isNaN"); 
console.log(a1+"은 NaN인가>"+Number.isNaN(a1));//f
console.log(b1+"은 NaN인가>"+Number.isNaN(b1));//t
console.log(c1+"은 NaN인가>"+Number.isNaN(c1));//f
console.log(d1+"은 NaN인가>"+Number.isNaN(d1));//f

console.log("반복함수 repeat");
console.log('ㅋ'.repeat(100)); //반복 
console.log('김단비'.repeat(26)); //반복

var x="20";
var y="3";
console.log(x+y);
console.log(Number(x)+Number(y)); //숫자로 바꿔주기