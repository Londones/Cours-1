"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const ToDoList_1 = require("./ToDoList");
const EmailSenderService_1 = require("./EmailSenderService");
class User {
    constructor(name, surname, birthDate, email, password) {
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        this.toDoList = new ToDoList_1.ToDoList();
        this.emailSenderService = new EmailSenderService_1.EmailSenderService();
    }
    isValidEmail() {
        if (this.email === null)
            return false;
        return this.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
    }
    isValidPassword() {
        if (this.password === null)
            return false;
        return this.password.match(/^(?=.*\d)(?=.*[A-Z]).{8,40}$/) !== null;
    }
    isOver13() {
        const thirteenYearsAgo = new Date();
        thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13);
        return thirteenYearsAgo.getFullYear() >= this.stringToDate(this.birthDate).getFullYear();
    }
    stringToDate(date) {
        const dateParts = date.split('/');
        return new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
    }
    isNotEmpty() {
        return this.name !== "" && this.surname !== "" && this.email !== "" && this.password !== "";
    }
    isValid() {
        return this.isNotEmpty() && this.isValidEmail() && this.isOver13() && this.isValidPassword();
    }
    canAddThisItem(item) {
        return this.isValid() && this.toDoList.canAddThisItem(item);
    }
    addItem(item) {
        if (this.canAddThisItem(item.getName())) {
            if (this.toDoList.getItemsLength() === 8) {
                this.emailSenderService.sendEmail(this.email, "You have 2 items left to add to your ToDoList");
            }
            this.toDoList.addItem(item);
        }
    }
}
exports.User = User;
