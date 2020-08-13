import { createAction, props, ActionType } from '@ngrx/store';
import { LoginState } from './login.state';

export const LOGIN_LOADING = '@Login/loading';
export const LOGIN_SUCCESS = '@Login/success';
export const LOGIN_FAIL = '@Login/fail';

export const getLoginLoading = createAction(LOGIN_LOADING, props<LoginState>());
export const getLoginSuccess = createAction(LOGIN_SUCCESS, props<LoginState>());
export const getLoginFail = createAction(LOGIN_FAIL, props<LoginState>());

export type LoginActions =
| ActionType<typeof getLoginLoading>
| ActionType<typeof getLoginSuccess>
| ActionType<typeof getLoginFail>;
