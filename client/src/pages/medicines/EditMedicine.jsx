import moment from "moment";
import FormField from "../../components/ui/FormField";
import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { MdCameraAlt } from "react-icons/md";
import useGetMedincine from "../../hooks/medicine/useGetMedincine";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/ui/Loader";
import useUpdateMedincine from "../../hooks/medicine/useUpdateMedincine";
import Loading from "../../components/ui/Loading";

const EditMedicine = () => {
  const { id } = useParams();
  const { loading } = useGetMedincine(id);
  const { medicine } = useSelector((state) => state.medicine);
  const [formValues, setFormValues] = useState({
    medicineName: !medicine ? "" : medicine?.medicineName,
    company: !medicine ? "" : medicine?.company,
    expireDate: !medicine
      ? ""
      : moment(medicine?.expireDate).format("YYYY-MM-DD"),
    price: !medicine ? 0 : medicine?.price,
    stock: !medicine ? 0 : medicine?.stock,
    image: null,
  });
  useEffect(() => {
    if (medicine) {
      setFormValues({
        medicineName: medicine?.medicineName,
        company: medicine?.company,
        expireDate: moment(medicine?.expireDate).format("YYYY-MM-DD"),
        price: medicine?.price,
        stock: medicine?.stock,
      });
    }
  }, [medicine]);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const { loading: editLoading, updateMedicine } = useUpdateMedincine();
  const submitHandler = async (e) => {
    e.preventDefault();
    await updateMedicine(id, formValues);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Medicine Info
      </h1>
      {loading ? (
        <Loader />
      ) : (
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
                  readOnly={true}
                />
                <FormField
                  label={"Company"}
                  type={"text"}
                  name={"company"}
                  placeholder={"Enter a company"}
                  value={formValues.company}
                  onChange={onChangeHandler}
                  readOnly={true}
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
                  readOnly={true}
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
                  readOnly={true}
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button text={"Edit"} />
          </div>
        </form>
      )}
      {editLoading && <Loading />}
    </div>
  );
};

export default EditMedicine;
