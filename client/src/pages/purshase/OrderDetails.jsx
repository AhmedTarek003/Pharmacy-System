import moment from "moment";
import { orders } from "../../utils/dummyDate";

const OrderDetails = () => {
  const order = orders[0];
  return (
    <div>
      <h1 className="page-title">Order info</h1>
      <div className="mt-5 flex max-md:flex-col max-md:items-center">
        <div className="flex flex-wrap max-md:justify-center flex-1">
          {order?.medicines.map((medicine) => (
            <div
              key={medicine?._id}
              className="border w-fit shadow-lg p-2 max-md:p-1 bg-white rounded-md my-1 ml-5"
            >
              <div className="capitalize max-md:text-sm">
                medicine name :{" "}
                <span className="text-blue-500 font-semibold text-sm">
                  {medicine?.medicineName}
                </span>
              </div>
              <div className="capitalize max-md:text-sm">
                company :{" "}
                <span className="text-blue-500 font-semibold text-sm">
                  {medicine?.company}
                </span>
              </div>
              <div className="capitalize max-md:text-sm">
                Price :{" "}
                <span className="text-blue-500 font-semibold text-sm">
                  {medicine?.unitPrice}$
                </span>
              </div>
              <div className="capitalize max-md:text-sm">
                Stock :{" "}
                <span className="text-blue-500 font-semibold text-sm">
                  {medicine?.quantity}
                </span>
              </div>
              <div className="capitalize max-md:text-sm">
                expire date :{" "}
                <span className="text-blue-500 font-semibold text-sm">
                  {moment(medicine?.expireDate).format("YYYY-MM-DD")}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex-1 max-md:mt-5">
          <div className="bg-white shadow-lg rounded-md p-5 w-fit">
            <div className="capitalize my-2">
              Supplier :{" "}
              <span className="text-green-600 font-semibold">
                {order?.supplier?.userName}
              </span>
            </div>
            <div className="capitalize my-2">
              total amount :{" "}
              <span className="text-green-600 font-semibold">
                {order?.totalAmount}$
              </span>
            </div>
            <div className="capitalize my-2">
              status :{" "}
              <span className="text-green-600 font-semibold">
                {order?.status}
              </span>
            </div>
            <div className="capitalize my-2">
              expected date :{" "}
              <span className="text-green-600 font-semibold">
                {moment(order?.expectedDate).format("YYYY-MM-DD")}
              </span>
            </div>
            <div className="capitalize my-2">
              created date :{" "}
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
