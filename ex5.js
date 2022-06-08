//함수파라미터에 기본값이 가능하다

function func1(x,y=200,z=300){
    console.log(x,y,z);

}

func1(3,5,6);
func1(100); //x 만 값이 정해져있어 100,200,300
func1(2,5); //2,5,300
func1();    //undifined 로 넘어옴

function func2(a,b){
    return a+b;
}

let r1=func2(5,6); //5가 a , 6이 b
console.log(r1);   //11

let arr=[2,5,9];
let r2=func2(arr[0],arr[1]); //2,5
console.log(r2); //7
//... : es6에서 추가된 기능, 펼침연산자라고 부른다.


 func1(...arr); //배열을 따로보낸것처럼
 func1(arr[0],arr[1],arr[2]); //위와같다

  let r3=func2(...arr); //앞의 두값이 넘어감
  console.log(r3); //7