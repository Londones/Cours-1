class ToDoItem {
    private name: string;
    private content: string;
    private creationDate: Date;
        
    constructor(name: string, content: string) {
        this.name = name;
        this.content = content;
        this.creationDate = new Date();
    }

    itemContentIsLessThan1000Characters(): boolean {
        return this.content.length <= 1000;
    }
    
    getName(): string {
        return this.name;
    }

    getCreationDate(): Date {
        return this.creationDate;
    }
}