import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import useAuth from "../../hooks/useAuth.js";
import { routes } from "../../utils/routes.js";

const Register = () => {
  const { isAuthenticated, signup, errors: registerErrors } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home);
    }
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {registerErrors && (
        <div className="bg-red-500 p-2 text-white rounded-md">
          {registerErrors.map((error, index) => (
            <p key={index}>
              {`- ${error}`}
            </p>
          ))}
        </div>
      )}

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 mt-4 rounded-md"
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}

        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 mt-4 rounded-md"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}

        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 mt-4 rounded-md"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}

        <button type="submit" className="mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
