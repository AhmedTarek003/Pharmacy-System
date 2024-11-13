import { useEffect, useState } from "react";
import { medicineActions } from "../../redux/slices/medincineSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useGetAllMedicines = (search, sort) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllMedicines = async () => {
      try {
        setLoading(true);
        const { data } = await request.get(
          `/medicines?search=${search}&sort=${sort}`
        );
        dispatch(medicineActions.getMedicines(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getAllMedicines();
  }, [search, sort, dispatch]);
  return { loading };
};

export default useGetAllMedicines;
