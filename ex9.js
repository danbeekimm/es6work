//화살표 함수 : 일반함수화의 차이점 : 객체생성이 안됨, new 사용못함
//함수명 = 파라메타 =>바디부분

//<같은함수>
function f1(){
    console.log("일반함수 f1");
}
f1();

let f2=()=>console.log("화살표함수 f2");
f2();

//<같은함수>    
function f3(a,b){
    return a+b;
}
let a=f3(5,7);
console.log(a);     //12가나옴

let f4=(a,b)=>a+b;  //return생략
let b= f4(11,22);
console.log(b);

//<같은함수>
function f5(x,y,z=30){
    return x+y+z;
}
console.log(f5(1,2,3)); //6
console.log(f5(10,20)); //60

let f6=(x,y,z=30)=>x+y+z;
console.log(f6(1,2,3));
console.log(f6(10,20));

let ob={
    f1:()=>{
        console.log(1); //1
        let f2=()=>console.log(2); //2
        f2();
        setTimeout(f2,1000); //1초뒤 f2 호출 //2(1초뒤에)
    }
}
ob.f1();