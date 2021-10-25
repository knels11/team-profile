const Employee = require('../.lib/Employee');
const Details = require('../.lib/Details');

jest.mock('../.lib/Details');
console.log(new Details());

test('creates a employee object', () => {
    const employee = new Employee('Sarah');

    expect(employee.name).toBe('Sarah');
    expect(employee.age).toBe('26');
    expect(employee.level).toBe('junior');
    expect(employee.area).toBe('frontend');
    expect(employee.experience).toEqual(expect.any(String));
});