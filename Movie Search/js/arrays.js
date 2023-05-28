
// const exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const filterResult = exampleArray.filter((item) => {
//     if (item % 2 == 0) return true;
//     return false;
// })

// console.log('filterResult', filterResult)

// const findResult = exampleArray.find((item) => {
//     if (item % 2 == 0) return true;
//     return false;
// })

// console.log('findResult', findResult)

// const reduceResult = exampleArray.reduce((accumelated, item) => {
//     return accumelated + item;
// }, 0);

// console.log('reduceResult', reduceResult)

// const mapResult = exampleArray.map((item) => {
//     return {
//         value: item
//     }
// })

// console.log('mapResult', mapResult)


// const arr = [100, 203, 20, 394, 20, 30, 300];

// const result = arr.find((item) => {
//     if (item < 50) return true;
//     return false;
// })

// const result2 = arr.filter(item => (item == 20 || item == 394))

// console.log('result', result)
// console.log('result2', result2)

// using find, get the first item with value under 50
// using filter get all items above 30

const myDate = new Date();
myDate.setMonth(-1);

console.log(myDate)
// 01-01-1970 00:00:00