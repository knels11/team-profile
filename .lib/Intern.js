//school getSchool getRole//overridden to return intern
const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name = ''){
        super(name);
        this.school = school;
    }
    getSchool(){
        return `${this.name} attended school at ${this.school}.`;
    }
    getRole(){
        return `${this.name}, Intern`;
    }
}
module.exports = Intern;