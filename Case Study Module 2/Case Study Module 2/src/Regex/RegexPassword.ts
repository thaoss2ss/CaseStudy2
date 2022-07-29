export class RegexPassword {
    private regexPassword: RegExp = /^[a-zA-Z0-9]{6,12}$/;
    checkRegexPassword(regexPassword: string): boolean {
        return this.regexPassword.test(regexPassword)
    }
}