import { useState } from "react";
import { request } from "../../utils/request";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useMakeOrder = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const makeOrder = async (
    { supplier, expectedDate, totalAmount },
    medicines
  ) => {
    const success = checkInputsHandler(
      supplier,
      medicines,
      expectedDate,
      totalAmount
    );
    if (!success) return;
    setLoading(true);
    try {
      const { data } = await request.post(`/orders/create_order`, {
        supplier,
        medicines,
        expectedDate,
        totalAmount,
      });
      toast.success(data?.msg);
      navigate("/purshases");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { makeOrder, loading };
};

export default useMakeOrder;

function checkInputsHandler(supplier, medicines, expectedDate, totalAmount) {
  if (!supplier || !expectedDate || !totalAmount) {
    toast.error("fill all fields");
    return false;
  }
  if (!medicines?.length) {
    toast.error("you must add one medicine at least");
    return false;
  }
  return true;
}
