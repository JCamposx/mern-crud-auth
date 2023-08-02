import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import loginRequest from "../api/auth/login.js";
import registerRequest from "../api/auth/register.js";
import verifyTokenRequest from "../api/auth/verifyToken.js";
import {
  logout as logoutReducer,
  signin as signinReducer,
  signup as signupReducer,
} from "../features/user/userSlice.js";
import { persistor } from "../utils/store.js";

const useAuth = () => {
  const [errors, setErrors] = useState(null);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const verifyToken = async () => {
    const response = await verifyTokenRequest();

    if (!response.success) {
      dispatch(logoutReducer());
      persistor.purge();
    }

    return response.success;
  };

  const signup = async (data) => {
    const response = await registerRequest(data);

    if (response.success) {
      dispatch(signupReducer(response.data));
    } else {
      setErrors(response.errors);

      const timer = setTimeout(() => {
        setErrors([]);
        clearTimeout(timer);
      }, 5000);
    }
  };

  const signin = async (data) => {
    const response = await loginRequest(data);

    if (response.success) {
      dispatch(signinReducer(response.data));
    } else {
      setErrors(response.errors);

      const timer = setTimeout(() => {
        setErrors([]);
        clearTimeout(timer);
      }, 5000);
    }
  };

  return { isAuthenticated, signup, signin, verifyToken, errors };
};

export default useAuth;
