class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Kolimunnesa school";
    }
}

const student1 = new Student(12, "Monirul");
const student2 = new Student(32, "Islam");
const student2 = new Student(29, "Jhankar");

console.log(student1,student2);
console.log(student1.id,student2.name);