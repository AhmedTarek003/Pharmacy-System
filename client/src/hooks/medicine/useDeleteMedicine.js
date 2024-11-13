import { useState } from "react";
import { medicineActions } from "../../redux/slices/medincineSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useDeleteMedicine = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const deleteMedicine = async (id) => {
    setLoading(true);
    try {
      const { data } = await request.delete(`/medicines/${id}`);
      dispatch(medicineActions.deleteMedicine(data?.medicine));
      toast.success(data?.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { deleteMedicine, loading };
};

export default useDeleteMedicine;
