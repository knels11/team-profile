const inquirer = require('inquirer');
const Employee = require('./Employee');

function Profile() {
    this.employee;
    this.role;
}

Profile.prototype.initializeProfile = function() {
    this.employee.push(new Employee('Sarah', 'frontend'));
    this.currentEmployee = this.employees[0];

    inquirer
    .prompt({
        type:'text',
        name: 'experience',
        message: 'How many years of experience do you have?'
    })

    .then (( { name }) => {
        this.employee = new Employee(name);
        this.initializeProfile();
    });
}