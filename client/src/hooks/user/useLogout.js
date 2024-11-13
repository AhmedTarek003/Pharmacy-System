import { useState } from "react";
import toast from "react-hot-toast";
import { request } from "../../utils/request";
import { useDispatch } from "react-redux";
import { userActions } from "../../redux/slices/userSlice";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    setLoading(true);
    try {
      const { data } = await request.post(`/auth/logout`);
      dispatch(userActions.getUser(null));
      toast.success(data?.msg);
    } catch (error) {
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { logout, loading };
};

export default useLogout;
