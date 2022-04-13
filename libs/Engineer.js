const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, username) {
        //call parent constructor (Employee) here:
        super(name, id, email)

        this.username = username;
    }
    getGithubUser() {
        return this.username;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;