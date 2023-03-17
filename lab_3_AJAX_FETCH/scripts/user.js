// Created By Akhil John Sunny
// Date 27 Feb 2023
// Student ID :100850105
/*
* Class to create new user
 */
export class User {

    /**
     * Constructor to create a user object
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
}