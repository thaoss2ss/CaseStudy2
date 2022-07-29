import {Admin} from "./Admin";

export class User extends Admin {

    constructor(id: string, password: string) {
        super(id, password);
    }

}