import { useState } from "react";
import toast from "react-hot-toast";
import { request } from "../../utils/request";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/slices/userSlice";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const register = async ({ userName, email, password, confirmPassword }) => {
    const success = checkInputHandler(
      userName,
      email,
      password,
      confirmPassword
    );
    if (!success) return;
    setLoading(true);
    try {
      const { data } = await request.post(`/auth/register`, {
        userName,
        email,
        password,
        confirmPassword,
      });
      dispatch(userActions.getUser(data?.user));
      toast.success(data?.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { register, loading };
};

function checkInputHandler(userName, email, password, confirmPassword) {
  if (!userName || !email || !password || !confirmPassword) {
    toast.error("fill all fields");
    return false;
  }
  if (password.length < 6) {
    toast.error("password must be at least 6 characters");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("password must be match");
    return false;
  }
  return true;
}
export default useRegister;
