import { useEffect, useState } from "react";
import { invoiceActions } from "../../redux/slices/invoiceSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useGetAllInvoices = (sort) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllInvoices = async () => {
      setLoading(true);
      try {
        const { data } = await request.get(`/invoices?sort=${sort}`);
        dispatch(invoiceActions.getInvoices(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getAllInvoices();
  }, [sort, dispatch]);
  return { loading };
};

export default useGetAllInvoices;
