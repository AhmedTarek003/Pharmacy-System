import { useState } from "react";
import { medicineActions } from "../../redux/slices/medincineSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useUpdateMedincine = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const updateMedicine = async (id, { price, image }) => {
    const success = checkInputsHandler(price);
    if (!success) return;
    const formData = new FormData();
    formData.append("price", price);
    if (image) {
      formData.append("image", image);
    }
    setLoading(true);
    try {
      const { data } = await request.put(`/medicines/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      dispatch(medicineActions.getMedicine(data?.medicine));
      toast.success(data?.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { updateMedicine, loading };
};

export default useUpdateMedincine;

function checkInputsHandler(price) {
  if (!price) {
    toast.error("fill all fields");
    return false;
  }
  if (price <= 0) {
    toast.error("price must be greater than zero");
    return false;
  }
  return true;
}
