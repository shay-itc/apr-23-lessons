
// class Animal {

//     weight;
//     gender;
// }

// class Lion extends Animal {

//     fangsLength;

//     print() {
//         console.log('Lion')
//     }
// }

// class Bird extends Animal {

//     WingsSpan;
//     color;
// }

// class Raven extends Bird {
//     customProperties;

//     print() {
//         console.log('This is a different functionality')
//     }
// }

// class User {

//     username;
//     password;
//     email;

//     constructor(username, password, email) {
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

//     sendEmail(content) {
//         console.log('Sending an email to ' + this.email, content);
//     }

//     deleteUser() {

//     }
// }

// const myUser1 = new User('shay', '123123', 'shay@itc.tech');
// const myUser2 = new User('shay', '123123', 'shay@itc.tech');
// myUser1.sendEmail("Hello world")

// const myClassInstance1 = new Animal();
// const myClassInstance2 = new Lion();
// const myClassInstance3 = new Bird();
// const myClassInstance4 = new Raven();

// console.log(myClassInstance1)
// console.log(myClassInstance2)
// console.log(myClassInstance3)
// console.log(myClassInstance4)


// student class
// name property
// birthdate
// subject
// isBirthday
// getAge


// class Student {

//     constructor(name, birthdate, subject) {
//         this.name = name;
//         this.birthdate = new Date(birthdate);
//         this.subject = subject;
//     }

//     getAge() {
//         return new Date().getFullYear() - this.birthdate.getFullYear()
//     }

//     isBirthday() {

//         const today = new Date();

//         if (this.birthdate.getMonth() == today.getMonth() &&
//             this.birthdate.getDate() == today.getDate()) {
//             return true
//         }

//         return false;
//     }
// }

// const myStudent = new Student('Moshe', '1990-06-02 10:00:00', 'Full Stack');
// const myStudent2 = new Student('Ron', '1995-01-01 10:00:00', 'Full Stack');

// console.log(myStudent.isBirthday())
// console.log(myStudent2.isBirthday())

class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    createUserTitle() {

        const title = document.createElement('h1');
        title.innerHTML = this.fullName();
        return title;
    }
}

class Teacher extends Person {

    prop1 = 'value1';
    prop2 = 'value2';

    constructor(firstName, lastName, prop1) {
        super(firstName, lastName)
        this.prop1 = prop1;
    }

    fullName() {
        return 'Override method';
    }
}

class Student extends Person {

    prop2 = 'value2';

    constructor(firstName, lastName, prop1) {
        super(firstName, lastName)
        this.prop1 = prop1;
        this.newProp = 'something';
    }

    fullName() {
        return 'Override method';
    }
}

window.addEventListener('load', () => {

    document.getElementById('click').addEventListener('click', () => {

        const newPerson = new Teacher(document.getElementById('myinput').value)
        console.log(newPerson)
        console.log(newPerson.fullName())

    })
})


// console.log(personInstance.createUserTitle())




// Add another property called “last_name” and save it to the property using the constructor
// Add a method called “fullName” that returns the value of the first + last name combined
// Call fullname and print it
