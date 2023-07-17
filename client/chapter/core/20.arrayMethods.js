/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';

function nomalIsArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';
}


const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';

function normalIsNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
}



const arr = [ 10, 100, 1000, 10000 ];

const people = [
{
    id : 0,
    name : '범',
    profession : 'frontend',
    age : 25,
    imagesrc : 'MAksd253',
},
{
    id : 0,
    name : '현주',
    profession : 'swim',
    age : 12,
    imagesrc : 'MTed231',
},
{
    id : 0,
    name : '희소',
    profession : 'zezu',
    age : 31,
    imagesrc : 'dkjiN748',
},
{
    id : 0,
    name : '김다연',
    profession : 'AI and backend',
    age : 52,
    imagesrc : 'KME38xe',
},
{
    id : 0,
    name : '규민',
    profession : 'wrapper',
    age : 18,
    imagesrc : 'xjknE018',
},
]





/* 요소 순환 ---------------------------- */

// forEach : 값을 반환하지 않음.
/*
arr.forEach(function(){

})

arr.forEach(() => {

})
*/
arr.forEach((item , index) => {
    console.log(item, index);
})

people.forEach((item) => {
    console.log(item.name);
})

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift
// reverse
// splice
// sort

/* 새로운 배열 반환 ------------------------ */

const user = ['선범' , '효윤' , '준석']


// concat
const newArray = arr.concat(user);
const newArray1 = [...arr, ...user , 'javascript' , 'css'];
console.log(newArray1);

// slice

const slice = arr.slice(2,5);

// toSorted
const tosorted = arr.toSorted((a,b) => {
    return a - b;
})

// toReversed
// toSpliced
// map
const job = people.map((item,index)=>{
    return /* html */`
      <div class="userCard">
        <div class="imageField">
          <img src="${item.imageSrc}" alt="" />
        </div>
        <span>이름:${item.name}</span>
        <span>직업:${item.profession}</span>
        <span>나이:${item.age}</span>
      </div>
    `
  })
  
  
  
  job.forEach((item)=>{
    document.body.insertAdjacentHTML('beforeend',item);
  })

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
console.log( arr.indexOf(10) );
// lastIndexOf
console.log( arr.lastIndexOf(10) );
// includes
console.log( arr.includes(1000) );

/* 요소 찾기 ------------------------------ */

// find
const find = people.find((item)=>{
    return item.id > 1;
})
// findIndex
const findIndex = people.findIndex((item)=>{
    return item.id = 3;
})

/* 요소 걸러내기 --------------------------- */

// filter : 배열을 반환
const filter = people.filter((item)=>{
    return item.id > 2;
})

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

const totalAge = people.reduce((acc,cur)=>{
    return acc + cur.age;
},0)

// reduceRight

const template = people.reduce((htmlCode, cur) => {
    return htmlCode + `<div>${cur.name}</div>`;
},'')

document.body.insertAdjacentHTML('beforeend' , template);

/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

// split
const stringToArray = str.split(' ');
console.log(stringToArray);

// join
const arrayToString = stringToArray.join('/');
console.log(arrayToString);