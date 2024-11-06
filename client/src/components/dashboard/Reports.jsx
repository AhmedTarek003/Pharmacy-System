import moment from "moment";
import { reports } from "../../utils/dummyDate";

const Reports = () => {
  return (
    <div className="bg-white flex-[7] max-h-60 overflow-auto rounded-md p-2 shadow-lg">
      <h1 className="text-[27px] font-bold border-b-2 pb-1 w-fit mx-auto text-gray-700 text-center">
        Recent Reports
      </h1>
      <div className="overflow-x-auto mt-2">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">ID</th>
              <th className="px-4 py-2 border-b">Report</th>
              <th className="px-4 py-2 border-b">Start Week</th>
              <th className="px-4 py-2 border-b">End Week</th>
              <th className="px-4 py-2 border-b">createdAt</th>
            </tr>
          </thead>
          <tbody>
            {reports.slice(0, 5)?.map((report, idx) => (
              <tr className="text-center" key={report?._id}>
                <td className="px-4 py-2 border-b">{idx + 1}</td>
                <td className="px-4 py-2 border-b">{report?.reportType}</td>
                <td className="px-4 py-2 border-b">
                  {moment(report?.weekStartDate).format("YYYY-MM-DD")}
                </td>
                <td className="px-4 py-2 border-b">
                  {moment(report?.weekEndDate).format("YYYY-MM-DD")}
                </td>
                {moment(report?.createdAt).format("YYYY-MM-DD")}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
