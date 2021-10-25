//github getGithub getRole// overridden to return engineer
const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name = ''){
        super(name);
        this.github = github;
    }
    getGithub(){
        return{
            github: this.github
        };
    }
    getRole(){
        return `${this.name}, Engineer `;
    }
}

module.exports = Engineer;