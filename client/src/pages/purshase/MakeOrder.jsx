import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { MdRemove } from "react-icons/md";
import Button from "../../components/ui/Button";
import OrderInput from "../../components/ui/OrderInput";

const MakeOrder = () => {
  const [medicines, setMedicines] = useState([
    {
      medicineName: "",
      company: "",
      expireDate: "",
      unitPrice: 0,
      quantity: 0,
    },
  ]);
  const [formValues, setFormValues] = useState({
    supplier: "",
    expectedDate: "",
    totalAmount: 0,
  });
  const onChangeInputHanlder = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const onChangeHandler = (idx, e) => {
    const { name, value } = e.target;
    const updateMedicines = [...medicines];
    updateMedicines[idx][name] = value;
    setMedicines(updateMedicines);
  };
  const addMedicine = () => {
    setMedicines([
      ...medicines,
      {
        medicineName: "",
        company: "",
        expireDate: "",
        unitPrice: 0,
        quantity: 0,
      },
    ]);
  };
  const removeLastMedicine = () => {
    if (medicines.length > 1) {
      setMedicines(medicines.slice(0, -1));
    }
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    console.log(formValues, medicines);
  };
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <h1 className="text-4xl font-semibold text-gray-800 text-center mb-6">
        Make Order
      </h1>
      <form
        onSubmit={submitHanlder}
        className="bg-white shadow-lg rounded-lg p-6 space-y-8 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <OrderInput
            label={"Supplier Name"}
            name={"supplier"}
            type={"text"}
            placeholder={"Enter Supplier Name"}
            value={formValues.supplier}
            onChange={onChangeInputHanlder}
          />
          <OrderInput
            label={"Supplier Email"}
            type={"text"}
            placeholder={"Enter Supplier Email"}
          />
          <OrderInput
            label={"Supplier Phone"}
            type={"text"}
            placeholder={"Enter Supplier Phone"}
          />
          <OrderInput
            label={"Supplier Address"}
            type={"text"}
            placeholder={"Enter Supplier Address"}
          />
        </div>

        <div className="border-t pt-5">
          {medicines.map((medicine, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border-b pb-2"
            >
              <OrderInput
                label={"Medicine Name"}
                type={"text"}
                name={"medicineName"}
                placeholder={"Enter Medicine Name"}
                value={medicine.medicineName}
                onChange={(e) => onChangeHandler(idx, e)}
              />
              <OrderInput
                label={"Company"}
                type={"text"}
                name={"company"}
                placeholder={"Enter Company Name"}
                value={medicine.company}
                onChange={(e) => onChangeHandler(idx, e)}
              />
              <OrderInput
                label={"Expire Date"}
                type={"date"}
                name={"expireDate"}
                value={medicine.expireDate}
                onChange={(e) => onChangeHandler(idx, e)}
              />
              <OrderInput
                label={"Unit Price"}
                type={"number"}
                name={"unitPrice"}
                placeholder={"Enter Unit Price"}
                value={medicine.unitPrice}
                onChange={(e) => onChangeHandler(idx, e)}
              />
              <OrderInput
                label={"Quantity"}
                type={"number"}
                name={"quantity"}
                placeholder={"Enter Quantity"}
                value={medicine.quantity}
                onChange={(e) => onChangeHandler(idx, e)}
              />
            </div>
          ))}

          <div className="flex items-center justify-center gap-4 mt-6">
            <div
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md focus:outline-none cursor-pointer"
              onClick={addMedicine}
            >
              <FaPlus className="inline-block mr-2" /> Add New Medicine
            </div>
            {medicines.length > 1 && (
              <div
                className="bg-red-400 text-white hover:bg-red-500 px-4 py-2 rounded-md focus:outline-none cursor-pointer"
                onClick={removeLastMedicine}
              >
                <MdRemove className="inline-block mr-2" /> Remove Last Medicine
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-5">
          <OrderInput
            label={"Expected Date"}
            type={"date"}
            name={"expectedDate"}
            value={formValues.expectedDate}
            onChange={onChangeInputHanlder}
          />
          <OrderInput
            label={"Total Amount"}
            type={"number"}
            name={"totalAmount"}
            placeholder={"Enter Total Amount"}
            value={formValues.totalAmount}
            onChange={onChangeInputHanlder}
          />
        </div>

        <div className="mt-6 flex justify-center">
          <Button text={"Make Order"} />
        </div>
      </form>
    </div>
  );
};

export default MakeOrder;
