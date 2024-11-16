import { useState } from "react";
import { request } from "../../utils/request";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { invoiceActions } from "../../redux/slices/invoiceSlice";

const useCreateInvoice = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const createInvoice = async (medicines) => {
    setLoading(true);
    try {
      const { data } = await request.post(`/invoices/create_invoice`, {
        medicines,
      });
      toast.success(data?.msg);
      dispatch(invoiceActions.clearInvoice());
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { createInvoice, loading };
};

export default useCreateInvoice;
