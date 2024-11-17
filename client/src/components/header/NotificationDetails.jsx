import moment from "moment";
import useGetNotification from "../../hooks/notification/useGetNotification";
import { useSelector } from "react-redux";

const NotificationDetails = ({ closeOverlay, selectedNotification }) => {
  useGetNotification(selectedNotification);
  const { notification } = useSelector((state) => state.notification);
  return (
    <div className="bg-gray-800 bg-opacity-50 fixed w-screen h-screen inset-0 flex justify-center items-center z-50">
      <div className="bg-white w-1/2 p-5 rounded-lg shadow-xl relative">
        <button
          onClick={closeOverlay}
          className="absolute top-0 right-0 w-7 h-7 m-3 bg-red-500 text-white rounded-full"
        >
          X
        </button>
        <h2 className="text-lg font-semibold">{notification?.type}</h2>
        <p className="mt-3">{notification?.message}</p>
        <p className="mt-2 text-sm text-gray-500">
          Date: {moment(notification?.createdAt).format("YYYY-MM-DD")}
        </p>
      </div>
    </div>
  );
};

export default NotificationDetails;
