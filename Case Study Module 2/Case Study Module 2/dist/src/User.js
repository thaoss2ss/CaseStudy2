"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const Admin_1 = require("./Admin");
class User extends Admin_1.Admin {
    constructor(id, password) {
        super(id, password);
    }
}
exports.User = User;
