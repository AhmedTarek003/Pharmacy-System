import { useState } from "react";
import { supplierActions } from "../../redux/slices/supplierSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useUpdateSupplier = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const updateSupplier = async (
    id,
    { userName, email, phoneNumber, address }
  ) => {
    const success = checkInputsHandler(userName, email, phoneNumber, address);
    if (!success) return;
    setLoading(true);
    try {
      const { data } = await request.put(`/suppliers/${id}`, {
        userName,
        email,
        phoneNumber,
        address,
      });
      dispatch(supplierActions.getSupplier(data?.supplier));
      toast.success(data?.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { updateSupplier, loading };
};

export default useUpdateSupplier;

function checkInputsHandler(userName, email, phoneNumber, address) {
  if (!userName || !email || !phoneNumber || !address) {
    toast.error("fill all fields");
    return false;
  }
  return true;
}
