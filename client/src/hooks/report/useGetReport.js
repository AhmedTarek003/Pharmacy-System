import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";
import { reportActions } from "../../redux/slices/reportSlice";

const useGetReport = (id) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getReport = async () => {
      setLoading(true);
      try {
        const { data } = await request.get(`/reports/${id}`);
        dispatch(reportActions.getReport(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getReport();
  }, [dispatch, id]);
  return { loading };
};

export default useGetReport;
