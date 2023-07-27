
/*
[readystate]

0 : uninitalized
1 : loading
2 : loaded 
3 : interactive
4 : complete

*/

import { refError } from "./../error/index.js";




/* callback ----------------------------------------------------------------------*/

export function xhr(option){

    const {
        method = 'GET', 
        url = '', 
        onSuccess = null, 
        onFail = null, 
        body = null, 
        headers = {
          'Content-Type':'application.json',
          'Access-Control-Allow-Origin':'*'
        }
      } = option;

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    Object.entries(headers).forEach(([key,value])=>{
        xhr.setRequestHeader(key,value);
    })

    xhr.addEventListener('readystatechange',()=>{
        const {status, readyState, response} = xhr;
        if(status >= 200 && status < 400){
            if(readyState==4){
                onSuccess(JSON.parse(response));
            }
        }
        else{
            onFail('실패');
        }
    })
    xhr.send(JSON.stringify(body));
}



// xhr({
//     method : 'GET',
//     url : 'https://jsonplaceholder.typicode.com/users',
//     onSuccess:()=>{},
//     onFail : ()=>{},
//     body : {
//         name : 'tiger'
//     },
//     headers : {
//         'Content-Type' : 'application/json',
//         'Access-Control-Allow-Origin' : '*',
//     }
// })

// 1. 자바스크립트의 함수는 객체다
// 2. 사용자(협업개발자) 입장 : 쉽게 쓰자
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어 버리자

/**
 * 
 * @param {string} url 서버와 통신할 주소 
 * @param {function} onSuccess 서버와의 통신 성공시 실행될 콜백 함수 
 * @param {fucntion} onFail 서버와의 통신 실패시 실행될 콜백 함수 
 * @return server data
 */
xhr.get = (url, onSuccess, onFail) =>{
    xhr({
        url,
        onSuccess,
        onFail
    })
}

xhr.post = (url, body, onSuccess, onFail) =>{
    xhr({
        mothod : 'POST',
        url,
        body,
        onSuccess,
        onFail
    })
}

xhr.put = (url, body, onSuccess, onFail) =>{
    xhr({
        mothod : 'PUT',
        url,
        body,
        onSuccess,
        onFail
    })
}

xhr.delete = (url, onSuccess, onFail) =>{
    xhr({
        mothod : 'DELETE',
        url,
        onSuccess,
        onFail
    })
}


// xhr.get(
//     'https://jsonplaceholder.typicode.com/users',
//     (result)=>{
//         console.log(result)
//     },
//     ()=>{

//     }
// )





/* promise API ------------------------------------------------------- */

const defaultOptions = {
    method : 'GET',
    url : '',
    body : null,
    errorMessage : '서버와 통신이 원활하지 않습니다.',
    headers:{
        'Content-Type':'application/json'
    }
}


export function xhrPromise(options){

    //mixin
    
    const {method, url, body, errorMessage, headers} = Object.assign({},defaultOptions,options)
    if(!url){
        // refError('서버와 통신할 url은 필수값입니다.');
    }

    const xhr = new XMLHttpRequest();
    
    
    xhr.open(method,url);

    Object.entries(headers).forEach(([key,value])=>{
        xhr.setRequestHeader(key,value);
    })

    xhr.send(JSON.stringify(body));
    
    return new Promise((resolve, reject)=>{
        xhr.addEventListener('readystatechange',()=>{
            if(xhr.readyState == 4){
                if(xhr.status >= 200 && xhr.status < 400){
                    resolve(JSON.parse(xhr.response));
                }
                else{
                    reject({message : '서버와의 통신이 원활하지 않습니다.'});
                }
            }
        })
    })
}

xhrPromise({
    url:'https://jsonplaceholder.typicode.com/users',
    errorMessage:'알 수 없는 오류'
  })
  .then((res)=>{
    // console.log( res );
  })





xhrPromise.get = (url)=>{
    return xhrPromise({url});
}

xhrPromise.post = (url, body)=>{
    return xhrPromise({
        url,
        body,
        method : 'POST'
    })
}

xhrPromise.delete = (url)=>{
    return xhrPromise({
        url,
        method: 'DELETE'
    })
}

xhrPromise.put = (url, body)=>{
    return xhrPromise({
        url,
        body,
        method : 'PUT'
    })
}



