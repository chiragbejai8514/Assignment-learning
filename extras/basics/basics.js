// console.log('chirag');

// let  a=20;
// const b=35;

// const  d=Object.assign({},c);

// d.name='bejai';

// console.log(c,d);

//c.name="bejai";

// let num='12345678helloworld';
// let value=parseInt(num)+10;
//console.log(value);

// let a=10;
// console.log(typeof a);
// let b='hello';
// console.log(typeof b);

// let c={};
// console.log(c.length);

// let d={};
// console.log(Array.isArray(d));  
//   function sum(numbers){
//     let sum=0;
// numbers.forEach((number,index,self) => {
//     self[index]=(number*index);   
// });
// return sum;
//   }
// let a=[1,2,3,4,5,6,7,8,9,10];
// console.log(sum(a));

//console.log(a);
// let animals = ['dog', 'cat', 'cow', 'bat', 'deer'];
// let animalDup = [];
// animals.forEach(animal => {
//     let animalObj = { type: animal };
//     animalDup.push(animalObj);
// });

// console.log(animalDup);

//
// let animals = ['dog', 'cat', 'cow', 'bat', 'deer'];
// let animalDup = animals.map(animal => {
//     let animalObj = { type: animal };
//     return animalObj;
// });

// console.log(animalDup);


///
// let animals = ['dog', 'cat', 'cow', 'bat', 'deer', 'cat', 'cat', 'cat'];
// let animalDup = animals.filter(function (animal) {
//     return animal.startsWith('co');
// });

// console.log(animalDup);

// let c={...d}
// setTimeout(()=>{

//     },0);

// console.time('logTime');
// setTimeout(() => {
//     for (let i = 0; i < 10000; i++) {
//         console.log('hello world 1');
//     }
// }, 9000);
// console.log('hello world 2');
// console.timeEnd('logTime')
// 

console.time('logTime');
let loopPromise = new Promise((resolve, reject) => {
    let sum = 0;
    let originalArray = [];
    for (let i = 0; i < 10000; i++) {
        originalArray.push(i);
        sum += i;
    }
    //resolve({ sum, originalArray });
    reject({ sum, originalArray });
});

let furtherPromise = loopPromise.then((data) => {
    console.log('success block', data.sum);
    return data.originalArray;
}, (rejectData) => {
    console.log('failure block', rejectData);
});


furtherPromise.then((originalArray) => {
    originalArray.forEach(() => {

    });
    console.log('originalArray', originalArray);
    console.timeEnd('logTime');
});

