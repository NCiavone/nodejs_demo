/**
 * Student Class -- storing student record
 * student name, student age, student gpa
 * method -- greetinfg message using the student name
 */

class Student {
    constructor (studentName, studentAge, studentGPA){
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGPA = studentGPA;
    }

    giveGreeting(){
        console.log('Hello $(this.studentName)...');
    }

}

module.exports = Student;
