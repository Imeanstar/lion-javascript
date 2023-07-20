

function getAttr(node, prop){

    if(typeof node == 'string'){
        node = getNode(node);
    }

    return node.getAttribute(prop);
    
}


function setAttr(node, prop, value){

    if(typeof node == 'string'){
        node = getNode(node);
    }

    //전달받은 prop의 type이 string이 아니라면 error
    if(typeof prop !== 'string'){
        throw new Error("prop은 string값이어야 합니다.");
    }

    if(!node[prop]){
        node.dataset[prop] = value;
        return;
    }


    node.setAttribute(prop, value);
}


function arrowAttr(node, prop, value){
    return !value ? getAttr(node,prop) : setAttr(node, prop, value);
}

const attr = (node, prop, value) => !value ? getAttr(node,prop) : setAttr(node, prop, value);


//IIFE pattern
//약간 클로저랑 비슷한거같기도 한데?

