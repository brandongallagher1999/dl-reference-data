import IModel from "./IModel";

export class UpdateTagRequest implements IModel {
    id: number;
    name: string;
    userId: number;

    constructor(id: number, name: string, userId: number) {
        this.id = id;
        this.name = name;
        this.userId = userId;
    }
}

export class NewTagRequest implements IModel {
    name: string;
    userId: number;

    constructor(name: string, userId: number) {
        this.name = name;
        this.userId = userId;
    }
}