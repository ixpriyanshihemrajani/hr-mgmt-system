import { AuthState } from "../Actions/loginTypes";
import authReducer from "./loginReducer";
import { Reducer, combineReducers} from "redux";
import { LoginAction } from "../Actions/loginTypes";

const rootReducer : Reducer<{auth:AuthState},LoginAction>= combineReducers({
    auth: authReducer,
    // Add other reducers here if you have more
  });


  export default rootReducer;