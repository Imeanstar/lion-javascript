/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

/*
function handler(){
    console.log('HTML속성에서 이벤트를 실행합니다.');
}
*/


/*
const first = getNode('.first');

function handler(){
    console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}


first.onclick = handler;
*/


// const first = getNode('.first');

// function handleClick(){
//     console.log('이벤트 메서드를 출력합니다');
// }

//click , mousemove , mouseover , mouseout , mousedown , mouseup

/*
first.addEventListener('mousemove',handleClick);

setTimeout(()=>{

    first.removeEventListener('mousemove',handleClick);

},3000);
*/

function handler(){
    console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
}


// const remove = bindEvent('.first', 'click' , handler);

// setTimeout(()=>{
//     remove();
// },3000);




//이벤트 객체(event object)
//이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만든다
//객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 결정한다.


const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClick(e){
  
    let x = e.offsetX;
    let y = e.offsetY;
  
    ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`;
  
  }
  
  function debounce(callback, limit = 100) {
    let timeout
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback.apply(this, args)
        }, limit)
    }
  }
  
  
  function throttle(callback, limit = 100) {
    let waiting = false
    return function() {
        if(!waiting) {
            callback.apply(this, arguments)
            waiting = true
            setTimeout(() => {
                waiting = false
            }, limit)
        }
    }
  }
  
  
  ground.addEventListener('click',handleClick);
  
  
  // throttle debounce
  
  ground.addEventListener('mousemove',debounce((e)=>{
    let x = e.offsetX;
    let y = e.offsetY;
  
    let template = `
      <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
    `
  
    insertLast(ground,template)
  }));









/*
window.addEventListener('DOMContentLoaded',()=>{
    const first = document.querySelector('.first');
})
*/
//DOM요소가 다 로딩되면 이 코드를 시행해라
//근데 defer가 나와서 defer로 대체 가능