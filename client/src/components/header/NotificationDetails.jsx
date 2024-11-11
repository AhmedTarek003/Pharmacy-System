import { useLocation } from "react-router-dom";
import { notifications } from "../../utils/dummyDate";

const NotificationDetails = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const notificationId = queryParams.get("id");

  const notification = notifications.find(
    (noti) => noti._id === notificationId
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Notification Details</h2>
      {notification ? (
        <div>
          <p>
            <strong>Type: </strong>
            {notification?.type}
          </p>
          <p>
            <strong>Message: </strong>
            {notification?.message}
          </p>
        </div>
      ) : (
        <p>Notification not found!</p>
      )}
    </div>
  );
};

export default NotificationDetails;
