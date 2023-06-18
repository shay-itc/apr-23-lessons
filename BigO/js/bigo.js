

// // O(1)
// // console.log('Hi!')

// // O(n)
// // for(let i = 0; i < 1000; i++) {
// //     console.log('Hi!')
// // }


// // O(n * a)

// // const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const array2 = [1, 2, 3, 4, 5, 6];

// // for (let i of array1) { // 6
// //     console.log('i', i)
// //     for (let j of array2) { // 6
// //         console.log('j', j)
// //     }
// // }



// // O(n^2)

// // const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // for (let i of array1) { // 9
// //     console.log('i', i)
// //     for (let j of array1) { // 9
// //         console.log('j', j)
// //     }
// // }

// // O(2^n)



// // find 5
// // [1, 2, 3]
// // [4, 5, 6]



// // [7, 8, 9, 10, 11, 12]


// // const users = [{
// //     id: 1000,
// //     name: 'user 1'
// // }, {
// //     id: 1001,
// //     name: 'user 2'
// // }, {
// //     id: 1002,
// //     name: 'user 3'
// // }, {
// //     id: 1003,
// //     name: 'user 4'
// // }]

// // const filteredArray = [];
// // for (let item of users) {
// //     if (item.id == 1003) {
// //         filteredArray.push(item)
// //     }
// // }

// // for(let user of users) {
// //     if(user.id == 1003) {
// //         console.log('bingo!')
// //     }
// // }

// const userObject = {
//     1000: {
//         name: 'user 1'
//     },
//     1001: {
//         name: 'user 2'
//     },
//     1002: {
//         name: 'user 3'
//     },
//     1003: {
//         name: 'user 4'
//     }
// }

// console.log(Object.keys(userObject))
// for (let value of Object.values(userObject)) {
//     console.log(value)
// }
// console.log(Object.values(userObject))

// // userObject[1003]


const valuesArray = [];

for (let i = 0; i < 3000; i++) {
    valuesArray.push(i);
}

let counter = 0;
function binarySearch(searchArray, value, start = 0, end = searchArray.length) {

    counter++;
    const halfWay = Math.floor((start + end) / 2);

    console.log('start', start);
    console.log('end', end);
    console.log('halfWay', halfWay);

    if (searchArray[halfWay] == value) {
        return halfWay;
    }

    if (searchArray[halfWay] < value) {
        start = halfWay
        end = end;
    } else {
        start = start
        end = halfWay;
    }

    return binarySearch(searchArray, value, start, end);
}


console.log(binarySearch(valuesArray, 1000))
console.log('counter', counter)


// binarySearch(valuesArray, 10);


function testFunc(someParam = 'default') {
    console.log(someParam)
}

testFunc('changed')