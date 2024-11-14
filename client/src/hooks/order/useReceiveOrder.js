import { useState } from "react";
import { orderActions } from "../../redux/slices/orderSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useReceiveOrder = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const reciveOrder = async (id) => {
    setLoading(true);
    try {
      const { data } = await request.post(`/orders/receive_order/${id}`);
      dispatch(orderActions.receiveOrder(data?.order));
      toast.success(data?.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { reciveOrder, loading };
};

export default useReceiveOrder;
