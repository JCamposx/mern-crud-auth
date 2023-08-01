import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import loginRequest from "../api/auth/login.js";
import registerRequest from "../api/auth/register.js";
import {
  signin as signinReducer,
  signup as signupReducer,
} from "../features/user/userSlice.js";

const useAuth = () => {
  const [errors, setErrors] = useState(null);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const signup = async (data) => {
    const response = await registerRequest(data);

    if (response.success) {
      dispatch(signupReducer(response.data));
    } else {
      setErrors(response.errors);
    }
  };

  const signin = async (data) => {
    const response = await loginRequest(data);

    if (response.success) {
      dispatch(signinReducer(response.data));
    } else {
      setErrors(response.errors);
    }
  };

  return { isAuthenticated, signup, signin, errors };
};

export default useAuth;
