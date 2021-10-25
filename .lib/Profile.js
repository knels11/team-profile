const inquirer = require('inquirer');
const Employee = require('./Employee');
const Details = require('./Details');

function Profile() {
    this.employee;
    this.area;
    this.experience;
    this.age;
}

Profile.prototype.initializeProfile = function() {
    this.employee.push(new Employee('Sarah', 'frontend'));

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