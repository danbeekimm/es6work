//``:리터럴 - ${}로 값쓰기

const r=(w,h)=>{
    if(Number.isNaN(w*h)){
        return "가로,세로 값이 숫자가 아닙니다"; //문자가 섞여있을 때 곱하기하면 nan임.
    }else{
        console.log(`가로가 ${w},세로가 ${h}인 사각형의 너비는 ${w*h}입니다.`);
        return w*h; //이거안쓰면 undifined 나옴
    }
}
//함수호출
console.log(r(4,5));
console.log(r('hello',5));

//``는 enter 도 가능!
let msg=`우리는지금 
    ecma script6을 공부하고
    있어요`; 
    console.log(msg);

//includes 함수
console.log(msg.includes("script")); //script라는 문자열을 포함하고있으면 true

console.log(msg.startsWith("우리는"));//특정단어로 시작시 true
console.log(msg.endsWith("다"));//특정단어로 끝날시 true