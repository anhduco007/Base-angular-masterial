import { createAction, props, ActionType } from '@ngrx/store';
import { IUserLoginState } from './login.model';

export const LOGIN_LOADING = '@Login/loading';
export const LOGIN_SUCCESS = '@Login/success';
export const LOGIN_FAIL = '@Login/fail';

export const getLoginLoading = createAction(LOGIN_LOADING, props<any>());
export const getLoginSuccess = createAction(LOGIN_SUCCESS, props<{item: IUserLoginState}>());
export const getLoginFail = createAction(LOGIN_FAIL, props<any>());

export type LoginActions =
| ActionType<typeof getLoginLoading>
| ActionType<typeof getLoginSuccess>
| ActionType<typeof getLoginFail>;
