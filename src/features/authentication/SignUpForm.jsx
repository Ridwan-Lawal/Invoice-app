import { useSelector } from "react-redux";
import FormLogo from "./FormLogo";
import { getIsDarkMode } from "../dashboard/dashboardSlice";
import FormInput from "./FormInput";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import { Spin } from "../../ui/WaitingLoader";
import { useNavigate } from "react-router-dom";

//  handle the filter and sort value

function SignUpForm() {
  const { mutateSignUp, isSigningUp } = useSignup();
  const navigate = useNavigate();
  const isDarkmode = useSelector(getIsDarkMode);

  const {
    register,
    reset,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(reset);
  //   register reset getVAlues, handleSubmit, formState:{errors}

  function onSubmit({ fullname, emailaddress, password, avatar }) {
    mutateSignUp({ fullname, emailaddress, password, avatar });
  }

  return (
    <div
      className={`${
        isDarkmode ? "bg-[#141424]" : "bg-lightBackgroundColor"
      } min-h-screen flex flex-col justify-center items-center px-5  border py-10 `}
    >
      {/* logo */}
      <FormLogo />

      <h1
        className={`${
          isDarkmode ? "text-lightBackgroundColor" : "text-[#141424]"
        } text-[22px] font-semibold mt-4 sm:mt-6`}
      >
        Sign up for an account
      </h1>
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-8 mt-6 sm:mt-8 max-w-[400px] sm:max-w-[550px] w-full  py-8 px-8 rounded-lg ${
          isDarkmode ? "bg-slate-900" : "bg-white"
        }  `}
      >
        <div className="space-y-6 sm:space-y-0 sm:gap-6 grid sm:grid-cols-2">
          <FormInput label="Full name" errors={errors?.fullname?.message}>
            <input
              type="text"
              name="fullname"
              placeholder="First name Last name"
              id="fullname"
              disabled={isSigningUp}
              className={`login-form-input ${
                isDarkmode
                  ? "bg-ebony-clay text-white"
                  : "bg-gray-100 text-cinder"
              } `}
              {...register("fullname", { required: "Fill in your full name" })}
            />
          </FormInput>
          <FormInput
            label="Email Address"
            errors={errors?.emailaddress?.message}
          >
            <input
              type="text"
              name="email"
              placeholder="xyz@invoice.app"
              id="email"
              disabled={isSigningUp}
              className={`login-form-input ${
                isDarkmode
                  ? "bg-ebony-clay text-white"
                  : "bg-gray-100 text-cinder"
              } `}
              {...register("emailaddress", {
                required: "Fill in your email address!",
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
              disabled={isSigningUp}
              className={`login-form-input ${
                isDarkmode
                  ? "bg-ebony-clay text-white"
                  : "bg-gray-100 text-cinder"
              } `}
              {...register("password", {
                required: "Fill in a password",
                minLength: {
                  value: 8,
                  message: "Password must be 8 characters or more",
                },
              })}
            />
          </FormInput>
          <FormInput
            label="Confirm password"
            errors={errors?.confirmpassword?.message}
          >
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm password"
              id="confirmpassword"
              disabled={isSigningUp}
              className={`login-form-input ${
                isDarkmode
                  ? "bg-ebony-clay text-white"
                  : "bg-gray-100 text-cinder"
              } `}
              {...register("confirmpassword", {
                required: "Please confirm your password!",
                validate: (value) =>
                  getValues()?.password === value ||
                  "Passwords needs to match! ",
              })}
            />
          </FormInput>
        </div>

        <Button
          customStyles="w-full py-3 flex justify-center"
          borderRadius="rounded-lg"
          disabled={isSigningUp}
        >
          {isSigningUp ? <Spin /> : "Sign up"}
        </Button>

        <p
          className={`text-center ${
            isDarkmode ? "text-slate-400" : "text-gray-700"
          } text-sm flex gap-2 justify-center`}
        >
          You have an account?{" "}
          <span
            className={`${
              isDarkmode ? "text-white" : "text-gray-900 font-medium "
            } underline cursor-pointer`}
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
