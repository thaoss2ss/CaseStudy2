"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = void 0;
class Staff {
    constructor(name, age, email, phone, position, department, workday) {
        this._name = name;
        this._age = age;
        this._email = email;
        this._phone = phone;
        this._position = position;
        this._department = department;
        this._workday = workday;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
    }
    get department() {
        return this._department;
    }
    set department(value) {
        this._department = value;
    }
    get workday() {
        return this._workday;
    }
    set workday(value) {
        this._workday = value;
    }
}
exports.Staff = Staff;
