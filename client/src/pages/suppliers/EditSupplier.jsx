import { useState } from "react";
import FormField from "../../components/ui/FormField";
import { suppliers } from "../../utils/dummyDate";
import Button from "../../components/ui/Button";

const EditSupplier = () => {
  const supplier = suppliers[0];
  const [formValues, setFormValues] = useState({
    userName: supplier?.userName,
    email: supplier?.email,
    phoneNumber: supplier?.phoneNumber,
    address: supplier?.address,
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
      <h1 className="page-title">Supplier info</h1>
      <form
        onSubmit={submitHandler}
        className="w-[30%] max-md:w-[80%] mx-auto mt-5"
      >
        <FormField
          label={"supplier"}
          type={"text"}
          name={"userName"}
          placeholder={"supplier name"}
          value={formValues.userName}
          onChange={onChangeHandler}
        />
        <FormField
          label={"email"}
          type={"email"}
          name={"email"}
          placeholder={"supplier email"}
          value={formValues.email}
          onChange={onChangeHandler}
        />
        <FormField
          label={"phone number"}
          type={"number"}
          name={"phoneNumber"}
          placeholder={"supplier phone number"}
          value={formValues.phoneNumber}
          onChange={onChangeHandler}
        />
        <FormField
          label={"address"}
          type={"text"}
          name={"address"}
          placeholder={"supplier address"}
          value={formValues.address}
          onChange={onChangeHandler}
        />
        <Button text={"Edit"} />
      </form>
    </div>
  );
};

export default EditSupplier;
