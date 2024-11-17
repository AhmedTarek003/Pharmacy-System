import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useGetAllNotifications from "../../hooks/notification/useGetAllNotifications";
import { useSelector } from "react-redux";
import NotificationDetails from "./NotificationDetails";

const Notifications = () => {
  useGetAllNotifications();
  const { notifications } = useSelector((state) => state.notification);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const notificationId = queryParams.get("id");
    if (notificationId) {
      setSelectedNotification(notificationId);
    }
  }, [location.search, notifications]);

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
        <NotificationDetails
          closeOverlay={closeOverlay}
          selectedNotification={selectedNotification}
        />
      )}
    </>
  );
};

export default Notifications;
