import { ToDoItem } from "./ToDoItem";
export class ToDoList {
    public Items: ToDoItem[];

    constructor(items: Array<ToDoItem>) {
        this.Items = items;
    }

    addItem(item: ToDoItem): void {
        this.Items.push(item);
    }

    itemNameIsUnique(name: string): boolean {
        return this.Items.find(item => item.getName() === name) === undefined;
    }

    lastItemCreatedMoreThan30minutesAgo(): boolean {
        return new Date().getTime() - this.Items[this.Items.length - 1].getCreationDate().getTime() >= 1800000;
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