

// Create an array with 4 items, each one is a number
// Create a function that receives this array as a parameter and multiplies 
// the first item by the second item and then pushes the result to the array, 
// and the same thing to the third and fourth items

// Get the new array and print it outside the function
// Implement it as impure, then as pure function


// const myArray = [2, 2, 3, 3];

// function multiplier(array) {

//     const newArray = [];
//     for (let item of array) {
//         newArray.push(item);
//     }

//     let result = newArray[0] * newArray[1];
//     newArray.push(result)

//     result = newArray[2] * newArray[3];
//     newArray.push(result)

//     return newArray;
// }

// function newFunc(param1, param2, param3) {

//     console.log(param1, param2, param3)
// }

// newFunc(3, 2, 1);

// [2, 2, 3, 3, 4, 9]

// const returnedArray = multiplier(myArray);

// console.log(myArray)
// console.log(returnedArray)

// function promiseFunc(resolve, reject) {
//     setTimeout(() => {
//         resolve('this is an error')
//     }, 1000)
// }

// async function myFunc() {
//     return 'Hello world!';
// }

// const value = myFunc();

// value.then((data) => {
//     console.log(data)
// })

// console.log(value)

// const promise = new Promise(promiseFunc)

// promise.then((data) => {
//     console.log('Promise resolved!')
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })

// console.log('i am at the end')


// const result = fetch('https://www.omdbapi.com/?t=spiderman&apiKey=87dd0709');

// result.then((response) => {
//     console.log(response)
//     response.json().then((data) => {
//         console.log(data)
//     })
// })


// function countArray(array) {

//     let counter = 0;
//     for (let item of array) {
//         counter = counter + item.length;
//     }

//     return counter;
// }

// console.log(countArray(myArray))

const myArray = [
    [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1,
            [1, 1, 1, 1, [1, 1]]
        ]
    ],
    [2, 2, 2, 2, 2, 2],
    [3, 3, 3, 3, 3],
    1,
    1,
    1
]

function myRec(array, counter) {

    for (let innerArray of array) {
        if (Array.isArray(innerArray)) {
            console.log('innerArray', innerArray)
            counter = myRec(innerArray, counter);
        } else {
            counter++;
        }
    }
    return counter;
}

console.log(myRec(myArray, 0));