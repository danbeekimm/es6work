/*
    console 객체의 속성
    dir(object) : 자바스크립트 객체의 속성들을 출력
    time(id): 실행시간을 측정하기 위한 시작시간
    timeEnd(id) : 실행시간을 측정하기 위한 끝시간

*/

var result=0;
console.time("sum_time");//호출시간
for(var i=1; i<=1000; i++){
    result+=i;

}
console.timeEnd("sum_time");
console.log("1~1000 까지의 합:%d",result);
console.log("현재실행중인 파일 : %s",__filename); //경로포함 파일명 출력
console.log("현재실행중인 파일의 경로 : %s ",__dirname); //경로만

var person ={name:"한가인",addr:"강남구"};
console.dir(person);