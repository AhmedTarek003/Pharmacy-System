import { useState } from "react";
import toast from "react-hot-toast";
import { request } from "../../utils/request";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/slices/userSlice";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async ({ email, password }) => {
    const success = checkInputHandler(email, password);
    if (!success) return;
    setLoading(true);
    try {
      const { data } = await request.post(`/auth/login`, { email, password });
      dispatch(userActions.getUser(data?.user));
      toast.success(data?.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { login, loading };
};

function checkInputHandler(email, password) {
  if (!email || !password) {
    toast.error("fill all fields");
    return false;
  }
  return true;
}

export default useLogin;
