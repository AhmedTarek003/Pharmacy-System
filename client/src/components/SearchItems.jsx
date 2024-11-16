import { useDispatch } from "react-redux";
import { invoiceActions } from "../redux/slices/invoiceSlice";

const SearchItems = ({ medicines }) => {
  const avaMedicines = medicines?.filter(
    (medicine) =>
      medicine.expireDate > new Date().toISOString() && medicine.stock > 0
  );

  const dispath = useDispatch();
  const addItemHandler = (medicine) => {
    dispath(
      invoiceActions.additemsToInvoice({
        ...medicine,
        quantity: 1,
        totalAmount: medicine.price * 1,
      })
    );
  };
  return (
    <div className="absolute bg-white border shadow-md min-w-full overflow-auto h-[300px] rounded-md z-40 top-10">
      {avaMedicines?.map((medicine) => (
        <div
          key={medicine?._id}
          className="flex items-center justify-between border-b px-3 py-2 cursor-pointer hover:bg-gray-100"
          onClick={() => addItemHandler(medicine)}
        >
          <div className="w-20 h-20">
            <img
              src={medicine?.medicineImage?.url}
              alt="medincien image"
              className="h-full w-full object-cover"
            />
          </div>
          <div>{medicine?.medicineName}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchItems;
