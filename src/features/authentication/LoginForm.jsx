// import { useSelector } from "react-redux";
// import { getIsDarkMode } from "../dashboard/dashboardSlice";

import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
import { Spin } from "../../ui/WaitingLoader";
import FormInput from "./FormInput";
import FormLogo from "./FormLogo";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function LoginForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
    getValues,
  } = useForm();

  console.log(getValues());

  const { loginMutate, isLoggingIn } = useLogin();
  const navigate = useNavigate();
  // const isDarkmode = useSelector(getIsDarkMode);

  const isDarkmode = true;
  console.log(isDarkmode);

  function onSubmit(data) {
    console.log(data);
    loginMutate(data, { onSettled: () => reset() });
  }

  return (
    <div
      className={`${
        isDarkmode ? "bg-[#141424]" : "bg-lightBackgroundColor"
      } min-h-screen flex flex-col justify-center items-center px-5 `}
    >
      {/* logo */}
      <FormLogo />

      <h1
        className={`${
          isDarkmode ? "text-lightBackgroundColor" : "text-[#141424]"
        } text-[22px] font-semibold mt-6`}
      >
        Log in into your account
      </h1>
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-8 mt-8 max-w-[400px] w-full  py-8 px-8 rounded-lg ${
          isDarkmode ? "bg-slate-900" : "bg-white"
        } `}
      >
        <div className="space-y-6">
          <FormInput label="Email Address" errors={errors?.email?.message}>
            <input
              type="text"
              name="email"
              placeholder="xyz@invoice.app"
              id="email"
              className={`login-form-input ${
                isDarkmode
                  ? "bg-ebony-clay text-white"
                  : "bg-gray-100 text-cinder"
              } `}
              {...register("email", {
                required: "Fill in an email address!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Fill in a correct email address!",
                },
              })}
            />
          </FormInput>

          <FormInput label="Password" errors={errors?.password?.message}>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              id="password"
              className={`login-form-input ${
                isDarkmode
                  ? "bg-ebony-clay text-white"
                  : "bg-gray-100 text-cinder"
              } `}
              {...register("password", {
                required: "Enter your password",
                minLength: {
                  value: 8,
                  message: "Password must be more that 8 characters!",
                },
              })}
            />
          </FormInput>
        </div>

        <Button
          customStyles="w-full py-3 flex justify-center"
          borderRadius="rounded-lg"
          disabled={isLoggingIn}
        >
          {isLoggingIn ? <Spin /> : "Log in"}
        </Button>

        <p
          className={`text-center ${
            isDarkmode ? "text-slate-400" : "text-gray-700"
          } text-sm flex gap-2 justify-center`}
        >
          Don&apos;t have an account?{" "}
          <span
            className={`${
              isDarkmode ? "text-white" : "text-gray-900 font-medium "
            } underline cursor-pointer`}
            onClick={() => navigate("/signup")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
