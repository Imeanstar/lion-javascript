/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');

console.log( first.className );
// console.log( first.className = 'box' );     //setter
console.log( first.className );             //getter



// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// add
// remove
// toggle
// contains

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is--active'); //boolean값 반환

console.log( first.classList.contains('is--active') );

addClass('.first', 'hello');


/* 스타일 변경 방법 --------------------------------------------------------- */

first.style.backgroundColor = 'orange'; //setter
console.log( first.style.backgroundColor ); //getter?
//이 getter는 setter먼저 설정 안해주면 getter역할 못함
//css로 설정해줘도 못읽는 반쪽짜리 getter



// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log( getComputedStyle(first).fontSize);
console.log( getComputedStyle(first).getPropertyValue('font-size'));
//객체에 다시 method를 불러내서 좀 더 명시적으로







setCss('.first','color','pink');