//컬렉션 set,map

let set=new Set("abcdefghijklmn"); //같은값 줘도 한번씩만 들어감 (ex)aabb > ab
console.log(set);

//set에 추가
set.add("z");
console.log(set);
console.log(set.has("x")); //x 를 포함하고있으면 true
console.log(set.has("a")); //a 를 포함하고있으면 true
console.log("길이:"+set.size); //길이 (컬랙션은 size, 문자길이는 length)
console.log(...set);//펼침연산자
set.delete("a"); //a삭제후
console.log(...set);//펼침연산자
set.clear();// 전체삭제
console.log(set.size);//갯수 0

console.log("여기서부터는 Map");
let map=new Map();
let a={n:1};//json type
map.set(a,"A"); //key 가 json타입가능
map.set("2",9);
map.set("2",11); //같은 key값이면 덮어씀   //Map(2) { { n: 1 } => 'A', '2' => 11 }
console.log(map);
console.log(...map);
console.log(map.has("2"));//2라는 key값이 있는지
map.delete("2");
console.log(map);
map.clear();
console.log(map);

