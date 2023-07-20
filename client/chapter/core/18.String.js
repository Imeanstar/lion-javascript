/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength;


// 특정 인덱스의 글자 추출
let extractCharacter;


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice;
let subString;
let subStr;


// 문자열 포함 여부 확인
let indexOf;
let lastIndexOf;
let includes;
let startsWith;
let endsWith;


// 공백 잘라내기
let trimLeft;
let trimRight;
let trim;


// 텍스트 반복
let repeat;


// 대소문자 변환
let toLowerCase;
let toUpperCase;


// 텍스트 이름 변환 유틸리티 함수
//? (\s|-|_)+. : 여기서 . 은 앞에 찾은 단어의 뒤에 단어를 의미. replace는 callback 함수 받을 수 있다.
function toCamelCase(string) {
    return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
  }
  
  function toPascalCase(string) {
    let name = toCamelCase(string);
    return name[0].toUpperCase() + name.slice(1); //^ 1번째부터 복사
  }
  
  // let toCamelCase;
  
  // let toPascalCase;