import { useDispatch, useSelector } from "react-redux";

import registerRequest from "../api/auth/register.js";
import { signup as signupReducer } from "../features/user/userSlice.js";
import { useState } from "react";

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

  return { isAuthenticated, signup, errors };
};

export default useAuth;
