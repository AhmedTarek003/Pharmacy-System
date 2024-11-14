import { useState } from "react";
import { request } from "../../utils/request";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useAddSupplier = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const addSupplier = async ({ userName, email, phoneNumber, address }) => {
    const success = checkInputsHandler(userName, email, phoneNumber, address);
    if (!success) return;
    setLoading(true);
    try {
      const { data } = await request.post(`/suppliers`, {
        userName,
        email,
        phoneNumber,
        address,
      });
      toast.success(data?.msg);
      navigate("/suppliers");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { addSupplier, loading };
};

export default useAddSupplier;

function checkInputsHandler(userName, email, phoneNumber, address) {
  if (!userName || !email || !phoneNumber || !address) {
    toast.error("fill all fields");
    return false;
  }
  return true;
}
