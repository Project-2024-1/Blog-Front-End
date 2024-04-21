import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { signUpApi } from '../../lib/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmit = async (data) => {
    const newData = { ...data, UserEmail: data.UserEmail?.trim() };
    console.log('🚀 ~ onSubmit ~ newData:', newData);
    try {
     const response = await signUpApi(newData);
     console.log(response);
     if(response.statusCode === 1) {
      localStorage.setItem("accessToken", response.AccessToken);
      localStorage.setItem("refreshToken", response.RefreshToken);
      toast.success(response.UserMsg);
      navigate("/admin");
     } else {
      toast.error(response.UserMsg)
     }
      
      // navigate("/auth/sign-in");
      // toast.success("Bạn đăng ký thành công");
      // navigate('/');
    } catch (error) {
      // toast.error("Bạn đăng kí thất bại");
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  {...register('UserEmail', {
                    required: {
                      value: true,
                      message: 'Email is required',
                    },
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Email invalidate',
                    },
                  })}
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
                {errors.UserEmail && <p className="text-red-500">{errors.UserEmail.message}</p>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="UserPassword"
                  {...register('UserPassword', {
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                    minLength: {
                      value: 4,
                      message: 'You must enter at least 8 characters',
                    },
                  })}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.UserPassword && <p className="text-red-500">{errors.UserPassword.message}</p>}
              </div>
              <div className="flex items-center justify-end">
                <Link
                  to="/auth/forgot-password"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-Txanh hover:bg-Tbe hover:text-Txanh focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{' '}
                <Link
                  to="/auth/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Resgiter
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;