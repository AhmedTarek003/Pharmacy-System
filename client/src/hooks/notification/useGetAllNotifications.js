import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";
import { notificationActions } from "../../redux/slices/notificationSlice";

const useGetAllNotifications = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllNotifications = async () => {
      setLoading(true);
      try {
        const { data } = await request.get(`/notifications`);
        dispatch(notificationActions.getNotifications(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getAllNotifications();
  }, [dispatch]);
  return { loading };
};

export default useGetAllNotifications;
