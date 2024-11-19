import { useEffect, useState } from "react";
import { invoiceActions } from "../../redux/slices/invoiceSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useGetWeeklySales = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getWeeklySales = async () => {
      setLoading(true);
      try {
        const { data } = await request.get(`/invoices/weekly_sales`);
        dispatch(invoiceActions.getWeeklySales(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getWeeklySales();
  }, [dispatch]);
  return { loading };
};

export default useGetWeeklySales;
