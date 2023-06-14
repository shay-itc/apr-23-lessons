import { TrafficLight } from "./scripts.js";



const object = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
}

// const object2 = object;
// console.log({...object})

// object.key1
// object.key2
// object.key3

// const { key1: key4, key2, key3 } = object;

function testFunction({ key1, key2, key3 }) {
    console.log(key1, key2, key3)
}

testFunction(object)

// import { someFunction, STATUSES } from "./exports.js";

// someFunction()

// console.log(STATUSES)

// const classA = new ClassA();
// const classB = new ClassB();
// const bla = new Bla();

// classA.method()
// classB.method()
// bla.method()
