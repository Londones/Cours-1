import { ToDoItem } from "../ToDoItem";

describe("ToDoItem validity", () => {
    test('should have valid content (<1000 characters)', () => {
        const item = new ToDoItem('MyItem', 'MyContent');
        expect(item.itemContentIsLessThan1000Characters()).toBe(true);
    });
});