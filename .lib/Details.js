class Details{
    constructor(name = ''){
        this.name = name;
        this.area = area;
        this.level = level;
        this.age = age;
    }
    getExperience(){
        return `${this.name}'s experience is ${this.experience}'`;
    }
};
console.log(new Details().getExperience());

module.exports = Details;