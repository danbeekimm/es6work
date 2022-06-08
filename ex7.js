let [a,...b]=[1,2,3,4,5,6];
console.log(a); //1
console.log(b); //2,3,4,5,6

let[x,y,w,z]=[4,5,6,7];
console.log(x,y,w,z); //4,5,6,7 각변수당 하나씩 할당됨.

let[a1,b1,c1=10]=[4,7,1]; //만약값이 있다면 값으로 할당되고, 없으면 초기값으로 할당됨
console.log(a1,b1,c1); //4,7,10