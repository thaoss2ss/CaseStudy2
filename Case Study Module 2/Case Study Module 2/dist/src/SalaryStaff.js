"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryStaff = void 0;
class SalaryStaff {
    constructor(salaryManager, salaryVicePresident, salaryHumanResourcesManager, salaryAdministrativeStaffPersonnel, salaryAccountingStaff, salaryBusinessStaff, salaryMarketingStaff, salarySecurity) {
        this._salaryManager = salaryManager;
        this._salaryVicePresident = salaryVicePresident;
        this._salaryHumanResourcesManager = salaryHumanResourcesManager;
        this._salaryAdministrativeStaffPersonnel = salaryAdministrativeStaffPersonnel;
        this._salaryAccountingStaff = salaryAccountingStaff;
        this._salaryBusinessStaff = salaryBusinessStaff;
        this._salaryMarketingStaff = salaryMarketingStaff;
        this._salarySecurity = salarySecurity;
    }
    get salaryManager() {
        return this._salaryManager;
    }
    set salaryManager(value) {
        this._salaryManager = value;
    }
    get salaryVicePresident() {
        return this._salaryVicePresident;
    }
    set salaryVicePresident(value) {
        this._salaryVicePresident = value;
    }
    get salaryHumanResourcesManager() {
        return this._salaryHumanResourcesManager;
    }
    set salaryHumanResourcesManager(value) {
        this._salaryHumanResourcesManager = value;
    }
    get salaryAdministrativeStaffPersonnel() {
        return this._salaryAdministrativeStaffPersonnel;
    }
    set salaryAdministrativeStaffPersonnel(value) {
        this._salaryAdministrativeStaffPersonnel = value;
    }
    get salaryAccountingStaff() {
        return this._salaryAccountingStaff;
    }
    set salaryAccountingStaff(value) {
        this._salaryAccountingStaff = value;
    }
    get salaryBusinessStaff() {
        return this._salaryBusinessStaff;
    }
    set salaryBusinessStaff(value) {
        this._salaryBusinessStaff = value;
    }
    get salaryMarketingStaff() {
        return this._salaryMarketingStaff;
    }
    set salaryMarketingStaff(value) {
        this._salaryMarketingStaff = value;
    }
    get salarySecurity() {
        return this._salarySecurity;
    }
    set salarySecurity(value) {
        this._salarySecurity = value;
    }
}
exports.SalaryStaff = SalaryStaff;
