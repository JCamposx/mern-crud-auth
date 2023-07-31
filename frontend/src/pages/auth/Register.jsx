import { useForm } from "react-hook-form";

import registerRequest from "../../api/auth/register.js";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 mt-4 rounded-md"
        />
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 mt-4 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 mt-4 rounded-md"
        />

        <button type="submit" className="mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
