import * as rl from 'readline-sync';
import {StaffManagement} from "./src/Staff-Management";
import {Staff} from "./src/Staff";

enum ChoiceStaff {
    EXIT,
    CREATE,
    SHOW,
    UPDATE,
    DELETE,
    FIND,
    SORT
}
enum ChoiceOfSort {
    EXIT,
    AGE,
    NAME,
    POSITION
}

enum ChoiceOfFind {
    EXIT,
    NAME,
    POSITION,
    DEPARTMENT

}

let choice = -1;
let staffManagement = new StaffManagement();
let staff1 = new Staff("Thao", 25, "thao@gmail.com", "0977969016", "Manager", "Regent")
let staff2 = new Staff("Ngọc", 26, "ngoc@gmail.com", "0925682468", "Human resources manager", "Human Resource")
let staff3 = new Staff("Tuyến", 27, "tuyen@gmail.com", "0925784685", "Vice President", "Regent")
let staff4 = new Staff("Huyền", 24, "Huyen@gmail.com", "0925648768", "Business Staff", "Sales")
let staff5 = new Staff("Hùng", 22, "hung@gmail.com", "0932645876", "Business Staff", "Sales")
let staff6 = new Staff("Hoa", 23, "hoa@gmail.com", "0987543513", "Marketing staff", "Marketing")
let staff7 = new Staff("Lan", 23, "lan@gmail.com", "0965842351", "Marketing staff", "Marketing")
let staff8 = new Staff("Hương", 25, "huong@gmail.com", "0324515875", "Accounting staff", "Accounting")
let staff9 = new Staff("Linh", 24, "linh@gmail.com", "0869452325", "Administrative staff personnel", "Human Resource")
let staff10 = new Staff("Hoàng", 23, "hoang@gmail.com", "0325468264", "Administrative staff personnel", "Human Resource")
let staff11 = new Staff("Kiệt", 21, "kiet@gmail.com", "0865464582", "Security", "Security and Order")
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
    let department = rl.question('Nhập phong ban :');
    return new Staff(name, age, email, phone, position, department)
}

function showCreateStaff() {
    console.log('---Thông tin nhân viên---')
    let staff = inputStaff();
    staffManagement.createStaff(staff);
}

function showUpdateStaff() {
    console.log('---Chỉnh sửa thông tin---')
    let index = +rl.question('Nhập vị trí cần chỉnh sửa( Từ 0 ) :')
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
    console.log('0. Thoát ');
}


function MenuSort() {
    console.log('---Sắp xếp nhân viên---');
    console.log('1.Sắp xếp theo tuổi ');
    console.log('2.Sắp xếp theo tên nhân viên');
    console.log('3.Sắp xếp  theo chức vụ nhân viên')
}


function showSortStaff(Choice1: number) {
    switch (Choice1) {
        case ChoiceOfSort.AGE :
            console.log('--Sắp xếp theo tuổi--')
            staffManagement.sortByAgeStaff();
            break;
        case ChoiceOfSort.NAME :
            console.log('--Sắp xếp theo tên nhân viên--')
            staffManagement.sortByNameStaff();
            break;
        case ChoiceOfSort.POSITION :
            console.log('--Sắp  xếp theo chức vụ nhân viên--');
            staffManagement.sortByPositionStaff();
            break;
    }
}

function showFindStaff(Choice2: number) {
    switch (Choice2) {
        case ChoiceOfFind.NAME :
            console.log('--Tìm kiếm theo tên nhân viên--')
            let staffs = rl.question('Nhập tên nhân viên cần tìm :')
            staffManagement.findNameStaff(staffs)
            break;
        case ChoiceOfFind.POSITION :
            console.log('--Tìm kiếm theo chức vụ--')
            let staffs1 = rl.question('Nhập chức vụ cần tìm :')
            staffManagement.findPositionStaff(staffs1);
            break;
        case ChoiceOfFind.DEPARTMENT :
            console.log('--Tìm kiếm theo phòng ban--')
            let staffs2 = rl.question('Nhập phòng ban cần tìm :')
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

do {
    Menu();
    choice = +rl.question('Nhập lựa chọn của bạn :')
    switch (choice) {
        case ChoiceStaff.CREATE : {
            showCreateStaff();
            break;
        }
        case ChoiceStaff.SHOW : {
            showAllStaff();
            break;
        }
        case ChoiceStaff.UPDATE : {
            showUpdateStaff();
            break;
        }
        case ChoiceStaff.DELETE : {
            showDeleteFrom();
            break;
        }
        case ChoiceStaff.FIND : {
            MenuFind();
            let Choice2 = +rl.question('Nhập lựa chọn :');
            showFindStaff(Choice2);
            break;
        }
        case ChoiceStaff.SORT : {
            MenuSort();
            let Choice1 = +rl.question('Nhập lựa chọn :')
            showSortStaff(Choice1);
            break;
        }

    }
} while (choice != 0)
