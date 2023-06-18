

// // function myFunc(...args) {

// //     console.log(args)
// // }

// // myFunc(1, 2, 3, 4)

// const object = {
//     key1: 'value 1',
//     key2: 'value 2',
//     key3: 'value 3',
// }

// // const newObject = { ...object };


// const array = ['a', 'b', 'c', 'd', 'e', 'f', 'bla1', 'bla2'];

// const [a, b, c, d, ...rest] = array;

// // console.log('rest', rest)

// const { key1: myAlias, key2, key3 } = object;


// const test = {
//     a: {b: {c: 'text'}}
// }

// const {a:bla} = test;

// console.log('txt', bla)

// // {
// //     firstKey: "first value",
// //     secondKey: "second value"
// // }

// // destructure this object
// // create an alias for firstKey


// // console.log('myAlias', myAlias)
// // console.log('key2', key2)

// // console.log({ key1, key2, key3 })

// // const newArray = [...array];

// // console.log('array')
// // console.log('newArray', newArray)

// function myFnction(options) {

//     console.log('options', options)
//     const { option1, option2, option3 } = options;
//     console.log(option1, option2, option3)
// }

// myFnction({ option2: 'test' })


// // function printPersonInfo({ name, age, city }) {
// //     console.log(`Name: ${name}`);
// //     console.log(`Age: ${age}`);
// //     console.log(`City: ${city}`);
// //   }

// //   const person1 = {
// //       age: 32,
// //       city: 'Tel Aviv',
// //       name: 'Noa Cohen'
// //   };

// //   const person2 = {
// //     name: 'Yoni Levi',
// //     age: 27,
// //     city: 'Jerusalem'
// //   };

// //   printPersonInfo(person1);
// //   printPersonInfo(person2);

const object= {
    firstKey: "first value",
    secondKey: "second value",
    // thirdKey: "third value",
    }
    
const { firstKey: myAlias, secondKey, thirdKey = 'default'} = object;

console.log('thirdKey', thirdKey)

    // function printObjectKeys() {
    //     console.log('firstKey', myAlias);
    //     console.log('secondKey', secondKey);
    // }
    
    // printObjectKeys(object);