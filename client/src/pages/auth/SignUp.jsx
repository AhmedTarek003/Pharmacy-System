import { useState } from "react";
import FormField from "../../components/ui/FormField";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/user/useRegister";
import Loader from "../../components/ui/Loader";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const { register, loading } = useRegister();
  const submitHanlder = async (e) => {
    e.preventDefault();
    await register(formValues);
  };
  return (
    <div className="h-svh w-full auth-background">
      <div className="bg-[var(--overlay-color)] h-svh flex justify-center items-center p-3">
        <div className="p-3 rounded-md w-[30%] max-md:w-[100%] max-lg:w-[80%] shadow-md backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl text-[var(--dark-color)] mt-3 mb-2 text-center font-bold">
            Welcome to Elshfa Pharmacy
          </h1>
          <h2 className="text-2xl text-white mb-5 text-center font-semibold">
            Sing Up
          </h2>
          <form onSubmit={submitHanlder}>
            <FormField
              label={"username"}
              type={"text"}
              name={"userName"}
              placeholder={"enter your username"}
              value={formValues.userName}
              onChange={onChangeHandler}
            />
            <FormField
              label={"email"}
              type={"email"}
              name={"email"}
              placeholder={"enter your email"}
              value={formValues.email}
              onChange={onChangeHandler}
            />
            <FormField
              label={"password"}
              type={"password"}
              name={"password"}
              placeholder={"enter your password"}
              value={formValues.password}
              onChange={onChangeHandler}
            />
            <FormField
              label={"confirmPassword"}
              type={"password"}
              name={"confirmPassword"}
              placeholder={"confirm your password"}
              value={formValues.confirmPassword}
              onChange={onChangeHandler}
            />
            <Button text={loading ? <Loader /> : "signup"} />
          </form>
          <div className="text-white">
            already have an account?{" "}
            <Link
              to={"/login"}
              className="text-blue-600 hover:text-blue-700 font-semibold text-[17px]"
            >
              login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
