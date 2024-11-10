import { notifications } from "../../utils/dummyDate";

const Notifications = () => {
  return (
    <div
      className={`absolute bg-white w-full pb-3 rounded-br-md rounded-bl-md h-[300px] overflow-auto md:top-[48px]
      max-md:top-[63px] shadow-lg right-0 transition-all`}
    >
      {notifications?.map((noti, idx) => (
        <div
          key={noti?._id}
          className={`p-2 ${
            notifications?.length - 1 !== idx && "border - b"
          } cursor-pointer hover:bg-slate-50`}
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
  );
};

export default Notifications;
