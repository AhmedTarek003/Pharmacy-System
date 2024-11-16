import { useEffect, useState } from "react";
import { invoiceActions } from "../../redux/slices/invoiceSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useGetInvoice = (id) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getInvoice = async () => {
      setLoading(true);
      try {
        const { data } = await request.get(`/invoices/${id}`);
        dispatch(invoiceActions.getInvoice(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getInvoice();
  }, [id, dispatch]);
  return { loading };
};

export default useGetInvoice;
