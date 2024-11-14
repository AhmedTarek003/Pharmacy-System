import { useState } from "react";
import { supplierActions } from "../../redux/slices/supplierSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useDeleteSupplier = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const deleteSupplier = async (id) => {
    setLoading(true);
    try {
      const { data } = await request.delete(`/suppliers/${id}`);
      dispatch(supplierActions.deleteSupplier(data?.supplier));
      toast.success(data?.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { deleteSupplier, loading };
};

export default useDeleteSupplier;
