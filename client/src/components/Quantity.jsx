import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Quantity = ({ item, handleQuantityChange }) => {
  const [quantity, setQuantity] = useState(item?.quantity);
  const quantityHandle = (type) => {
    if (type === "INC" && quantity < item?.stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      handleQuantityChange(item?._id, newQuantity);
    } else if (type === "DEC" && quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      handleQuantityChange(item?._id, newQuantity);
    }
  };
  return (
    <div className="flex items-center select-none">
      <div
        className="border w-7 h-7 flex justify-center items-center cursor-pointer"
        onClick={() => quantityHandle("DEC")}
      >
        <FaMinus />
      </div>
      <div className="border w-8 h-7 flex justify-center items-center cursor-not-allowed">
        {item?.quantity}
      </div>
      <div
        className="border w-7 h-7 flex justify-center items-center cursor-pointer"
        onClick={() => quantityHandle("INC")}
      >
        <FaPlus />
      </div>
    </div>
  );
};

export default Quantity;
