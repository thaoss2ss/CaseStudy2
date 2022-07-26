"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffManagement = void 0;
class StaffManagement {
    constructor() {
        this.staffs = [];
    }
    createStaff(staff) {
        this.staffs.push(staff);
    }
    getAllStaff() {
        console.table(this.staffs);
    }
    updateStaff(index, newStaff) {
        this.staffs[index] = newStaff;
    }
    deleteStaff(index) {
        this.staffs.splice(index, 1);
    }
    findNameStaff(name) {
        let flag = -1;
        let nameStaffList = [];
        for (let i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].name === name) {
                flag++;
                nameStaffList.push(this.staffs[i]);
            }
        }
        console.table(nameStaffList);
    }
    findPositionStaff(position) {
        let flag2 = -1;
        let positionStaffList = [];
        for (let i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].position === position) {
                flag2++;
                positionStaffList.push(this.staffs[i]);
            }
        }
        console.table(positionStaffList);
    }
    findDepartmentStaff(department) {
        let flag3 = -1;
        let departmentStaffList = [];
        for (let i = 0; i < this.staffs.length; i++) {
            if (this.staffs[i].department === department) {
                flag3++;
                departmentStaffList.push(this.staffs[i]);
            }
        }
        console.table(departmentStaffList);
    }
    sortByAgeStaff() {
        let flag1;
        for (let i = 0; i < this.staffs.length; i++) {
            flag1 = true;
            for (let j = 0; j < this.staffs.length - 1; j++) {
                if (this.staffs[j].age > this.staffs[j + 1].age) {
                    let temp = this.staffs[j];
                    this.staffs[j] = this.staffs[j + 1];
                    this.staffs[j + 1] = temp;
                    flag1 = false;
                }
            }
            if (flag1)
                break;
        }
        console.table(this.staffs);
    }
    sortByNameStaff() {
        this.staffs.sort(function (a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            return 0;
        });
        console.table(this.staffs);
    }
    sortByPositionStaff() {
        this.staffs.sort(function (a, b) {
            if (a.position.toLowerCase() < b.position.toLowerCase()) {
                return -1;
            }
            if (a.position.toLowerCase() > b.position.toLowerCase()) {
                return 1;
            }
            return 0;
        });
        console.table(this.staffs);
    }
}
exports.StaffManagement = StaffManagement;
