

// add the following methods:
// fullName – returns the combination of firstName and lastName
// introduceSelf  - prints ‘Hi I am {fullName}’  

// Use a constructor to inject the variables to the class properties 


class Person {

    firstName;
    lastName;
    birthDate;

    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new Date(birthDate);
    }

    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    inroduceSelf() {
        console.log(`Hi I am ${this.fullName()}`)
    }

}

class Student extends Person {

    studySubjects = [];

    constructor(firstName, lastName, birthDate, year) {
        super(firstName, lastName, birthDate);

        this.year = year;
    }

    addStudySubjcet(subject) {
        this.studySubjects.push(subject);
    }

    removeStudySubject(subject) {

        const index = this.studySubjects.indexOf(subject);
        if (index > -1) {
            this.studySubjects.splice(index, 1);
        }
    }

    inroduceSelf() {
        console.log(`Hi!,
I am ${this.fullName()}, I study: ${this.studySubjects.join(', ')}.
I am in my ${this.year} year!.`);
    }

    assignClass(assignedClass) {
        this.assignedClass = assignedClass;
    }

    render() {
        const elem = document.createElement('p');
        elem.innerHTML = 'Student: ' + this.fullName();

        return elem;
    }
}

// Create a new Teacher class, extending the Person class.
// Teacher class should have the following additional properties:

// teachingSubject – string
// yearsExperience – number

// Add these properties in the constructor
class Teacher extends Person {

    constructor(firstName, lastName, birthDate, teachingSubject, yearsExperience) {
        super(firstName, lastName, birthDate);
        this.teachingSubject = teachingSubject;
        this.yearsExperience = yearsExperience;
    }

    render() {
        const elem = document.createElement('p');
        elem.innerHTML = 'Teacher: ' + this.fullName();

        return elem;
    }

}

class Class {

    classStudents = [];

    constructor(classTeacher) {
        this.classTeacher = classTeacher;
    }

    addStudent(student) {
        this.classStudents.push(student);
    }

    render() {

        const classContainer = document.createElement('div');

        classContainer.appendChild(this.classTeacher.render());

        this.classStudents.forEach((student) => {
            classContainer.appendChild(student.render());
        })

        return classContainer;
    }
}

const studentInstance = new Student('Mosh', 'Test', '2000-01-01', 2);
const studentInstance2 = new Student('Mosh2', 'Test2', '2000-01-01', 4);
const studentInstance3 = new Student('Mosh3', 'Test2', '2000-01-01', 4);
const studentInstance4 = new Student('Mosh4', 'Test2', '2000-01-01', 4);
const teacherInstance = new Teacher('Teacher 1', 'Last name', 'Math', '2000-01-01', 5);
const class1 = new Class(teacherInstance);
class1.addStudent(studentInstance)
class1.addStudent(studentInstance2)
class1.addStudent(studentInstance3)
class1.addStudent(studentInstance4)
studentInstance.assignClass(class1);

console.log(studentInstance)

studentInstance.addStudySubjcet('math');
studentInstance.addStudySubjcet('english');
studentInstance.addStudySubjcet('subject1');
studentInstance.addStudySubjcet('subject2');
studentInstance.addStudySubjcet('subject3');

studentInstance.removeStudySubject('subject1');


studentInstance2.addStudySubjcet('newSubject 1')
studentInstance2.addStudySubjcet('newSubject 2')
studentInstance2.addStudySubjcet('newSubject 3')
studentInstance2.addStudySubjcet('newSubject 3')

window.onload = () => {

    document.getElementById('container').appendChild(class1.render())
}


// Create a new Class class, this class should be able to 
// reference to both the teacher class and the 
// students to do so create the following properties:

// classTeacher
// classStudents

// In the constructor pass the teacher object and save it to 
// classTeacher and initiate classStudents as an empty array

