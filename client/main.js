
import { attr, clearContents, diceAnimation, endScroll, getNode, getNodes, insertLast, memo } from './lib/index.js'

const[startButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const buttonGroup = getNode('.buttonGroup');
const recordListWrapper = getNode('.recordListWrapper');
const tbody = getNode('.recordList tbody');
const body = getNode('.body');

memo('@tbody', ()=> getNode('.recordList body')); //setter

// memo('@tbody'); //getter


let turn = 0;
let sum = 0;

// [phase-1] 주사위 굴리기
// 1. dice animation 불러오기
// 2. 주사위 굴리기 버튼을 클릭하면 diceAnimation 실행 될 수 있도록
//       - 주사위 굴리기 버튼을 가져온다.
//       - 이벤트 핸들러를 연결한다.
//       - 애니메이션 코드를 작성한다.
// 3. 애니메이션 토글 제어 
// 4. 클로저 + IIFE 를 사용한 변수 보호


// [phase-2] 레코드 리스트 control / view
// 1. 주사위가 멈추면 기록/초기화 버튼 활성화
// 1-5. disableElement(node) , enableElement(node)
// 1-75. isDisableState => true / false
// 2. hidden 속성 제어하기
// 2-5 . visibleElement(node), invisibleElement(node)
// 2-75. isVisibleState => true / false
// 3. 주사위 값을 가져와서 렌더링
function createItem(value){
        return /* html */`
        <tr>
            <td>${turn}</td>
            <td>${value}</td>
            <td>${sum}</td>
        </tr>
    `
}


function renderRecodrItem(){
    const diceValue = +attr(memo('cube'), 'data-dice');
    sum += diceValue;

    insertLast(memo('@tbody'), createItem(diceValue));

    
    endScroll(recordListWrapper);
    endScroll(body);
}


// console.log(startButton)
const diceRollEvent = (function (e){
    let isClicked = false;
    // let isClicked_record = false;
    let stopAnimation;
    
    return()=>{

        if(!isClicked){//주사위 play
            stopAnimation = setInterval(diceAnimation, 100);
            recordButton.disabled = true;
            resetButton.disabled = true;


        }
        else{//주사위 stop
            clearInterval(stopAnimation);
            recordButton.disabled = false;
            resetButton.disabled = false;


    
        }
        isClicked = !isClicked;

    }
})()



function recordHandle(){
    
    recordListWrapper.hidden = false;

    // 큐브의 data-dice값만 가져오면


    
    turn++;
    
    renderRecodrItem()
    
}

function recordHiddenOn(){
    recordListWrapper.hidden = true;
    recordButton.disabled = true;
    resetButton.disabled = true;

    clearContents(memo('@tbody'));

    turn = 0;
    sum = 0;
}


startButton.addEventListener('click', diceRollEvent);
recordButton.addEventListener('click', recordHandle);
resetButton.addEventListener('click', recordHiddenOn);


