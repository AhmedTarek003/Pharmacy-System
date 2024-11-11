import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { notifications } from "../../utils/dummyDate";
import moment from "moment";

const Notifications = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const notificationId = queryParams.get("id");
    if (notificationId) {
      const notification = notifications.find(
        (noti) => noti._id === notificationId
      );
      setSelectedNotification(notification);
    }
  }, [location.search]);

  const handleNotificationClick = (id) => {
    navigate(`?id=${id}`, { replace: true });
  };

  const closeOverlay = () => {
    setSelectedNotification(null);
    navigate("/");
  };

  return (
    <>
      <div
        className={`absolute z-50 bg-white w-full pb-3 rounded-br-md rounded-bl-md h-[300px] overflow-auto md:top-[48px]
        max-md:top-[63px] shadow-lg right-0 transition-all`}
      >
        {notifications?.map((noti, idx) => (
          <div
            key={noti?._id}
            className={`p-2 ${
              notifications?.length - 1 !== idx && "border-b"
            } cursor-pointer hover:bg-slate-50`}
            onClick={() => handleNotificationClick(noti?._id)}
          >
            <div>
              <div className="flex justify-between items-center">
                <h2 className="font-semibold uppercase">{noti?.type}</h2>
                {!noti?.read && (
                  <span className="block w-2 h-2 rounded-full bg-red-500"></span>
                )}
              </div>
              <p className="text-gray-500 font-light line-clamp-1">
                {noti?.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedNotification && (
        <div className="bg-gray-800 bg-opacity-50 fixed w-screen h-screen inset-0 flex justify-center items-center z-10">
          <div className="bg-white w-1/2 p-5 rounded-lg shadow-xl relative">
            <button
              onClick={closeOverlay}
              className="absolute top-0 right-0 w-7 h-7 m-3 bg-red-500 text-white rounded-full"
            >
              X
            </button>
            <h2 className="text-lg font-semibold">
              {selectedNotification?.type}
            </h2>
            <p className="mt-3">{selectedNotification?.message}</p>
            <p className="mt-2 text-sm text-gray-500">
              Date:{" "}
              {moment(selectedNotification?.createdAt).format("YYYY-MM-DD")}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Notifications;
