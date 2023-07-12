/* --------- */
/* Object    */
/* --------- */
/*html*/

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /* css */`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position : 'fixed',
  zIndex : 10000,
  top : '50%',
  left : '50%',
  width : '60vw',
  maxWidth : '800px',
  height : '40vh',
  minHeight : '290px',
  transform : 'translate(-50%, -50%)'

};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;

//authorization : 권한
//authentication : 인증

authUser = {
  uid : 'user-id-zQsand',
  name : 'mike',
  email : 'mike4404@naver.com',
  isSignIn : true,
  permission : 'paid' // free | paid
}

// console.log( authUser );



// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// console.log( authUser.uid );
// console.log( authUser.name );
// console.log( authUser.email );


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// console.log( authUser['uid'] );
// console.log( authUser['name'] );
// console.log( authUser['email'] );


// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

function createUser(
  name, 
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
  ){

  return{
    name : name,
    email : email,
    [computedProp] : number
  }

}

const user1 = createUser('유저1', 'user1@naver.com');
const user2 = createUser('유저2', 'user2@naver.com');

// 프로퍼티 포함 여부 확인


// 프로퍼티 나열

//key만 모아놓은 배열 만들어주세요 Object.keys()
let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);


function getProp(object){
  if(typeof object != 'object'){
    throw new Error('getProp함수의 매개변수는 객체 타입 이어야 합니다.');
  }
  return Object.keys(object);
}

function getP(object){
  let result = [];

  for(let key in object){
    if(({}).hasOwnProperty.call(object,key)){
      result.push(key);
    }
  }

  return result;
}

//             null            없앰
// 프로퍼티 제거(remove) or 삭제(delete) 

//제거 ) authUser.name = null
//삭제 ) delete authUser.uid

/*
function removeProperty(object, name){
  if(name == 'all'){
    for(let name of Object.keys(object)){
      object[name] = null;
    }
  }
  else{
    object[name] = null;
  }
  

  console.log(object);
  return object;
}
removeProperty(authUser, 'all');

function deleteProperty(authUser, name){

  if(isEmptyObject(authUser)){
    return;
  }

  delete authUser[name];

  return authUser;
}
*/







// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;


const student = { name , email , authorization , isLogin }
console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {

  return Object.keys(object).length == 0 ? true : false;

}

isEmptyObject(authUser);


/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

let color = ['#ff0000' , '#2b00ff' , '#00ff2f'];

let [red, blue, green] = color;

// let red = color[0]
// let blue = color[1]
// let green = color[2]

const button = document.querySelectorAll('nav li button');











/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */


const salaries = {
  a:50,
  b:1000,
  c:500,
  d:700,
}

const{a,b,c,d} = salaries;

console.log(a);
console.log(b);
console.log(c);
console.log(d);



//배열의 구조분해할당 : 순서가 정해져있다. 변수 이름을 바꿀 수 있다
//객체의 구조분해할당 : 순서가 정해져있지 않다. 변수 이름을 바꿀 수 있다


setElemetCss(option){

  const { 
    width : w = 100, 
    //width로 받았지만
    //이미 이름을 w로 바꿔서 width로는 이제 사용불가
    //굳이 쓰려면 options.width로 써야함
    height : h = 10 , 
    overflow = '', 
    color : c
  } = option;
  console.log(w,c);

}

setElemetCss({
  height : 100,
  color : 'red',
  overflow : true,
  width : 50,
})

