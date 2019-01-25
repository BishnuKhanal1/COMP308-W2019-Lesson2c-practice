module objects {

    abstract class Person {
        //private instannt variables

        private _age: number;
        private _name: string;

        //public properties
        get name(): string {
            return this._name;
        }

        set name(newName: string) {
            this._name = newName;
        }
        get age(): number {
            return this._age;
        }
        set age(newAge: number) {
            this.age = newAge;
        }
        constructor(age: number, name: string) {
            this._age = age;
            this._name = name;
        }

        //private methods

        //public methods

        public saysHello() {
            console.log(`%c ${this.name} says hello!`, "font-size: 20px;");
        }
    }

   export class Student extends Person {
        //private instant variables
        private _studentID: string;


        //public properties
        get studentID(): string {
            return this._studentID;
        }
        set studentID(newID: string) {
            this._studentID = newID;
        }

        //constructor

        constructor(age: number, name: string, studentID: string) {
            super(age, name);
            this._studentID = studentID;
        }
        //private methods

        //public methods
        public studies() {
            console.log(`%c ${this.name} is studying and has a student ID ${this._studentID}`, "font-size:18px; color:green");
        }

    }

}
/*
const person = new Person(30, "Bishnu");
person.saysHello();*/
let student: objects.Student;

student = new objects.Student(30, "David", "D123456789");
student.saysHello();
student.studies();