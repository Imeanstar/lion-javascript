/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
  }
  
  let resultX = calculateTotal(10000, 8900, 1360, 2100);
  let resultY = calculateTotal(21500, 3200, 9800, 4700);
  let resultZ = calculateTotal(9000, -2500, 5000, 11900);
  
//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);
  
  
  // 함수 선언 → 화살표 함수 (표현)식
  let calcAllMoney = (...args)=>{

    console.log( args );

    // let total = 0;
    // args.forEach((item)=>{
    //     total += item;
    // })
    // console.log( total );



    // return args.reduce(function(acc,item){
    //     return acc + item;
    // },0)

    return args.reduce((acc,item)=> acc + item , 0)

  };
  
  const result = calcAllMoney(1000,500,200,2000);
  console.log(result);


  const a = document.querySelector('nav li:nth-chile(1) button');
  const nav = document.querySelectorAll('nav li button');


  a.addEventListener('click', function(){
    this.classList.add('is-active');
  })


  nav.forEach((button)=>{
    button.addEventListener('click', function(){
        this.classList.add('is-active');
    })
  })



  
  // 화살표 함수와 this


  //함수 선언문
  function normalFunction(){

  }
  //함수 표현식
  const expressionFucntion = function (){

  }
  //화살표 함수식
  const arrowFunction = () => {

  }

  
  
  /* 다음 함수를 작성해봅니다. -------------------------------------------------- */
  
  // pow(numeric: number, powerCount: number): number;
  let pow; 
  
  // repeat(text: string, repeatCount: number): string;
  let repeat; 







  //객체 안에서 this

  //객체의 메서드를 정의할 때는 화살표 함수보다 일반 함수가 더 좋은것 아닌가요? yes
  //메서드 안에서 함수를 호출할 때는 화살표 함수가 더 좋나? yes

  const user = {
    total : 0,
    name : 'tiger',
    age:32,
    address:'서울시 중랑구',
    grades:[80,80,100],
    totalGrades:function(){
        //this = user

        const sayHi = () =>{
            console.log( this );
        }

        sayHi();
    }

  }