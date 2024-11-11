import moment from "moment";
import { medicines } from "../../utils/dummyDate";
import FormField from "../../components/ui/FormField";
import { useState } from "react";
import Button from "../../components/ui/Button";
import { MdCameraAlt } from "react-icons/md";

const EditMedicine = () => {
  const medicine = medicines[0];
  const [formValues, setFormValues] = useState({
    medicineName: medicine?.medicineName,
    company: medicine?.company,
    expireDate: moment(medicine?.expireDate).format("YYYY-MM-DD"),
    price: medicine?.price,
    stock: medicine?.stock,
    image: null,
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Medicine Info
      </h1>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="shadow-lg rounded-xl w-[380px] h-64 max-md:h-72 max-md:w-[70%] bg-gray-100 relative">
            <img
              src={
                formValues?.image
                  ? URL.createObjectURL(formValues.image)
                  : medicine?.medicineImage?.url
              }
              alt="medicine image"
              className="rounded-md w-full h-full object-cover"
            />
            <label
              htmlFor="edit-medicine-image"
              className="absolute right-2 top-2 bg-white hover:bg-gray-200
              w-8 h-8 rounded-full cursor-pointer flex justify-center items-center text-indigo-600 shadow-xl transition-all"
            >
              <MdCameraAlt />
            </label>
            <input
              type="file"
              id="edit-medicine-image"
              multiple={false}
              hidden
              onChange={(e) =>
                setFormValues({ ...formValues, image: e.target.files[0] })
              }
            />
          </div>
          <div className="w-full max-md:w-[90%]">
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
              <FormField
                label={"Medicine Name"}
                type={"text"}
                name={"medicineName"}
                placeholder={"Enter medicine name"}
                value={formValues.medicineName}
                onChange={onChangeHandler}
                className="bg-indigo-50 border border-indigo-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              />
              <FormField
                label={"Company"}
                type={"text"}
                name={"company"}
                placeholder={"Enter a company"}
                value={formValues.company}
                onChange={onChangeHandler}
                className="bg-indigo-50 border border-indigo-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              />
            </div>
            <div>
              <FormField
                label={"Expire Date"}
                type={"date"}
                name={"expireDate"}
                placeholder={"Enter an expire date"}
                value={formValues.expireDate}
                onChange={onChangeHandler}
                className="bg-indigo-50 border border-indigo-300 rounded-md p-3 mt-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              />
            </div>
            <div className="mt-4 flex flex-col md:flex-row md:items-center md:gap-6">
              <FormField
                label={"Price"}
                type={"number"}
                name={"price"}
                placeholder={"Enter medicine price"}
                value={formValues.price}
                onChange={onChangeHandler}
                className="bg-indigo-50 border border-indigo-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              />
              <FormField
                label={"Stock"}
                type={"number"}
                name={"stock"}
                placeholder={"Enter medicine stock"}
                value={formValues.stock}
                onChange={onChangeHandler}
                className="bg-indigo-50 border border-indigo-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            text={"Edit"}
            className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-2 rounded-md shadow-md transition-all"
          />
        </div>
      </form>
    </div>
  );
};

export default EditMedicine;
