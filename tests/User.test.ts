import { User } from "../User";
import { ToDoItem } from "../ToDoItem";
const mockExternalAPI = jest.fn().mockImplementation(() => true);
jest.mock("../ExternalAPI", () => {
    return {
        ExternalAPI: jest.fn().mockImplementation(() => {
            return { checkEmail: mockExternalAPI };
        })
    };
});

const mockEmailSenderService = jest.fn().mockImplementation(() => "You have 2 items left to add to your ToDoList");
jest.mock("../EmailSenderService", () => {
    return {
        EmailSenderService: jest.fn().mockImplementation(() => {
            return { sendEmail: mockEmailSenderService };
        })
    };
});

const mockToDoList = jest.fn().mockImplementation(() => true);
const mockItemLength = jest.fn().mockImplementation(() => 8);
const mockAddItem = jest.fn();
jest.mock("../ToDoList", () => {
    return {
        ToDoList: jest.fn().mockImplementation(() => {
            return {
                canAddThisItem: mockToDoList,
                getItemsLength: mockItemLength,
                addItem: mockAddItem
            };
        })
    };
});

describe("User validity", () => {
    test('should have valid password', () => {
        const user = new User('John', 'Doe', '01/01/2000', 'XXX', 'MyPassword123');
        expect(user.isValidPassword()).toBe(true);
    });


    test('should have valid information', () => {
        const user = new User('John', 'Doe', '01/01/2000', 'johndo@gmail.com', 'MyPassword123');
        expect(user.isValid()).toBe(true);
    });

    test('should have invalid birth date', () => {
        const user = new User('John', 'Doe', '01/01/2011', 'johndoes@gmail.com', 'MyPassword123');
        expect(user.isValid()).toBe(false);
    });

    test('should have empty information', () => {
        const user = new User("", "", "", "", "");
        expect(user.isValid()).toBe(false);
    });
});

describe("User ToDoList", () => {
    test('should not be able to add item', () => {
        const user = new User('John', 'Doe', '01/01/2011', 'johndo@gmail.com', 'MyPassword123');
        expect(user.canAddThisItem("item")).toBe(false);
    });

    test('should be able to add item', () => {
        const user = new User('John', 'Doe', '01/01/2000', 'johdoes@gmail.com', 'MyPassword123');
        expect(user.canAddThisItem("item")).toBe(true);
    });

    test('should have called sendEmail', () => {
        const user = new User('John', 'Doe', '01/01/2000', 'jod@gmail.com', 'MyPassword123');
        const item = new ToDoItem("item", "description");
        user.addItem(item);
        expect(mockEmailSenderService).toHaveBeenCalled();
    });

    test('should have called addItem', () => {
        const user = new User('John', 'Doe', '01/01/2000', 'jod@gmail.com', 'MyPassword123');
        const item = new ToDoItem("item", "description");
        user.addItem(item);
        expect(mockAddItem).toHaveBeenCalled();
    });
});