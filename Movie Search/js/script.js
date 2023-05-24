// async function doSomething() {

//     return await fetch('http://google.com');
// }

// function faultyFunction() {

//     throw { error: 'A custom error' };
// }

// async function main() {
//     // doSomething().then((value) => {

//     //     console.log('value', value);
//     // }).catch((error) => {

//     // })
//     // console.log('something')

//     // try {
//     //     const value = await doSomething();
//     //     console.log('value', value);
//     //     console.log('something');
//     // } catch (e) {
//     //     console.log()
//     // }

//     // let object;
//     // try {
//     //     object = JSON.parse('{"key":"value"}');
//     //     console.log(object)
//     // } catch (e) {
//     //     console.log(e)
//     // } finally {
//     //     console.log('finally')
//     // }
//     // console.log('After error', object)

//     // try {
//     // console.log(faultyFunction());
//     // } catch (e) {
//     //     console.log('catch', e)
//     // }
// }

// main()


// const promise1 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('response1');
//     }, 1000)
// })

// const promise2 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         resolve('response2');
//     }, 5000)
// })

// const promise3 = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         reject('response3');
//     }, 1000)
// })

// Promise.allSettled([promise2, promise3, promise1]).then((response) => {
//     console.log('response', response)
// })