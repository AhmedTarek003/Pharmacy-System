import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { request } from "../../utils/request";
import toast from "react-hot-toast";
import { reportActions } from "../../redux/slices/reportSlice";
import moment from "moment";
const useGetAllReports = (type, { startDate, endDate }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const sDate =
    startDate && startDate.trim() !== "" ? moment(startDate).toISOString() : "";
  const eDate =
    startDate && endDate.trim() !== "" ? moment(endDate).toISOString() : "";

  useEffect(() => {
    const getAllReports = async () => {
      setLoading(true);
      try {
        const { data } = await request.get(
          `/reports?type=${type}&startDate=${sDate}&endDate=${eDate}`
        );
        dispatch(reportActions.getReports(data));
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.msg);
      } finally {
        setLoading(false);
      }
    };
    getAllReports();
  }, [dispatch, eDate, sDate, type]);
  return { loading };
};

export default useGetAllReports;
