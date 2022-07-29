"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChoiceOfLogIn = exports.ChoiceOfUser = exports.ChoiceOfSalary = exports.ChoiceOfFind = exports.ChoiceOfSort = exports.ChoiceStaff = void 0;
var ChoiceStaff;
(function (ChoiceStaff) {
    ChoiceStaff[ChoiceStaff["CREATE"] = 1] = "CREATE";
    ChoiceStaff[ChoiceStaff["SHOW"] = 2] = "SHOW";
    ChoiceStaff[ChoiceStaff["UPDATE"] = 3] = "UPDATE";
    ChoiceStaff[ChoiceStaff["DELETE"] = 4] = "DELETE";
    ChoiceStaff[ChoiceStaff["FIND"] = 5] = "FIND";
    ChoiceStaff[ChoiceStaff["SORT"] = 6] = "SORT";
    ChoiceStaff[ChoiceStaff["SALARY"] = 7] = "SALARY";
    ChoiceStaff[ChoiceStaff["EXIT"] = 8] = "EXIT";
})(ChoiceStaff = exports.ChoiceStaff || (exports.ChoiceStaff = {}));
var ChoiceOfSort;
(function (ChoiceOfSort) {
    ChoiceOfSort[ChoiceOfSort["EXIT"] = 0] = "EXIT";
    ChoiceOfSort[ChoiceOfSort["AGE"] = 1] = "AGE";
    ChoiceOfSort[ChoiceOfSort["NAME"] = 2] = "NAME";
    ChoiceOfSort[ChoiceOfSort["POSITION"] = 3] = "POSITION";
})(ChoiceOfSort = exports.ChoiceOfSort || (exports.ChoiceOfSort = {}));
var ChoiceOfFind;
(function (ChoiceOfFind) {
    ChoiceOfFind[ChoiceOfFind["EXIT"] = 0] = "EXIT";
    ChoiceOfFind[ChoiceOfFind["NAME"] = 1] = "NAME";
    ChoiceOfFind[ChoiceOfFind["POSITION"] = 2] = "POSITION";
    ChoiceOfFind[ChoiceOfFind["DEPARTMENT"] = 3] = "DEPARTMENT";
})(ChoiceOfFind = exports.ChoiceOfFind || (exports.ChoiceOfFind = {}));
var ChoiceOfSalary;
(function (ChoiceOfSalary) {
    ChoiceOfSalary[ChoiceOfSalary["EXIT"] = 0] = "EXIT";
    ChoiceOfSalary[ChoiceOfSalary["SALARY1"] = 1] = "SALARY1";
    ChoiceOfSalary[ChoiceOfSalary["MONEY"] = 2] = "MONEY";
})(ChoiceOfSalary = exports.ChoiceOfSalary || (exports.ChoiceOfSalary = {}));
var ChoiceOfUser;
(function (ChoiceOfUser) {
    ChoiceOfUser[ChoiceOfUser["SHOW"] = 1] = "SHOW";
    ChoiceOfUser[ChoiceOfUser["FIND"] = 2] = "FIND";
    ChoiceOfUser[ChoiceOfUser["SORT"] = 3] = "SORT";
    ChoiceOfUser[ChoiceOfUser["SALARY"] = 4] = "SALARY";
    ChoiceOfUser[ChoiceOfUser["EXIT"] = 5] = "EXIT";
})(ChoiceOfUser = exports.ChoiceOfUser || (exports.ChoiceOfUser = {}));
var ChoiceOfLogIn;
(function (ChoiceOfLogIn) {
    ChoiceOfLogIn[ChoiceOfLogIn["SIGNUP"] = 1] = "SIGNUP";
    ChoiceOfLogIn[ChoiceOfLogIn["SIGNIN"] = 2] = "SIGNIN";
    ChoiceOfLogIn[ChoiceOfLogIn["EXIT"] = 3] = "EXIT";
})(ChoiceOfLogIn = exports.ChoiceOfLogIn || (exports.ChoiceOfLogIn = {}));
