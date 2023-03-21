class person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getname() {
    return this.name;
  }
}
class student extends person {
  rollnumber: string;
  courses: course[] = [];
  constructor(name: string, age: number, rollnumber: string) {
    super(name, age);
    this.rollnumber = rollnumber;
  }
  registerforcources(course: course) {
    this.courses.push(course);
  }
}
const student1 = new student(`adeel`, 22, `student1`);
//student1.registerforcources(`web`);

class instructor extends person {
  private salary: number;
  courses: course[] = [];
  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }
  assigncourse(course: course) {
    this.courses.push(course);
  }
}
const instructor1 = new instructor(`zia`, 45, 1000);
//instructor1.assigncourse(`metaverse`);

class course {
  id: string;
  name: string;
  students: student[] = [];
  instructor!: instructor;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  addstudent(student: student) {
    this.students.push(student);
    student.registerforcources(this);
  }
  setinstructor(instructor: instructor) {
    this.instructor = instructor;
    instructor.assigncourse(this);
  }
}

const courses1 = new course(`abc123`, `BCC`);
courses1.addstudent(student1);
courses1.setinstructor(instructor1);

class department {
  name: string;
  courses: course[] = [];
  constructor(name: string) {
    this.name = name;
  }
  addcourses(course: course) {
    this.courses.push(course);
  }
}

const department1 = new department(`computer`);
department1.addcourses(courses1);
console.log(department1);
console.log(department1.addcourses);
