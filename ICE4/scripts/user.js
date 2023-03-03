<<<<<<< HEAD
/*
* Class to create new user
 */
export class User {

    /**
     * User
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} username
     * @param {string} email
     * @param {string} password
     */
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    /**
     * @property {function} displayUser Prints users details: user name, username, email, and password
     * @returns {string}
     */
    displayUser() {
         return `Name: ${this.firstName}${this.lastName}
         Username: ${this.username}
         Email: ${this.email}
         Password: ${this.password}`
    }
=======
/*
* Class to create new user
 */
export class User {

    /**
     * User
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} username
     * @param {string} email
     * @param {string} password
     */
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    /**
     * @property {function} displayUser Prints users details: user name, username, email, and password
     * @returns {string}
     */
    displayUser() {
         return `Name: ${this.firstName}${this.lastName}
         Username: ${this.username}
         Email: ${this.email}
         Password: ${this.password}`
    }
>>>>>>> 09c30990bb9cd3db5881eb923bf77f2b41680a73
}