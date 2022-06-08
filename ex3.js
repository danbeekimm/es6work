/*
var : 함수형변수 : 함수형 변수는 같은 메모리를 가짐. 덮어씀
let : 영역형변수 : 영역별로 다른 메모리를 가진다.
*/

var a=1; //전역변수들
let b=2;
function myFunction(){ //지역변수
    var a=3;            // 6번라인과 전혀 다른 변수
    let b=4;            // 7번라인과 전혀 다른 변수

    if(true){           //구역이 만들어졌을 경우 
        var a=5;        //9번행의 값을 덮어쓴다. 3이 없어지고 5가됨
        let b=6;        //10번행의 b 와 전혀다른변수
        console.log(a); //5
        console.log(b); //6
    } 
    console.log(a);     //5
    console.log(b);     //4 영역을 빠져나왓으니 영역별로 
}

myFunction();
console.log(a);         //1 지역변수와는달라서
console.log(b);         //2 영역에 있는게 값이 2임.