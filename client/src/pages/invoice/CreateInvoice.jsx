import { useEffect, useState } from "react";
import FormField from "../../components/ui/FormField";
import SearchItems from "../../components/SearchItems";
import Button from "../../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import Quantity from "../../components/Quantity";
import { FaMinus } from "react-icons/fa6";
import { invoiceActions } from "../../redux/slices/invoiceSlice";
import useGetAllMedicines from "../../hooks/medicine/useGetAllMedicines";
import useCreateInvoice from "../../hooks/invoice/useCreateInvoice";
import Loading from "../../components/ui/Loading";

const CreateInvoice = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { invoiceItems } = useSelector((state) => state.invoice);
  const [items, setItems] = useState(invoiceItems);

  useGetAllMedicines(search);
  const { medicines } = useSelector((state) => state.medicine);

  useEffect(() => {
    if (invoiceItems) {
      setItems(invoiceItems);
    }
  }, [invoiceItems]);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = items?.map((item) =>
      item._id === itemId
        ? {
            ...item,
            quantity: newQuantity,
            totalAmount: item.price * newQuantity,
          }
        : item
    );
    setItems(updatedItems);
    localStorage.setItem("invoiceItems", JSON.stringify(updatedItems));
  };

  const totalAmount =
    items?.length > 0 &&
    items
      ?.map((item) => item?.price * item?.quantity)
      .reduce((acc, curr) => acc + curr);

  const { createInvoice, loading } = useCreateInvoice();

  const makeInvoiceHandler = async () => {
    const invoice = items?.map((item) => ({
      medicineId: item?._id,
      quantity: item?.quantity,
    }));
    await createInvoice(invoice);
  };

  return (
    <div>
      <h1 className="page-title">create invoice</h1>
      <div className="w-[80%] mx-auto mt-5 relative">
        <FormField
          type={"text"}
          placeholder={"search..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search.trim() !== "" && <SearchItems medicines={medicines} />}
      </div>
      <button
        className="p-2 bg-sky-400 hover:bg-sky-500 w-fit text-white focus:outline-none my-5 rounded-md
      uppercase text-lg tracking-wider shadow-md ml-5"
        onClick={() => dispatch(invoiceActions.clearInvoice())}
      >
        clear invoice
      </button>
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-6 py-2 text-left text-gray-600 uppercase font-semibold">
                id
              </th>
              <th className="px-6 py-2 text-left text-gray-600 uppercase font-semibold">
                medicine
              </th>
              <th className="px-6 py-2 text-left text-gray-600 uppercase font-semibold">
                Price per Unit
              </th>
              <th className="px-6 py-2 text-left text-gray-600 uppercase font-semibold">
                quantity
              </th>
              <th className="px-6 py-2 text-left text-gray-600 uppercase font-semibold">
                total
              </th>
              <th className="px-6 py-2 text-left text-gray-600 uppercase font-semibold">
                actions
              </th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-gray-800 border-b">
                  {item?._id}
                </td>
                <td className="px-6 py-4 text-gray-800 border-b">
                  {item?.medicineName}
                </td>
                <td className="px-6 py-4 text-gray-800 border-b">
                  ${item?.price}
                </td>
                <td className="px-6 py-4 text-gray-800 border-b">
                  <Quantity
                    item={item}
                    handleQuantityChange={handleQuantityChange}
                  />
                </td>
                <td className="px-6 py-4 text-gray-800 border-b">
                  ${item?.price * item?.quantity}
                </td>
                <td className="px-6 py-4 text-gray-800 border-b">
                  <FaMinus
                    color="red"
                    className="cursor-pointer"
                    onClick={() =>
                      dispatch(invoiceActions.removeItemFromInvoice(item))
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-3 mt-5 ml-5">
        Total Amount : <span className="font-bold">${totalAmount}</span>
      </div>
      <div className="w-fit mx-auto" onClick={makeInvoiceHandler}>
        <Button text={"Submit"} />
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default CreateInvoice;
