import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import { routes, url } from "../../utils/routes.js";

const Login = () => {
  const { isAuthenticated, signin, errors: loginErrors } = useAuth();

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
    signin(values);
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-zinc-800 w-96 p-10 rounded-md">
        <h1 className="text-2xl font-bold mb-2">Login</h1>

        {loginErrors && loginErrors.length > 0 && (
          <div className="bg-red-500 p-2 text-white rounded-md">
            {loginErrors.map((error, index) => (
              <p key={index}>{`- ${error}`}</p>
            ))}
          </div>
        )}

        <form onSubmit={onSubmit}>
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

          <button
            type="submit"
            className="w-full bg-purple-700 rounded-md py-1 mt-4"
          >
            Login
          </button>

          <p className="flex justify-between mt-4">
            Don&apos;t have an account?
            <Link to={url(routes.register)} className="text-sky-500">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
