"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
class Admin {
    constructor(id, password) {
        this._id = id;
        this._password = password;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}
exports.Admin = Admin;
