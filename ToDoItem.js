"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoItem = void 0;
class ToDoItem {
    constructor(name, content) {
        this.name = name;
        this.content = content;
        this.creationDate = new Date();
    }
    itemContentIsLessThan1000Characters() {
        return this.content.length <= 1000;
    }
    getName() {
        return this.name;
    }
    getCreationDate() {
        return this.creationDate;
    }
}
exports.ToDoItem = ToDoItem;
