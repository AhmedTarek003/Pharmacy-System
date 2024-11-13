import { useState } from "react";
import FormField from "../../components/ui/FormField";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/user/useLogin";
import Loader from "../../components/ui/Loader";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const { login, loading } = useLogin();
  const submitHanlder = async (e) => {
    e.preventDefault();
    await login(formValues);
  };
  return (
    <div className="h-svh w-full auth-background">
      <div className="bg-[var(--overlay-color)] h-svh flex justify-center items-center p-3">
        <div className="p-3 rounded-md w-[30%] max-md:w-[100%] max-lg:w-[80%] shadow-md backdrop-blur-lg bg-opacity-0">
          <h1 className="text-3xl text-[var(--dark-color)] mt-3 mb-2 text-center font-bold">
            Elshfa Pharmacy
          </h1>
          <h2 className="text-2xl text-white mb-5 text-center font-semibold">
            Login
          </h2>
          <form onSubmit={submitHanlder}>
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
            <Button text={loading ? <Loader /> : "Login"} />
          </form>
          <div className="text-white">
            create new user?{" "}
            <Link
              to={"/signup"}
              className="text-blue-600 hover:text-blue-700 font-semibold text-[17px]"
            >
              signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
