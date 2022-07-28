"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rl = __importStar(require("readline-sync"));
const Staff_Management_1 = require("./src/Staff-Management");
const Staff_1 = require("./src/Staff");
const SalaryStaff_1 = require("./src/SalaryStaff");
var ChoiceStaff;
(function (ChoiceStaff) {
    ChoiceStaff[ChoiceStaff["EXIT"] = 0] = "EXIT";
    ChoiceStaff[ChoiceStaff["CREATE"] = 1] = "CREATE";
    ChoiceStaff[ChoiceStaff["SHOW"] = 2] = "SHOW";
    ChoiceStaff[ChoiceStaff["UPDATE"] = 3] = "UPDATE";
    ChoiceStaff[ChoiceStaff["DELETE"] = 4] = "DELETE";
    ChoiceStaff[ChoiceStaff["FIND"] = 5] = "FIND";
    ChoiceStaff[ChoiceStaff["SORT"] = 6] = "SORT";
    ChoiceStaff[ChoiceStaff["SALARY"] = 7] = "SALARY";
})(ChoiceStaff || (ChoiceStaff = {}));
var ChoiceOfSort;
(function (ChoiceOfSort) {
    ChoiceOfSort[ChoiceOfSort["EXIT"] = 0] = "EXIT";
    ChoiceOfSort[ChoiceOfSort["AGE"] = 1] = "AGE";
    ChoiceOfSort[ChoiceOfSort["NAME"] = 2] = "NAME";
    ChoiceOfSort[ChoiceOfSort["POSITION"] = 3] = "POSITION";
})(ChoiceOfSort || (ChoiceOfSort = {}));
var ChoiceOfFind;
(function (ChoiceOfFind) {
    ChoiceOfFind[ChoiceOfFind["EXIT"] = 0] = "EXIT";
    ChoiceOfFind[ChoiceOfFind["NAME"] = 1] = "NAME";
    ChoiceOfFind[ChoiceOfFind["POSITION"] = 2] = "POSITION";
    ChoiceOfFind[ChoiceOfFind["DEPARTMENT"] = 3] = "DEPARTMENT";
})(ChoiceOfFind || (ChoiceOfFind = {}));
var ChoiceOfSalary;
(function (ChoiceOfSalary) {
    ChoiceOfSalary[ChoiceOfSalary["EXIT"] = 0] = "EXIT";
    ChoiceOfSalary[ChoiceOfSalary["SALARY1"] = 1] = "SALARY1";
    ChoiceOfSalary[ChoiceOfSalary["MONEY"] = 2] = "MONEY";
})(ChoiceOfSalary || (ChoiceOfSalary = {}));
let choice = -1;
let staffManagement = new Staff_Management_1.StaffManagement();
let staff1 = new Staff_1.Staff("Thao", 25, "thao@gmail.com", "0977969016", "Manager", "Regent", 26);
let staff2 = new Staff_1.Staff("Ngọc", 26, "ngoc@gmail.com", "0925682468", "Human resources manager", "Human Resource", 25);
let staff3 = new Staff_1.Staff("Tuyến", 27, "tuyen@gmail.com", "0925784685", "Vice President", "Regent", 24);
let staff4 = new Staff_1.Staff("Huyền", 24, "Huyen@gmail.com", "0925648768", "Business Staff", "Sales", 27);
let staff5 = new Staff_1.Staff("Hùng", 22, "hung@gmail.com", "0932645876", "Business Staff", "Sales", 28);
let staff6 = new Staff_1.Staff("Hoa", 23, "hoa@gmail.com", "0987543513", "Marketing staff", "Marketing", 26);
let staff7 = new Staff_1.Staff("Lan", 23, "lan@gmail.com", "0965842351", "Marketing staff", "Marketing", 25);
let staff8 = new Staff_1.Staff("Hương", 25, "huong@gmail.com", "0324515875", "Accounting staff", "Accounting", 27);
let staff9 = new Staff_1.Staff("Linh", 24, "linh@gmail.com", "0869452325", "Administrative staff personnel", "Human Resource", 24);
let staff10 = new Staff_1.Staff("Hoàng", 23, "hoang@gmail.com", "0325468264", "Administrative staff personnel", "Human Resource", 28);
let staff11 = new Staff_1.Staff("Kiệt", 21, "kiet@gmail.com", "0865464582", "Security", "Security and Order", 25);
let salarys = new SalaryStaff_1.SalaryStaff(500, 400, 350, 150, 150, 200, 200, 100);
staffManagement.addSalary(salarys);
staffManagement.createStaff(staff1);
staffManagement.createStaff(staff2);
staffManagement.createStaff(staff3);
staffManagement.createStaff(staff4);
staffManagement.createStaff(staff5);
staffManagement.createStaff(staff6);
staffManagement.createStaff(staff7);
staffManagement.createStaff(staff8);
staffManagement.createStaff(staff9);
staffManagement.createStaff(staff10);
staffManagement.createStaff(staff11);
function showAllStaff() {
    console.log('----Danh sách nhân viên----');
    staffManagement.getAllStaff();
}
function inputStaff() {
    let name = rl.question('Nhập tên nhân viên :');
    let age = +rl.question('Nhập số tuổi :');
    let email = rl.question('Nhập Email :');
    let phone = rl.question('Nhập số điện thoại :');
    let position = rl.question('Nhập vị trí công việc :');
    let department = rl.question('Nhập phòng ban :');
    let workday = +rl.question('Nhập số ngày làm trong tháng :');
    return new Staff_1.Staff(name, age, email, phone, position, department, workday);
}
function showCreateStaff() {
    console.log('---Thông tin nhân viên---');
    let staff = inputStaff();
    staffManagement.createStaff(staff);
}
function showUpdateStaff() {
    console.log('---Chỉnh sửa thông tin---');
    let index = +rl.question('Nhập vị trí cần chỉnh sửa( Từ 0 ) :');
    let staff = inputStaff();
    staffManagement.updateStaff(index, staff);
}
function showDeleteFrom() {
    console.log('---Xóa nhân viên---');
    let index = +rl.question('Nhập vị trí cần xóa( Từ 0 ) :');
    staffManagement.deleteStaff(index);
}
function Menu() {
    console.log('---Quản Lý Nhân Viên---');
    console.log('1. Tạo Thông Tin Tên Nhân Viên');
    console.log('2. Hiển Thị Danh Sách Nhân Viên');
    console.log('3. Chỉnh sủa thông tin Nhân Viên');
    console.log('4. Xóa Nhân Viên');
    console.log('5. Tìm kiếm Nhân Viên');
    console.log('6. Sắp xếp Nhân Viên');
    console.log('7. Lương, Thưởng và Phạt Nhân Viên');
    console.log('0. Thoát ');
}
function MenuSort() {
    console.log('---Sắp xếp nhân viên---');
    console.log('1.Sắp xếp theo tuổi ');
    console.log('2.Sắp xếp theo tên nhân viên');
    console.log('3.Sắp xếp  theo chức vụ nhân viên');
}
function showSortStaff(Choice1) {
    switch (Choice1) {
        case ChoiceOfSort.AGE:
            console.log('--Sắp xếp theo tuổi--');
            staffManagement.sortByAgeStaff();
            break;
        case ChoiceOfSort.NAME:
            console.log('--Sắp xếp theo tên nhân viên--');
            staffManagement.sortByNameStaff();
            break;
        case ChoiceOfSort.POSITION:
            console.log('--Sắp  xếp theo chức vụ nhân viên--');
            staffManagement.sortByPositionStaff();
            break;
    }
}
function showFindStaff(Choice2) {
    switch (Choice2) {
        case ChoiceOfFind.NAME:
            console.log('--Tìm kiếm theo tên nhân viên--');
            let staffs = rl.question('Nhập tên nhân viên cần tìm :');
            staffManagement.findNameStaff(staffs);
            break;
        case ChoiceOfFind.POSITION:
            console.log('--Tìm kiếm theo chức vụ--');
            let staffs1 = rl.question('Nhập chức vụ cần tìm :');
            staffManagement.findPositionStaff(staffs1);
            break;
        case ChoiceOfFind.DEPARTMENT:
            console.log('--Tìm kiếm theo phòng ban--');
            let staffs2 = rl.question('Nhập phòng ban cần tìm :');
            staffManagement.findDepartmentStaff(staffs2);
            break;
    }
}
function MenuFind() {
    console.log('---Tìm kiếm nhân viên---');
    console.log('1.Tìm kiếm theo tên nhân viên');
    console.log('2.Tìm kiếm theo chức vụ ');
    console.log('3.Tìm kiếm theo phòng ban ');
}
function showSalary(Choice3) {
    switch (Choice3) {
        case ChoiceOfSalary.SALARY1:
            console.log('--Tiền lương--');
            staffManagement.salaryOfStaff();
            break;
        case ChoiceOfSalary.MONEY:
            console.log('--Tiền thưởng và phạt-- ');
            staffManagement.roseMoney();
            break;
    }
}
function MenuSalary() {
    console.log('---Hiển thị lương và thưởng phạt tháng---');
    console.log('1.Hiển thị lương nhân viên');
    console.log('2.Tiền thưởng và phạt của nhân viên');
}
do {
    Menu();
    choice = +rl.question('Nhập lựa chọn của bạn :');
    switch (choice) {
        case ChoiceStaff.CREATE: {
            showCreateStaff();
            break;
        }
        case ChoiceStaff.SHOW: {
            showAllStaff();
            break;
        }
        case ChoiceStaff.UPDATE: {
            showUpdateStaff();
            break;
        }
        case ChoiceStaff.DELETE: {
            showDeleteFrom();
            break;
        }
        case ChoiceStaff.FIND: {
            MenuFind();
            let Choice2 = +rl.question('Nhập lựa chọn :');
            showFindStaff(Choice2);
            break;
        }
        case ChoiceStaff.SORT: {
            MenuSort();
            let Choice1 = +rl.question('Nhập lựa chọn :');
            showSortStaff(Choice1);
            break;
        }
        case ChoiceStaff.SALARY: {
            MenuSalary();
            let Choice3 = +rl.question('Nhập lựa chọn :');
            showSalary(Choice3);
            break;
        }
    }
} while (choice != 0);
