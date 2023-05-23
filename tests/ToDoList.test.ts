import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";

describe("To do list validity", () => {
    test('should have a maximum of 10 items', () => {
        const listOfItems = [
            new ToDoItem("item1", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem("item2", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem("item3", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem("item4", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem("item5", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem("item6", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem("item7", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem("item8", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem("item9", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem("item10", "Lorem Ipsum is simply dummy text of"),
            new ToDoItem("item11", "Lorem Ipsum is simply dummy text of")];
        const toDoList = new ToDoList(listOfItems);
        expect(toDoList.listContainsLessThan10Items()).toBe(false);
    });


    test('Test that an item cant be present twice in the to do list', () => {
        let positif = "item1";
        const listOfItems = [new ToDoItem(positif, "Lorem Ipsum is simply dummy text of")];
        const toDoList = new ToDoList(listOfItems);
        expect(toDoList.itemNameIsUnique("gbjrkng")).toBe(true);
    });

    test('Test that an item cant be present twice in the to do list', () => {
        let negatif = "item2";
        const listOfItems = [new ToDoItem(negatif, "Lorem Ipsum is simply dummy text of")];
        const toDoList = new ToDoList(listOfItems);
        expect(toDoList.itemNameIsUnique("item2")).toBe(false);
    });

    test('Test that an item cant be added if the last item was added less than 30 minutes ago', () => {
        const listOfItems = [new ToDoItem("item1", "Lorem Ipsum is simply dummy text of")];
        const toDoList = new ToDoList(listOfItems);
        expect(toDoList.lastItemCreatedMoreThan30minutesAgo()).toBe(false);
    });

    test('Test that an item can be added if the last item was added more than 30 minutes ago', () => {
        const listOfItems = [new ToDoItem("item1", "Lorem Ipsum is simply dummy text of")];
        const toDoList = new ToDoList(listOfItems);
        toDoList.Items[0].setCreationDate(new Date(2019, 0, 1));
        expect(toDoList.lastItemCreatedMoreThan30minutesAgo()).toBe(true);
    });

    test('Test that an item can be added', () => {
        const listOfItems = [new ToDoItem("item1", "Lorem Ipsum is simply dummy text of")];
        const toDoList = new ToDoList(listOfItems);
        toDoList.Items[0].setCreationDate(new Date(2019, 0, 1));
        expect(toDoList.canAddThisItem("item2")).toBe(true);
    });
});