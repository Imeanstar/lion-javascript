/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

//DOM
//Document Object Model


/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
const message = document.getElementById('message');
console.log(message);
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
const first = document.querySelector('.first');

// - querySelectorAll
const [firstSpan, secondSpan] = document.querySelectorAll('span');

// - closest
console.log( first.closest('h1') ); //event deligation
//first에서 가장 가까운 h1?
//가장 인접한 부모요소



//el, els
getNode('.first'); //<span class='first'></span>

const first1 = getNode('.first');

/* 문서 대상 확인 */
// - matches
console.log(first.matches('.first'));
//first가 first class가 맞아?
console.log(first.matches('#message'));
//first가 message id를 가졌어?


// - contains
console.log( first.contains(secondSpan) );
//선택자의 자식들 중에 해당 element가 있어?


//node.classList.contains()
//클래스를 포함하고있어?