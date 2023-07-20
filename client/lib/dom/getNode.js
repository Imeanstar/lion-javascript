function getNode(node){

    if(typeof node != 'string'){
        throw new Error('getNode함수의 parameter는 문자 type이어야 합니다.');
    }

    return document.querySelector(node);
}

//여러 요소를 잡을때는?
function getNodes(nodes){
    if(typeof nodes != 'string'){
        throw new Error('getNodes함수의 parameter는 문자 type이어야 합니다.');
    }

    return document.querySelectorAll(nodes);
}