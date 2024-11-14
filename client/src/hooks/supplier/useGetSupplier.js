import { useEffect, useState } from "react";
import { supplierActions } from "../../redux/slices/supplierSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useGetSupplier = (id) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getSupplier = async () => {
      setLoading(true);
      try {
        const { data } = await request.get(`/suppliers/${id}`);
        dispatch(supplierActions.getSupplier(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getSupplier();
  }, [id, dispatch]);
  return { loading };
};

export default useGetSupplier;
