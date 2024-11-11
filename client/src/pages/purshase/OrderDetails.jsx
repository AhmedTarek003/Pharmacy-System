import moment from "moment";
import { orders } from "../../utils/dummyDate";

const OrderDetails = () => {
  const order = orders[0];
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-10">
        Order Info
      </h1>
      <div className="flex max-md:flex-col max-md:items-center gap-8">
        <div className="flex flex-wrap justify-start max-md:justify-center flex-1 gap-5">
          {order?.medicines.map((medicine) => (
            <div
              key={medicine?._id}
              className="border w-fit shadow-lg p-4 bg-white rounded-lg my-2 max-md:w-[90%] max-md:p-2"
            >
              <div className="capitalize text-gray-700 max-md:text-sm">
                Medicine Name:{" "}
                <span className="text-indigo-600 font-semibold text-sm">
                  {medicine?.medicineName}
                </span>
              </div>
              <div className="capitalize text-gray-700 max-md:text-sm">
                Company:{" "}
                <span className="text-indigo-600 font-semibold text-sm">
                  {medicine?.company}
                </span>
              </div>
              <div className="capitalize text-gray-700 max-md:text-sm">
                Price:{" "}
                <span className="text-indigo-600 font-semibold text-sm">
                  {medicine?.unitPrice}$
                </span>
              </div>
              <div className="capitalize text-gray-700 max-md:text-sm">
                Stock:{" "}
                <span className="text-indigo-600 font-semibold text-sm">
                  {medicine?.quantity}
                </span>
              </div>
              <div className="capitalize text-gray-700 max-md:text-sm">
                Expire Date:{" "}
                <span className="text-indigo-600 font-semibold text-sm">
                  {moment(medicine?.expireDate).format("YYYY-MM-DD")}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 max-md:mt-5 max-md:w-[90%]">
          <div className="bg-white shadow-lg rounded-lg p-6 w-full">
            <div className="capitalize text-gray-700 my-2">
              Supplier:{" "}
              <span className="text-green-600 font-semibold">
                {order?.supplier?.userName}
              </span>
            </div>
            <div className="capitalize text-gray-700 my-2">
              Total Amount:{" "}
              <span className="text-green-600 font-semibold">
                {order?.totalAmount}$
              </span>
            </div>
            <div className="capitalize text-gray-700 my-2">
              Status:{" "}
              <span className="text-green-600 font-semibold">
                {order?.status}
              </span>
            </div>
            <div className="capitalize text-gray-700 my-2">
              Expected Date:{" "}
              <span className="text-green-600 font-semibold">
                {moment(order?.expectedDate).format("YYYY-MM-DD")}
              </span>
            </div>
            <div className="capitalize text-gray-700 my-2">
              Created Date:{" "}
              <span className="text-green-600 font-semibold">
                {moment(order?.createdAt).format("YYYY-MM-DD")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
