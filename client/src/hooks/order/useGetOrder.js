import { useEffect, useState } from "react";
import { orderActions } from "../../redux/slices/orderSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useGetOrder = (id) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getOrder = async () => {
      setLoading(true);
      try {
        const { data } = await request.get(`/orders/${id}`);
        dispatch(orderActions.getOrder(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getOrder();
  }, [id, dispatch]);
  return { loading };
};

export default useGetOrder;
