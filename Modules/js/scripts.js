
export class TrafficLight {

    static statuses = ['red', 'yellow', 'green'];
    #currentStatus = 0;
    publicProp = 'i am accesible'

    static statusToText(index) {

        if (index >= 0 && index < TrafficLight.statuses.length) {
            return TrafficLight.statuses[index];
        }
        return 'Invalid Index';
    }

    printStatus() {
        console.log(this.#currentStatus)
    }
}

// console.log(TrafficLight.statusToText(2))

// const instace = new TrafficLight();

// console.log(instace.#currentStatus)
// instace.printStatus();

// Create a new class called TrafficLight
// Create a static variable called statuses with the following array:
// [‘red’,’yellow’,’green’]

// Create a new static method called statusToText, that receives an index (0,1,2) and 
// returns the correlating text from statuses.

// Check that you can access this method without creating a class instance




// const classInstance1 = new MyClass();
// const classInstance2 = new MyClass();

// console.log(classInstance1.prop)

// classInstance1.changeProp()

// console.log(classInstance1.prop)
// console.log(MyClass.staticProp)
// console.log(MyClass.statusToText(1))


// function createCounter() {

//     let counter = 0;

//     return function () {
//         ++counter;
//         return counter;
//     }
// }

// const counterIncreaser1 = createCounter();
// const counterIncreaser2 = createCounter();

// console.log(counterIncreaser1())
// console.log(counterIncreaser1())
// console.log(counterIncreaser1())
// console.log(counterIncreaser2())
// console.log(counterIncreaser2())


// function multiplier(numberA) {

//     return function childFunction(numberB) {

//         return numberA * numberB;
//     }
// }


// const childFunction = multiplier(1.1);

// console.log(childFunction)

// const year1 = childFunction(10000);
// const year2 = childFunction(year1);
// const year3 = childFunction(year2);

// console.log('year1', year1)
// console.log('year2', year2)
// console.log('year3', year3)
// console.log(multiplierInstance1(5))
// console.log(multiplierInstance1(10))
// console.log(multiplierInstance1(20))


// console.log(multiplierInstance2(10))



// Create a function that receives a number as parameter “numberA” 
// and returns a closure function that receives a parameter “numberB” 
// The returned value of the closure function should be numberA*number
