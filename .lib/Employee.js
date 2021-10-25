class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return `${this.name}`;
    }
    getId(){
        return `${this.id}`;
    }
    getEmail(){
        return `${this.email}`;
    }
    getRole(){
        return `${this.role}`;
    }
    //getEmployee(){
        //return `${this.employee}`;
    //}
};
console.log(new Employee());

module.exports = Employee;


//employee parent class, name id email getName getId getEmail getRole