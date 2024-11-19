import moment from "moment";

const MomentDate = ({ label, date }) => {
  return (
    <div className="text-gray-700">
      <span className="font-medium">{label}:</span>{" "}
      <span className="text-gray-900">{moment(date).format("YYYY-MM-DD")}</span>
    </div>
  );
};

export default MomentDate;
