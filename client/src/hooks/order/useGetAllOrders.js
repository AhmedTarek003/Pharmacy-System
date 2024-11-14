import { useEffect, useState } from "react";
import { orderActions } from "../../redux/slices/orderSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useGetAllOrders = (sort) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllOrders = async () => {
      setLoading(true);
      try {
        const { data } = await request.get(`/orders?sort=${sort}`);
        dispatch(orderActions.getOrders(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getAllOrders();
  }, [sort, dispatch]);
  return { loading };
};

export default useGetAllOrders;
