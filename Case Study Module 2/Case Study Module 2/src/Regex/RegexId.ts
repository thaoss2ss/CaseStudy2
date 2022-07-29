export class RegexId {
    private regexId: RegExp = /^[A-Za-z0-9]{4,12}$/;
    checkRegexId(regexId: string): boolean {
        return this.regexId.test(regexId)
    }
}