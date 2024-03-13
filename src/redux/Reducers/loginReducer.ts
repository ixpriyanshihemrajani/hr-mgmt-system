// reducer.ts
import { LOGIN, LOGOUT } from '../Actions/loginTypes'; // Import action type constants
import { LoginAction } from "../Actions/loginTypes";
import { AuthState } from "../Actions/loginTypes";

export const initialState: AuthState = {
  isAuthenticated: false,
};

const authReducer = (state: AuthState = initialState, action: LoginAction): AuthState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        // role: action.role, // If you want to include the role in the state
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        // role: undefined, // Clear the role on logout
      };
    default:
      return state;
  }
};

export default authReducer;
