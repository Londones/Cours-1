"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoList = void 0;
class ToDoList {
    constructor(items) {
        this.Items = items;
    }
    addItem(item) {
        this.Items.push(item);
    }
    itemNameIsUnique(name) {
        return this.Items.find(item => item.getName() === name) === undefined;
    }
    lastItemCreatedMoreThan30minutesAgo() {
        return this.Items[this.Items.length - 1].getCreationDate().getMinutes() - new Date().getMinutes() >= 30;
    }
    listContainsLessThan10Items() {
        return this.Items.length <= 10;
    }
    canAddThisItem(itemName) {
        return this.itemNameIsUnique(itemName) && this.lastItemCreatedMoreThan30minutesAgo() && this.listContainsLessThan10Items();
    }
    getItemsLength() {
        return this.Items.length;
    }
}
exports.ToDoList = ToDoList;
