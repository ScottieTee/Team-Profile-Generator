const Engineer = require('../libs/Engineer');
const engineer = new Engineer('Scot', '123456', 'sscotthompson@gmail.com', 'scottietee');

test('test if we can get the values for the engineer object', () => {
    expect(engineer.name).toBe('Scot');
    expect(engineer.id).toBe('123456');
    expect(engineer.email).toBe('sscotthompson@gmail.com');
    expect(engineer.githubUser).toBe('scottietee')
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Scot');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('123456');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('sscotthompson@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Employee');
});