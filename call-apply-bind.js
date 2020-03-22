var student1 = { 'name' : 'saichandan' , 'role' : 'sds' , 'project' : 'sfsfs'};
var student2 = { 'name' : 'rahul'};
var student3 = { 'name' : 'vikram'};


// function joinValueMomentum(s) {
//     console.log("Value Momentum selected " + s.name + "as " + s.role + "for " + s.project);
// }


function joinValueMomentum(role, project) {
    console.log("Value Momentum selected " + this.name + "as " + role + "for " + project);
}
// joinValueMomentum.call(student1, "Software Engineer", "Project 1");
// joinValueMomentum.apply(student2, ["Software Engineer", "Project 2"]);
var lateJoining =  joinValueMomentum.bind(student3);
// if(dkjfhjk === 'true') 
lateJoining("Software Engineer", "Project 3");
// }