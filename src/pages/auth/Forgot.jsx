import { useForm } from "react-hook-form";
import { useState } from "react";

const ForgotPassword = () => {
  const [first, setFirst] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    try {
      console.log("data", data);
      setFirst(true);
    } catch (error) {
      console.log("error", error);
    }
  };

  return first === false ? (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="">
        <h1 className="md:mb-5 mb-3 md:text-[40px] text-[22px] font-semibold text-textWhite text-center">
          Reset password
        </h1>
        <p className="md:mb-[58px] mb-[37px] text-center text-textWhite md:text-[18px] text-sm">
          Enter your email and we’ll send you a link to reset your password
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:p-[37px_36px_45px] p-[32px_16px] md:w-[572px] w-full mx-auto border border-stroke rounded-md bg-textWhite mb-10"
        >
          <div className="flex gap-[10.5px] flex-col mb-[42.5px] mt-5">
            <label
              htmlFor="username"
              className="text-sm font-semibold cursor-pointer text-text2"
            >
              Email address
            </label>
            <input
              id="username"
              className="md:w-full w-[312px] px-2 py-[13px] border rounded-md outline-none border-stroke focus:border-primary transition-all"
              placeholder="name@company.com"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email invalidate",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="w-full text-white bg-Txanh hover:bg-Tbe hover:text-Txanh focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              Reset password
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};
export default ForgotPassword;
