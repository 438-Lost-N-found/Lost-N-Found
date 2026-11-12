export const LoginValidator = {
    isValid(username: string, password: string): boolean {
        return username.trim() !== ''
            && password.trim() !== '';
    }
};