import * as LoginActions from './login.actions';
import { LoginState } from './login.state';
const initState: LoginState = {
    item: null,
    status: 'idle',
    error: ''
};

export function loginReducer(state: LoginState = initState, action: LoginActions.LoginActions): LoginState {
    switch (action.type) {
        case LoginActions.LOGIN_LOADING:
            return { ...state, status: 'loading' };
        case LoginActions.LOGIN_SUCCESS:
            return { ...state, item: action.item, status: 'idle' };
        case LoginActions.LOGIN_FAIL:
            return { ...state, item: null, status: 'error' };
        default:
            break;
    }
}
