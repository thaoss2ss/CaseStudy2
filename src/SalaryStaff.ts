export class SalaryStaff {
    private _salaryManager: number;
    private _salaryVicePresident: number;
    private _salaryHumanResourcesManager: number;
    private _salaryAdministrativeStaffPersonnel: number;
    private _salaryAccountingStaff: number;
    private _salaryBusinessStaff: number;
    private _salaryMarketingStaff: number;
    private _salarySecurity: number;


    constructor(salaryManager: number, salaryVicePresident: number, salaryHumanResourcesManager: number, salaryAdministrativeStaffPersonnel: number, salaryAccountingStaff: number, salaryBusinessStaff: number, salaryMarketingStaff: number, salarySecurity: number) {
        this._salaryManager = salaryManager;
        this._salaryVicePresident = salaryVicePresident;
        this._salaryHumanResourcesManager = salaryHumanResourcesManager;
        this._salaryAdministrativeStaffPersonnel = salaryAdministrativeStaffPersonnel;
        this._salaryAccountingStaff = salaryAccountingStaff;
        this._salaryBusinessStaff = salaryBusinessStaff;
        this._salaryMarketingStaff = salaryMarketingStaff;
        this._salarySecurity = salarySecurity;
    }

    get salaryManager(): number {
        return this._salaryManager;
    }

    set salaryManager(value: number) {
        this._salaryManager = value;
    }

    get salaryVicePresident(): number {
        return this._salaryVicePresident;
    }

    set salaryVicePresident(value: number) {
        this._salaryVicePresident = value;
    }

    get salaryHumanResourcesManager(): number {
        return this._salaryHumanResourcesManager;
    }

    set salaryHumanResourcesManager(value: number) {
        this._salaryHumanResourcesManager = value;
    }

    get salaryAdministrativeStaffPersonnel(): number {
        return this._salaryAdministrativeStaffPersonnel;
    }

    set salaryAdministrativeStaffPersonnel(value: number) {
        this._salaryAdministrativeStaffPersonnel = value;
    }

    get salaryAccountingStaff(): number {
        return this._salaryAccountingStaff;
    }

    set salaryAccountingStaff(value: number) {
        this._salaryAccountingStaff = value;
    }

    get salaryBusinessStaff(): number {
        return this._salaryBusinessStaff;
    }

    set salaryBusinessStaff(value: number) {
        this._salaryBusinessStaff = value;
    }

    get salaryMarketingStaff(): number {
        return this._salaryMarketingStaff;
    }

    set salaryMarketingStaff(value: number) {
        this._salaryMarketingStaff = value;
    }

    get salarySecurity(): number {
        return this._salarySecurity;
    }

    set salarySecurity(value: number) {
        this._salarySecurity = value;
    }
}