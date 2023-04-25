import { ToDoItem } from "./ToDoItem";
export class ToDoList {
    public Items: ToDoItem[];

    constructor(items: Array) {
        this.Items = items;
    }

    addItem(item: ToDoItem): void {
        this.Items.push(item);
    }

    itemNameIsUnique(name: string): boolean {
        return this.Items.find(item => item.getName() === name) === undefined;
    }

    lastItemCreatedMoreThan30minutesAgo(): boolean {
        return this.Items[this.Items.length - 1].getCreationDate().getMinutes() - new Date().getMinutes() >= 30;
    }

    listContainsLessThan10Items(): boolean {
        return this.Items.length <= 10;
    }

    canAddThisItem(itemName: string): boolean {
        return this.itemNameIsUnique(itemName) && this.lastItemCreatedMoreThan30minutesAgo() && this.listContainsLessThan10Items();
    }

    getItemsLength(): number {
        return this.Items.length;
    }
}