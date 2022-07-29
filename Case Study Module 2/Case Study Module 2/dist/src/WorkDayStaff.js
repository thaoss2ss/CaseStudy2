"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkDayStaff = void 0;
class WorkDayStaff {
    constructor(workday) {
        this._workday = workday;
    }
    get workday() {
        return this._workday;
    }
    set workday(value) {
        this._workday = value;
    }
}
exports.WorkDayStaff = WorkDayStaff;
