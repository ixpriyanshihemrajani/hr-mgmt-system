import { LoginAction } from "./loginTypes";
 
// export const login = (role: string): LoginAction => ({
//   type: 'LOGIN',
//   // role,
// });

export const login = (): LoginAction => ({
  type: 'LOGIN',
  // role,
});
 
export const logout = (): LoginAction => ({
  type: 'LOGOUT',
});


