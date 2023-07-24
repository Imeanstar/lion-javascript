import { jujeobData } from './data/data.js';
import {
    copys,
    shake,
    getNode,
    addClass,
    showAlert,
    getRandom, 
    insertLast, 
    clearContents, 
    isNumericString, 
    removeClass} from './lib/index.js';

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');

function submitButtonClick(e){
    e.preventDefault();

    let name = nameField.value;
    const list = jujeobData(name);
    let ran2 = list[getRandom(list.length)];
    // console.log( jujeobData(name)[ran2]);

    if(!name || name.replace(/\s*/g, '') == '' ){
        showAlert('.alert-error', '이름을 입력해주세요!', 2000);
        let ran = getRandom(100);

        shake.restart();

        return;
    }

    if(!isNumericString(name)){
        showAlert('.alert-error', '제대로 된 이름을 입력해주세요!', 2000);
        shake.restart();
        return;
    }

    clearContents(resultArea);
    insertLast(resultArea, ran2);


}

function handleCopy(){
    const text = resultArea.textContent;
    copys(text).then(()=>{
        showAlert('.alert-success', '클립보드 복사 완료');
    });
    // copys(text);
    // showAlert('.alert-success', '클립보드 복사 완료');
}



submit.addEventListener('click', submitButtonClick);
resultArea.addEventListener('click', handleCopy);
