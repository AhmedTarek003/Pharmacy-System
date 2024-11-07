import FormField from "../../components/ui/FormField";
import { useState } from "react";
import Button from "../../components/ui/Button";
import { MdCameraAlt } from "react-icons/md";

const AddMedicine = () => {
  const [formValues, setFormValues] = useState({
    medicineName: "",
    company: "",
    expireDate: "",
    price: "",
    stock: "",
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
    <div>
      <h1 className="page-title">Add New Medicine</h1>
      <form onSubmit={submitHandler}>
        <div className="flex justify-center max-md:flex-col gap-5 mt-10 p-2">
          <div className="shadow-lg relative w-[380px] h-64 max-md:h-72 max-md:w-[70%] max-md:m-auto">
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
              className="absolute right-1 top-2 bg-[var(--background-color)] hover:bg-[var(--secondery-color)]
              w-[27px] max-md:w-[22px] h-[27px] max-md:h-[22px] max-md:text-[12px]
              rounded-full cursor-pointer flex justify-center items-center text-violet-100 transition-all shadow-xl"
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
          <div className="max-md:w-full">
            <div className="flex max-md:flex-col md:items-center md:gap-5">
              <FormField
                label={"Medicine Name"}
                type={"text"}
                name={"medicineName"}
                placeholder={"enter medincine name"}
                value={formValues.medicineName}
                onChange={onChangeHandler}
              />
              <FormField
                label={"Company"}
                type={"text"}
                name={"company"}
                placeholder={"enter a company"}
                value={formValues.company}
                onChange={onChangeHandler}
              />
            </div>
            <div>
              <FormField
                label={"Expire Date"}
                type={"date"}
                name={"expireDate"}
                placeholder={"enter a expire date"}
                value={formValues.expireDate}
                onChange={onChangeHandler}
              />
            </div>
            <div className="mt-2 flex max-md:flex-col md:items-center md:gap-5">
              <FormField
                label={"Price"}
                type={"number"}
                name={"price"}
                placeholder={"enter medincine price"}
                value={formValues.price}
                onChange={onChangeHandler}
              />
              <FormField
                label={"Stock"}
                type={"number"}
                name={"stock"}
                placeholder={"enter medincine stock"}
                value={formValues.stock}
                onChange={onChangeHandler}
              />
            </div>
          </div>
        </div>
        <Button text={"Add"} />
      </form>
    </div>
  );
};

export default AddMedicine;
