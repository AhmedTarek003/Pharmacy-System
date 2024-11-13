import { useState } from "react";
import { request } from "../../utils/request";
import toast from "react-hot-toast";
import moment from "moment";

const useAddMedicine = () => {
  const [loading, setLoading] = useState(false);

  const addMedicine = async ({
    medicineName,
    company,
    expireDate,
    price,
    stock,
    image,
  }) => {
    const success = checkInputsHandler(
      medicineName,
      company,
      expireDate,
      price,
      stock,
      image
    );
    if (!success) return;
    const formData = new FormData();
    formData.append("medicineName", medicineName);
    formData.append("company", company);
    formData.append("expireDate", moment(expireDate).toISOString());
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("image", image);
    setLoading(true);
    try {
      const { data } = await request.post(`/medicines`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(data?.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    } finally {
      setLoading(false);
    }
  };
  return { addMedicine, loading };
};

export default useAddMedicine;

function checkInputsHandler(
  medicineName,
  company,
  expireDate,
  price,
  stock,
  image
) {
  if (!price || !stock || !medicineName || !expireDate || !company || !image) {
    toast.error("fill all fields");
    return false;
  }
  if (price <= 0) {
    toast.error("price must be greater than zero");
    return false;
  }
  if (stock <= 0) {
    toast.error("stock must be greater than zero");
    return false;
  }
  return true;
}
