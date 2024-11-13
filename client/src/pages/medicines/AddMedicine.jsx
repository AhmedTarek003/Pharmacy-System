import FormField from "../../components/ui/FormField";
import { useState } from "react";
import Button from "../../components/ui/Button";
import { MdCameraAlt } from "react-icons/md";
import useAddMedicine from "../../hooks/medicine/useAddMedicine";
import Loading from "../../components/ui/Loading";

const AddMedicine = () => {
  const [formValues, setFormValues] = useState({
    medicineName: "",
    company: "",
    expireDate: "",
    price: 0,
    stock: 0,
    image: null,
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const { addMedicine, loading } = useAddMedicine();
  const submitHandler = async (e) => {
    e.preventDefault();
    await addMedicine(formValues);
    // setFormValues({
    //   medicineName: "",
    //   company: "",
    //   expireDate: "",
    //   price: 0,
    //   stock: 0,
    //   image: null,
    // });
  };
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Add new medicine
      </h1>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="shadow-lg rounded-xl w-[380px] h-64 max-md:h-72 max-md:w-[70%] bg-gray-100 relative">
            <img
              src={
                formValues?.image
                  ? URL.createObjectURL(formValues.image)
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
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
              />
              <FormField
                label={"Company"}
                type={"text"}
                name={"company"}
                placeholder={"Enter a company"}
                value={formValues.company}
                onChange={onChangeHandler}
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
              />
              <FormField
                label={"Stock"}
                type={"number"}
                name={"stock"}
                placeholder={"Enter medicine stock"}
                value={formValues.stock}
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Button text={"Add"} />
        </div>
      </form>
      {loading && <Loading />}
    </div>
  );
};

export default AddMedicine;
