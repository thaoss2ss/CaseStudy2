export class Admin {
    private _id: string;
    private _password: string;

    constructor(id: string, password: string) {
        this._id = id;
        this._password = password;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}