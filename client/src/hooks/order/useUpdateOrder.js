import { useState } from "react";
import { orderActions } from "../../redux/slices/orderSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useUpdateOrder = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const updateOrder = async (id, status) => {
    setLoading(true);
    try {
      const { data } = await request.put(`/orders/${id}`, { status });
      dispatch(orderActions.getOrder(data?.order));
      toast.success(data?.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { updateOrder, loading };
};

export default useUpdateOrder;
