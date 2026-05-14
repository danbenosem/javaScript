const employee = { name: 'Dapo', role: 'Engineer', salary: 50000, department: 'Tech' };



function getEmployeeInfo(obj) {

  
     const { name, salary } = obj; 
     return Name: ${name}, Salary: ${salary};
}

console.log(getEmployeeInfo(employee)); 

