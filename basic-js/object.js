var student = { id:121, phone:0174, name:"Abir"};

var student2 = {id:131, phone:234, name:"Mahi"};


var phonePropertyName = "phone";
var phoneNo1 = student["phone"];
var phoneNo2 = student.phone
var phoneNo3 = student[phonePropertyName];

// Update property value
student2.phone = 443566;
student2["phone"] = 863974;
student2[phonePropertyName] = 569837479;

// Adding new property
student2.cinema = "Agni22";
console.log(student2);
console.log(phoneNo1);

