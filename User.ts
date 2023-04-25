import { ExternalAPI } from "./ExternalAPI";
import { ToDoList } from "./ToDoList";
import { EmailSenderService } from "./EmailSenderService";
import { ToDoItem } from "./ToDoItem";

export class User {
    private name: string;
    private surname: string;
    private birthDate: string;
    private email: string;
    private password: string;
    private toDoList: ToDoList;
    private emailSenderService: EmailSenderService;
    private externalAPI: ExternalAPI;

    constructor(name: string, surname: string, birthDate: string, email: string, password: string) {
        this.name = name;
        this.surname = surname;
        this.birthDate = birthDate;
        this.email = email;
        this.password = password;
        this.toDoList = new ToDoList(new Array<ToDoItem>());
        this.emailSenderService = new EmailSenderService();
        this.externalAPI = new ExternalAPI();
    }

    checkEmail(): boolean {
        return this.externalAPI.checkEmail(this.email);
    }

    isValidPassword(): boolean {
        if (this.password === null) return false;
        return this.password.match(/^(?=.*\d)(?=.*[A-Z]).{8,40}$/) !== null;
    }

    isOver13(): boolean {
        const thirteenYearsAgo = new Date();
        thirteenYearsAgo.setFullYear(thirteenYearsAgo.getFullYear() - 13);
        return thirteenYearsAgo.getFullYear() >= this.stringToDate(this.birthDate).getFullYear();
    }

    stringToDate(date: string): Date {
        const dateParts = date.split('/');
        return new Date(+dateParts[2], +dateParts[1] - 1, +dateParts[0]);
    }

    isNotEmpty(): boolean {
        return this.name !== "" && this.surname !== "" && this.email !== "" && this.password !== "";
    }

    isValid(): boolean {
        return this.isNotEmpty() && this.checkEmail() && this.isOver13() && this.isValidPassword();
    }

    canAddThisItem(item: string): boolean {
        return this.isValid() && this.toDoList.canAddThisItem(item);
    }

    addItem(item: ToDoItem): void {
        if (this.canAddThisItem(item.getName())) {
            if (this.toDoList.getItemsLength() === 8) {
                this.emailSenderService.sendEmail(this.email, "You have 2 items left to add to your ToDoList");
            }
            this.toDoList.addItem(item);
        }
    }

}