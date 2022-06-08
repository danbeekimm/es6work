let arr1=[2,3,4];
let arr2=[6,7];
let arr3=[11,22,...arr1,12,...arr2];
console.log(arr3.length); //8개
console.dir(arr3);        //[11, 22, 2, 3,4, 12, 6, 7]

let arr4=[...[100,200],...arr2];
console.log(arr4);//100 200 6 7

function fsum(arr){
    console.log("합계="); //아무것도안나옴
    let sum=0;
    //방법1
    // for(i=0; i<arr.length; i++){
    //     sum+=arr[i];
    // }

    //방법2
    for(let a in arr){ //a 는 인덱스 값을 꺼내는게 아닌 i 역할
        sum+=arr[a];
    }
    console.log("합계="+sum);
}
fsum(arr3);

function func3(a,b,c,d,e){
    console.log(a,b,c,d,e);
}
func3(arr3); //배열첫번째만 들어가고 나머진 undifined
func3(...arr3); //흩어져있는걸 5개만 모아서 호출
