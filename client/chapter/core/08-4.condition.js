/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

(emailAddress === undefined || emailAddress === null ) ? (receivedEmailAddress = 'user@company.io') : (receivedEmailAddress = emailAddress);


// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAddress ?? 'user@compaly.io';
receivedEmailAddress = emailAddress || 'user@compaly.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환




//Logical Assignment Operators

let x;
let y;

//x가 false일 때 y값을 x에 할당
x ||= y;
x = x || y;

//x가 true일 때 y값을 x에 할당
x &&= y;
x = x && y;

//x가 undefined, null 일 때 y값을 x에 할당
x ??= y;
x = x ?? y;



let title;

title ||= '제목입니다.';

console.log(title);