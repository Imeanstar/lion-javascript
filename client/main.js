

//모듈 프로그래밍

//getNode가져오기

import { getNode, attr, bindEvent, refError, typeError } from "./lib/dom/index.js";
import { refError, syntaxError, typeError } from "./lib/error/index.js";
import {getRandom, getRandomMinMax, toDegree, toRadian} from "./lib/math/index.js";




const first = getNode('#firstNumber');
const second = getNode('#secondNumber');
const result = getNode('.result');
// const clear = getNode('#clear');

// let first_value = 0;
// let second_value = 0;
// let sum = 0;

//1. input value값 가져오기
//2. 두 수의 합 더하기
//3. 화면 출력 하기

function handleInput(){
    // console.log('first = ' + first.value);
    // console.log('second = ' + second.value);
    let first_value =  +first.value;
    let second_value = second.value / 1;
    let total = first_value + second_value;

    clearContents(result);

    insertLast(result, total);
}


//[page-2]
//clear 버튼을 누르면 모든 글자가 초기화 될 수 있도록 만들어주세요



//1. clear버튼을 가져온다
const clear = getNode('#clear'); 

function handleClear(e){

    //3. firstValue값을 지운다
    clearContents(first);

    //4. secondValue값을 지운다
    clearContents(second);

    //5. result의 값을 지운다
    clearContents(result);

    
    //6. result에 - 를 넣는다.
    result.textContent = '-';
}
//2. claer버튼에 이벤트 핸들러를 연결한다
clear.addEventListener('click', handleClear);



first.addEventListener('input', handleInput);
second.addEventListener('input', handleInput);


function page2(){


    const calculator = getNode('.calculator');
    const clear = getNode('#clear');
    const result = getNode('.result');
    const numberInputs = Array.from(
      getNodes('input:not(#clear)')
    )
    
    console.log( numberInputs );
    
    
    function handleInput(){
      
      const total = numberInputs.reduce((total,input)=> total + Number(input.value),0)
    
    
      console.log(  );
    
      clearContents(result);
      insertLast(result,total);
      
    }
    
    function handleClick(){
    
    
      numberInputs.forEach(clearContents);
      result.textContent = '-'
    }
    
    calculator.addEventListener('input',handleInput);
    clear.addEventListener('click',handleClick);
    
    // [page-3]
    // 위 내용을 이벤트 위임으로 변경 
    // .calculator 이벤트 input 
    
    
    }