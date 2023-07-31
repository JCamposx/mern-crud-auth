import { useDispatch, useSelector } from "react-redux";

import registerRequest from "../api/auth/register.js";
import { signup as signupReducer } from "../features/user/userSlice.js";

const useAuth = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const signup = async (data) => {
    const response = await registerRequest(data);

    if (response.success) {
      dispatch(signupReducer(response.data));
    }
  };

  return { isAuthenticated, signup };
};

export default useAuth;
