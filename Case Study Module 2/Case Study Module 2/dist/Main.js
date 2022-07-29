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
const User_1 = require("./src/User");
const Admin_1 = require("./src/Admin");
const LogInManagement_1 = require("./src/LogInManagement");
const Enum_1 = require("./src/Enum");
const RegexId_1 = require("./src/Regex/RegexId");
const RegexPassword_1 = require("./src/Regex/RegexPassword");
let choice = -1;
let loginManagement = new LogInManagement_1.LogInManagement();
let admin = new Admin_1.Admin("Admin", "Admin");
loginManagement.addAdmin(admin);
let user = new User_1.User("User", "User");
loginManagement.addUser(user);
let staffManagement = new Staff_Management_1.StaffManagement();
let staff1 = new Staff_1.Staff("Thao", 25, "thao@gmail.com", "0977969016", "GIAM DOC", "QUAN TRI", 26);
let staff2 = new Staff_1.Staff("Ngoc", 26, "ngoc@gmail.com", "0925682468", "GIAM DOC NHAN SU", "NHAN SU", 25);
let staff3 = new Staff_1.Staff("Tuyen", 27, "tuyen@gmail.com", "0925784685", "PHO GIAM DOC", "QUAN TRI", 24);
let staff4 = new Staff_1.Staff("Huyen", 24, "Huyen@gmail.com", "0925648768", "NHAN VIEN KINH DOANH", "KINH DOANH", 27);
let staff5 = new Staff_1.Staff("Hung", 22, "hung@gmail.com", "0932645876", "NHAN VIEN KINH DOANH", "KINH DOANH", 28);
let staff6 = new Staff_1.Staff("Hoa", 23, "hoa@gmail.com", "0987543513", "NHAN VIEN MARKETING", "MARKETING", 26);
let staff7 = new Staff_1.Staff("Lan", 23, "lan@gmail.com", "0965842351", "NHAN VIEN MARKETING", "MARKETING", 25);
let staff8 = new Staff_1.Staff("Huong", 25, "huong@gmail.com", "0324515875", "NHAN VIEN KE TOAN", "KE TOAN", 27);
let staff9 = new Staff_1.Staff("Linh", 24, "linh@gmail.com", "0869452325", "NHAN VIEN HANH CHINH", "NHAN SU", 24);
let staff10 = new Staff_1.Staff("Hoang", 23, "hoang@gmail.com", "0325468264", "NHAN VIEN HANH CHINH", "NHAN SU", 28);
let staff11 = new Staff_1.Staff("Kiet", 21, "kiet@gmail.com", "0865464582", "BAO VE", "AN NINH", 25);
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
    let index = +rl.question('Nhập vị trí cần chỉnh sửa( Theo Index ) :');
    let staff = inputStaff();
    staffManagement.updateStaff(index, staff);
}
function showDeleteFrom() {
    console.log('---Xóa nhân viên---');
    let index = +rl.question('Nhập vị trí cần xóa( Theo Index ) :');
    staffManagement.deleteStaff(index);
}
function MenuOfStaff() {
    console.log('---Quản Lý Nhân Viên---');
    console.log('1. Tạo Thông Tin Tên Nhân Viên');
    console.log('2. Hiển Thị Danh Sách Nhân Viên');
    console.log('3. Chỉnh sủa thông tin Nhân Viên');
    console.log('4. Xóa Nhân Viên');
    console.log('5. Tìm kiếm Nhân Viên');
    console.log('6. Sắp xếp Nhân Viên');
    console.log('7. Lương, Thưởng và Phạt Nhân Viên');
    console.log('8. Thoát ');
}
function MenuSort() {
    console.log('---Sắp xếp nhân viên---');
    console.log('1.Sắp xếp theo tuổi ');
    console.log('2.Sắp xếp theo tên nhân viên');
    console.log('3.Sắp xếp  theo chức vụ nhân viên');
}
function sortByPosition() {
    console.log('--Sắp  xếp theo chức vụ nhân viên--');
    staffManagement.sortByPositionStaff();
}
function sortByName() {
    console.log('--Sắp xếp theo tên nhân viên--');
    staffManagement.sortByNameStaff();
}
function sortByAge() {
    console.log('--Sắp xếp theo tuổi--');
    staffManagement.sortByAgeStaff();
}
function showSortStaff(Choice1) {
    switch (Choice1) {
        case Enum_1.ChoiceOfSort.AGE:
            sortByAge();
            break;
        case Enum_1.ChoiceOfSort.NAME:
            sortByName();
            break;
        case Enum_1.ChoiceOfSort.POSITION:
            sortByPosition();
            break;
    }
}
function findByDepartment() {
    console.log('--Tìm kiếm theo phòng ban--');
    let staffs2 = rl.question('Nhập phòng ban cần tìm :');
    staffManagement.findDepartmentStaff(staffs2);
}
function findByPosition() {
    console.log('--Tìm kiếm theo chức vụ--');
    let staffs1 = rl.question('Nhập chức vụ cần tìm :');
    staffManagement.findPositionStaff(staffs1);
}
function findByName() {
    console.log('--Tìm kiếm theo tên nhân viên--');
    let staffs = rl.question('Nhập tên nhân viên cần tìm :');
    staffManagement.findNameStaff(staffs);
}
function showFindStaff(Choice2) {
    switch (Choice2) {
        case Enum_1.ChoiceOfFind.NAME:
            findByName();
            break;
        case Enum_1.ChoiceOfFind.POSITION:
            findByPosition();
            break;
        case Enum_1.ChoiceOfFind.DEPARTMENT:
            findByDepartment();
            break;
    }
}
function MenuFind() {
    console.log('---Tìm kiếm nhân viên---');
    console.log('1.Tìm kiếm theo tên nhân viên');
    console.log('2.Tìm kiếm theo chức vụ ');
    console.log('3.Tìm kiếm theo phòng ban ');
}
function ShowMoney() {
    console.log('--Tiền thưởng và phạt-- ');
    staffManagement.roseMoney();
}
function ShowSalary1() {
    console.log('--Tiền lương--');
    staffManagement.salaryOfStaff();
}
function showSalary(Choice3) {
    switch (Choice3) {
        case Enum_1.ChoiceOfSalary.SALARY1:
            ShowSalary1();
            break;
        case Enum_1.ChoiceOfSalary.MONEY:
            ShowMoney();
            break;
    }
}
function MenuSalary() {
    console.log('---Hiển thị lương và thưởng phạt tháng---');
    console.log('1.Hiển thị lương nhân viên');
    console.log('2.Tiền thưởng và phạt của nhân viên');
    console.log('3.Thoát');
}
function SalaryShowStaff() {
    MenuSalary();
    let Choice3 = +rl.question('Nhập lựa chọn :');
    showSalary(Choice3);
}
function SortStaff() {
    MenuSort();
    let Choice1 = +rl.question('Nhập lựa chọn :');
    showSortStaff(Choice1);
}
function FindStaff() {
    MenuFind();
    let Choice2 = +rl.question('Nhập lựa chọn :');
    showFindStaff(Choice2);
}
function MenuOfStaffUser() {
    console.log('---User Display---');
    console.log('1. Hiển Thị Danh Sách Nhân Viên');
    console.log('2. Tìm kiếm Nhân Viên');
    console.log('3. Sắp xếp Nhân Viên');
    console.log('4. Lương, Thưởng và Phạt Nhân Viên');
    console.log('5. Thoát ');
}
function MenuOfUser() {
    let choiceOfUser;
    do {
        MenuOfStaffUser();
        choiceOfUser = +rl.question('Nhập lụa chọn :');
        switch (choiceOfUser) {
            case Enum_1.ChoiceOfUser.SHOW:
                showAllStaff();
                break;
            case Enum_1.ChoiceOfUser.FIND:
                FindStaff();
                break;
            case Enum_1.ChoiceOfUser.SORT:
                SortStaff();
                break;
            case Enum_1.ChoiceOfUser.SALARY:
                SalaryShowStaff();
                break;
            case Enum_1.ChoiceOfUser.EXIT:
                break;
        }
    } while (choiceOfUser != Enum_1.ChoiceOfUser.EXIT);
}
function MenuOfAdmin() {
    do {
        MenuOfStaff();
        choice = +rl.question('Nhập lựa chọn của bạn :');
        switch (choice) {
            case Enum_1.ChoiceStaff.CREATE: {
                showCreateStaff();
                break;
            }
            case Enum_1.ChoiceStaff.SHOW: {
                showAllStaff();
                break;
            }
            case Enum_1.ChoiceStaff.UPDATE: {
                showUpdateStaff();
                break;
            }
            case Enum_1.ChoiceStaff.DELETE: {
                showDeleteFrom();
                break;
            }
            case Enum_1.ChoiceStaff.FIND: {
                FindStaff();
                break;
            }
            case Enum_1.ChoiceStaff.SORT: {
                SortStaff();
                break;
            }
            case Enum_1.ChoiceStaff.SALARY: {
                SalaryShowStaff();
                break;
            }
            case Enum_1.ChoiceStaff.EXIT: {
                break;
            }
        }
    } while (choice != Enum_1.ChoiceStaff.EXIT);
}
let ChoiceSignIn;
function MenuLogIn() {
    console.log('---LogIn Display--');
    console.log('1.Đăng kí User');
    console.log('2.Đăng Nhập');
    console.log('3.Thoát');
}
function SignIn() {
    console.log('--Đăng Nhập--');
    let idsignin = rl.question('Nhập ID :');
    let passwordsignin = rl.question('Nhập Password :');
    if (loginManagement.checkAccountUser(idsignin, passwordsignin)) {
        MenuOfUser();
    }
    else if (loginManagement.checkAccountAdmin(idsignin, passwordsignin)) {
        MenuOfAdmin();
    }
    else
        (console.log('Mời nhập lại ID & Password'));
}
do {
    MenuLogIn();
    ChoiceSignIn = +rl.question('Nhập lựa chọn :');
    switch (ChoiceSignIn) {
        case Enum_1.ChoiceOfLogIn.SIGNUP:
            createAccount();
            break;
        case Enum_1.ChoiceOfLogIn.SIGNIN:
            SignIn();
            break;
        case Enum_1.ChoiceOfLogIn.EXIT:
            break;
    }
} while (ChoiceSignIn != Enum_1.ChoiceOfLogIn.EXIT);
function createAccount() {
    console.log('-----Tạo mới tài khoản-----');
    let regexId = new RegexId_1.RegexId();
    let id = rl.question('Nhập ID: ');
    if (regexId.checkRegexId(id)) {
    }
    else {
        console.log('Mời bạn nhập lại Id (Id : từ 4 đến 12 kí tự');
        return id;
    }
    let regexPassword = new RegexPassword_1.RegexPassword();
    let password = rl.question('Nhập password: ');
    if (regexPassword.checkRegexPassword(password)) {
    }
    else {
        console.log('Mời bạn nhập lại password (password: từ 6 đến 12 kí tự)');
        return password;
    }
    let newAccount = new User_1.User(id, password);
    loginManagement.addUser(newAccount);
}
