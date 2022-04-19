const Employee = require('../libs/Employee');
const employee = new Employee('Scot', '123456', 'sscotthompson@gmail.com');

test('test if we can get the values for the employee object', () => {
    expect(employee.name).toBe('Scot');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('sscotthompson@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Scot');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('123456');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('sscotthompson@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});