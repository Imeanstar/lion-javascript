/* --------------- */
/* For Of Loop     */
/* --------------- */

//iterable = String, Array, Array-like

const arraylike = {
    0 : 'body',
    1 : 'head',
    2 : 'div',
    length : 3,
    //[Symbol.iterator]{...}
}

//객체는 for of를 돌릴 수 없다
// for(let value of arraylike){
//     console.log(value);
// }

//문자열은 가능
/*
const str = '유사배열입니다';
for(let value of str){
    console.log(value);
}
*/

const languages = [
    {
      id: 'ecma-262',
      name: 'JavaScript',
      creator: 'Brendan Eich',
      createAt: 1995,
      standardName: 'ECMA-262',
      currentVersion: 2022,
    },
    {
      id: 'java',
      name: 'Java',
      creator: 'James Gosling',
      createAt: 1995,
      standardName: null,
      currentVersion: 18,
    },
    {
      id: 'ecma-334',
      name: 'C#',
      creator: 'Anders Hejlsberg',
      createAt: 2000,
      standardName: 'ECMA-334',
      currentVersion: 8,
    },
  ];
  
//   for(let value of languages){
//     console.table(value);
//   }

//   for(let value of languages){
//     const name = value.name;

//     if(name == 'Java') continue;

//     console.log(name);
//   }


  // for ~ of 문
  // - 특정 조건에서 건너띄기
  // - 특정 조건에서 중단하기
  
  
  
  
  const randomUser = {
    gender: 'female',
    name: { title: 'Ms', first: 'Carol', last: 'May' },
    location: {
      street: { number: 9162, name: 'Church Road' },
      city: 'Birmingham',
      state: 'Cumbria',
      country: 'United Kingdom',
      postcode: 'FO5E 4TN',
      coordinates: { latitude: '-4.3301', longitude: '155.0223' },
      timezone: { offset: '-4:00', description: 'Atlantic Time (Canada), Caracas, La Paz' },
    },
    email: 'carol.may@example.com',
    login: {
      uuid: '39e4e214-7f66-44a6-a3ba-3b5ce46b8e25',
      username: 'redduck745',
      password: 'picks',
      salt: '8xzqOzAn',
      md5: '7250e4042c2367cc82487f798c7c5253',
      sha1: '6c0e2fac669d6d7f11fb0bab52493f441cf5834b',
      sha256: '9e49256b8917113750533c24c015336af43d5d7130cf8faa19054c1ba36e7de8',
    },
    dob: { date: '1962-12-07T21:51:26.781Z', age: 59 },
    registered: { date: '2018-06-08T04:07:17.788Z', age: 4 },
    phone: '022 1280 9236',
    cell: '07653 428700',
    id: { name: 'NINO', value: 'SH 44 98 72 L' },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/21.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/21.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/21.jpg',
    },
    nat: 'GB',
  };
  
  // 객체의 키, 값 순환
  // - for ~ in 문
  // 잘 쓰이지 않음
  /*
  for(let key in randomUser){
    console.log(randomUser[key]);

    if(({}).hasOwnProperty.call(randomUser,key)){
        let l1 = randomUser[key];
        console.log('l1 : ', l1);
        if(typeof l1 == 'object'){

            for(let key in l1){
                if(({}).hasOwnProperty.call(l1,key)){
                    let l2 = l1[key];

                    console.log('\tL2 : ', l2);

                    if(typeof l2 == 'object'){

                        for(let key in l2){
                            if(({}).hasOwnProperty.call(l2,key)){
                                let l3 = l2[key];
                                console.log('\t\tl3 : ', l3);
                            }
                        }
                    }
                }

            }
        }

    }
  }
*/
  


  // - for ~ of 문

  //Object.keys();
  //모든 키 값들이 배열로 반환

  //Object.values();
  //모든 밸류값이 배열로 반환

  //Object.entries();
  //객체 자체의 열거가능한 속성 key, value를 가진 쌍의 배열을 반환


//   console.log( Object.values(randomUser) );


  for(let keyvalue of Object.entries(randomUser)){
    let key = keyvalue[0];
    let value = keyvalue[1];

    console.log('l1 : ', value);

    if(typeof value == 'object'){
        for(let keyvalue of Object.entries(value)){
            let key = keyvalue[0];
            let value = keyvalue[1];
            console.log('\tl2 : ', value);

            if(typeof value == 'object'){
                for(let keyvalue of Object.entries(value)){
                    let key = keyvalue[0];
                    let value = keyvalue[1];
                    console.log('\t\tl3 : ', value);
                }
            }
        }
    }
  }
  //객체는 for of문 적용 안되지만 배열은 가능
  //따라서 배열로 만들어줫 for of 적용


  // - 성능 비교 진단