"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogInManagement = void 0;
class LogInManagement {
    constructor() {
        this.admins = [];
        this.users = [];
    }
    showAccountAdmin() {
        return this.admins;
    }
    addAdmin(admin) {
        return this.admins.push(admin);
    }
    addUser(user) {
        return this.users.push(user);
    }
    updateAdmin(id, newId) {
        this.admins.forEach((admin, index) => {
            if (admin.id === id) {
                this.admins[index] = newId;
            }
        });
        return this.admins;
    }
    checkAccountAdmin(id, password) {
        let flag = false;
        this.admins.forEach((admin, index) => {
            if (admin.id == id && admin.password == password) {
                return flag = true;
            }
        });
        return flag;
    }
    checkAccountUser(id, password) {
        let flag = false;
        this.users.forEach((user, index) => {
            if (user.id == id && user.password == password) {
                return flag = true;
            }
        });
        return flag;
    }
}
exports.LogInManagement = LogInManagement;
