import * as LoginActions from './login.actions';
import { LoginState } from './login.state';
const initState: LoginState = {
    status: 'loading',
    message: null,
    username: null
};

export function loginReducer(state: LoginState = initState, action: LoginActions.LoginActions): LoginState {
    switch (action.type) {
        case LoginActions.LOGIN_LOADING:
            return { ...state, status: 'loading' };
        case LoginActions.LOGIN_SUCCESS:
            return { ...state, message: action.message, status: 'success', username: action.username };
        case LoginActions.LOGIN_FAIL:
            return { ...state, message: action.message, status: 'fail' };
        default:
            break;
    }
}
