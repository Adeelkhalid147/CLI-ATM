class person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getname() {
        return this.name;
    }
}
class student extends person {
    rollnumber;
    courses = [];
    constructor(name, age, rollnumber) {
        super(name, age);
        this.rollnumber = rollnumber;
    }
    registerforcources(course) {
        this.courses.push(course);
    }
}
const student1 = new student(`adeel`, 22, `student1`);
//student1.registerforcources(`web`);
class instructor extends person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assigncourse(course) {
        this.courses.push(course);
    }
}
const instructor1 = new instructor(`zia`, 45, 1000);
//instructor1.assigncourse(`metaverse`);
class course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addstudent(student) {
        this.students.push(student);
        student.registerforcources(this);
    }
    setinstructor(instructor) {
        this.instructor = instructor;
        instructor.assigncourse(this);
    }
}
const courses1 = new course(`abc123`, `BCC`);
courses1.addstudent(student1);
courses1.setinstructor(instructor1);
class department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addcourses(course) {
        this.courses.push(course);
    }
}
const department1 = new department(`computer`);
department1.addcourses(courses1);
console.log(department1);
console.log(department1.addcourses);
export {};
