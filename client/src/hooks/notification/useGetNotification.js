import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";
import { notificationActions } from "../../redux/slices/notificationSlice";

const useGetNotification = (id) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getNotification = async () => {
      setLoading(true);
      try {
        const { data } = await request.get(`/notifications/${id}`);
        dispatch(notificationActions.getNotification(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getNotification();
  }, [id, dispatch]);
  return { loading };
};

export default useGetNotification;
