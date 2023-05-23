"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToDoList_1 = require("./ToDoList");
const ToDoItem_1 = require("./ToDoItem");
describe("To do list validity", () => {
    test('should have a maximum of 10 items', () => {
        const listOfItems = [
            new ToDoItem_1.ToDoItem("item1", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem_1.ToDoItem("item2", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem_1.ToDoItem("item3", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem_1.ToDoItem("item4", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem_1.ToDoItem("item5", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem_1.ToDoItem("item6", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem_1.ToDoItem("item7", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem_1.ToDoItem("item8", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem_1.ToDoItem("item9", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem_1.ToDoItem("item10", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem_1.ToDoItem("item11", "Lorem Ipsum is simply dummy text of")
        ];
        const toDoList = new ToDoList_1.ToDoList(listOfItems);
        expect(toDoList.listContainsLessThan10Items()).toBe(false);
    });
    test('Test that an item cant be present twice in the to do list', () => {
        let positif = "item1";
        const listOfItems = [new ToDoItem_1.ToDoItem(positif, "Lorem Ipsum is simply dummy text of")];
        const toDoList = new ToDoList_1.ToDoList(listOfItems);
        expect(toDoList.itemNameIsUnique("gbjrkng")).toBe(true);
    });
    test('Test that an item cant be present twice in the to do list', () => {
        let negatif = "item2";
        const listOfItems = [new ToDoItem_1.ToDoItem(negatif, "Lorem Ipsum is simply dummy text of")];
        const toDoList = new ToDoList_1.ToDoList(listOfItems);
        expect(toDoList.itemNameIsUnique("item2")).toBe(false);
    });
});
