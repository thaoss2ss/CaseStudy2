"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffManagement = void 0;
class StaffManagement {
    constructor() {
        this.staffs = [];
        this.salarys = [];
    }
    createStaff(staff) {
        this.staffs.push(staff);
    }
    getAllStaff() {
        console.table(this.staffs);
    }
    addSalary(salary) {
        this.salarys.push(salary);
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
            if (this.staffs[i].name == name) {
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
    roseMoney() {
        let totalRose = 0;
        this.staffs.forEach((staff, index) => {
            if (staff.workday > 26) {
                totalRose = (staff.workday - 26) * 200;
                console.log(this.staffs[index].name + " được thưởng :" + totalRose + " $ ");
            }
            else if (staff.workday < 26) {
                totalRose = (26 - staff.workday) * 100;
                console.log(this.staffs[index].name + " bị phạt : " + totalRose + " $ ");
            }
            else {
                totalRose = 0;
                console.log(this.staffs[index].name + " tiền thưởng là :" + totalRose + " $ ");
            }
        });
    }
    salaryOfStaff() {
        let totalSalary = 0;
        this.staffs.forEach((staff, index) => {
            this.salarys.forEach((salary, index) => {
                if (staff.position === "GIAM DOC") {
                    totalSalary = this.staffs[index].workday * salary.salaryManager;
                }
                else if (staff.position === "PHO GIAM DOC") {
                    totalSalary = this.staffs[index].workday * salary.salaryVicePresident;
                }
                else if (staff.position === "GIAM DOC NHAN SU") {
                    totalSalary = this.staffs[index].workday * salary.salaryHumanResourcesManager;
                }
                else if (staff.position === "NHAN VIEN HANH CHINH") {
                    totalSalary = this.staffs[index].workday * salary.salaryAdministrativeStaffPersonnel;
                }
                else if (staff.position === "NHAN VIEN KE TOAN") {
                    totalSalary = this.staffs[index].workday * salary.salaryAccountingStaff;
                }
                else if (staff.position === "NHAN VIEN KINH DOANH") {
                    totalSalary = this.staffs[index].workday * salary.salaryBusinessStaff;
                }
                else if (staff.position === "NHAN VIEN MARKETING") {
                    totalSalary = this.staffs[index].workday * salary.salaryMarketingStaff;
                }
                else {
                    totalSalary = this.staffs[index].workday * salary.salarySecurity;
                }
            });
            console.log("Lương của " + this.staffs[index].name + " là : " + totalSalary + " $ ");
        });
    }
}
exports.StaffManagement = StaffManagement;
