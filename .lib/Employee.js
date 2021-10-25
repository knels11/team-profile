const Details = require('./Details');

class Employee extends Details {
    constructor(name = '') {
        super(name);
        this.experience = [new Details('3years'), new Details()];
    }
}

module.exports = Employee;