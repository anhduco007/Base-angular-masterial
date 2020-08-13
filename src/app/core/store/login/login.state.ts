import { IUserLoginState } from './login.model';


export interface LoginState {
    item: IUserLoginState;
    status: 'idle' | 'loading' | 'error';
    error?: string;
}
