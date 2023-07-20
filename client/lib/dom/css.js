function addClass(node, className){
    if(typeof node == 'string'){
        node = getNode(node);
    }
    if(typeof className !== 'string'){
        throw new Error('addClass함수의 두 번째 인자는 문자 타입 이어야 합니다');
    }
    node.classList.add(className);
}

function removeClass(node, className){
    if(!className){
        node.className = '';
        return;
    }
    if(typeof node == 'string'){
        node = getNode(node);
    }
    if(typeof className !== 'string'){
        throw new Error('removeClass함수의 두 번째 인자는 문자 타입 이어야 합니다');
    }
    
    node.classList.remove(className);
}

const toggleClass = (node, className) => {
    if(typeof node == 'string'){
        node = getNode(node);
    }
    if(typeof className !== 'string'){
        throw new Error('toggleClass함수의 두 번째 인자는 문자 타입 이어야 합니다');
    }
    return node.classList.toggle(className);
}


/* css -------------------------------------------------------------*/
function setCss(node, style, value){
    if(typeof node == 'string'){
        node = getNode(node);
    }
    if(!(style in document.body.style)){
        throw new Error (`setCss 함수의 두 번째 인자인 ${style}은 유효한 css속성이 아닙니다.`)
        return ;
    }
    if(!value){
        throw new Error ('setCss함수의 세 번째 인자는 필수값입니다.');
        return;
    }
    node.style[style] = value;
}

function getCss(node, prop){
    if(typeof node == 'string'){
        node = getNode(node);
    }
    if(!(prop in document.body.style)){
        throw new Error('값이 없음');
        return;
    }

    return getComputedStyle(node).getPropertyValue(prop);
}

const css = (node,prop,value) => {
    return !value ? getCss(node,prop) : setCss(node,prop,value);
  }