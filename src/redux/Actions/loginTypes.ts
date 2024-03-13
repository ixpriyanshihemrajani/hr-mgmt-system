// loginTypes.ts
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface AuthState {
    isAuthenticated: boolean;
    //role?: string; // Add the role property to AuthState
}

//export type AuthAction = { type: 'LOGIN'; role?: string } | { type: 'LOGOUT' };
export type LoginAction = { type: 'LOGIN'} | { type: 'LOGOUT' };
