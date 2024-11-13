import { useEffect, useState } from "react";
import { medicineActions } from "../../redux/slices/medincineSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useGetMedincine = (id) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getMedicine = async () => {
      try {
        setLoading(true);
        const { data } = await request.get(`/medicines/${id}`);
        dispatch(medicineActions.getMedicine(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getMedicine();
  }, [id, dispatch]);
  return { loading };
};

export default useGetMedincine;
