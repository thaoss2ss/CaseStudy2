import {User} from "./User";
import {Admin} from "./Admin";

export class LogInManagement {
    admins: Admin[] = [];
    users: User[] = [];

    showAccountAdmin() {
        return this.admins;
    }

    addAdmin(admin: Admin) {
        return this.admins.push(admin);
    }
    addUser(user: User) {
        return this.users.push(user);
    }

    updateAdmin(id: string, newId: Admin) {
        this.admins.forEach((admin, index) => {
            if (admin.id === id) {
                this.admins[index] = newId;
            }
        })
        return this.admins;
    }

    checkAccountAdmin(id: string, password: string): boolean {
        let flag = false;
        this.admins.forEach((admin, index) => {
            if (admin.id == id && admin.password == password) {
                return flag = true;
            }
        })
        return flag;
    }
    checkAccountUser(id: string, password: string): boolean {
        let flag = false;
        this.users.forEach((user,index) => {
            if (user.id == id && user.password == password) {
                return flag = true;
            }
        })
        return flag;
    }
}