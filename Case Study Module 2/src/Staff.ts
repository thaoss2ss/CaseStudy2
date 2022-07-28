export class Staff {


    private _name: string;
    private _age: number;
    private _email: string;
    private _phone: string;
    private _position: string;
    private _department: string;
    private _workday: number;


    constructor(name: string, age: number, email: string, phone: string, position: string, department: string, workday: number) {
        this._name = name;
        this._age = age;
        this._email = email;
        this._phone = phone;
        this._position = position;
        this._department = department;
        this._workday = workday;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get position(): string {
        return this._position;
    }

    set position(value: string) {
        this._position = value;
    }

    get department(): string {
        return this._department;
    }

    set department(value: string) {
        this._department = value;
    }

    get workday(): number {
        return this._workday;
    }

    set workday(value: number) {
        this._workday = value;
    }
}