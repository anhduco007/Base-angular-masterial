import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoginState } from './login.state';

const featureLogin = createFeatureSelector<LoginState>('feature_login');
export const loginSelector = createSelector(featureLogin, state => state);
