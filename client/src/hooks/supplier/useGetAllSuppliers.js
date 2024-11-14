import { useEffect, useState } from "react";
import { supplierActions } from "../../redux/slices/supplierSlice";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";

const useGetAllSuppliers = (search) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllSuppliers = async () => {
      setLoading(true);
      try {
        const { data } = await request.get(`/suppliers?search=${search}`);
        dispatch(supplierActions.getSuppliers(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getAllSuppliers();
  }, [search, dispatch]);
  return { loading };
};

export default useGetAllSuppliers;
