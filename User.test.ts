import { User } from "./User";

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