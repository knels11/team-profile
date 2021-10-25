//officeNumber
//getRole overridden to return Manager
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name = ''){
        super(name);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return `${this.name}, Manager `;
    }
}
module.exports = Manager;