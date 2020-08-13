export interface LoginState {
    status: 'loading' | 'success' | 'fail';
    message?: string;
    username?: string;
}
