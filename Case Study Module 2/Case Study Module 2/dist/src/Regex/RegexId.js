"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexId = void 0;
class RegexId {
    constructor() {
        this.regexId = /^[A-Za-z0-9]{4,12}$/;
    }
    checkRegexId(regexId) {
        return this.regexId.test(regexId);
    }
}
exports.RegexId = RegexId;
