import { useSelector } from "react-redux";
import BestMedicinesChart from "../../components/charts/BestMedicinesChart";
import InvoicesChart from "../../components/charts/InvoicesChart";
import OrdersChart from "../../components/charts/OrdersChart";
import RevenueChart from "../../components/charts/RevenueChart";
import MomentDate from "../../components/ui/MomentDate";
import useGetReport from "../../hooks/report/useGetReport";
import { useParams } from "react-router-dom";
import Loader from "../../components/ui/Loader";

const ReportDetails = () => {
  const { id } = useParams();
  const { report } = useSelector((state) => state.report);
  const { loading } = useGetReport(id);

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-2">
      <h1 className="page-title my-5">{report?.reportType} report</h1>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="space-y-4 bg-white p-4 rounded-lg shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <MomentDate label="Start Week" date={report?.weekStartDate} />
              <MomentDate label="End Week" date={report?.weekEndDate} />
            </div>
            <MomentDate label="Created Date" date={report?.createdAt} />
          </div>
          {report?.reportType === "Best Selling Medicines" && (
            <div className="mt-6">
              <BestMedicinesChart data={report?.bestSellingMedicines} />
            </div>
          )}
          {report?.reportType === "Orders" && (
            <div className="mt-6">
              <OrdersChart data={report?.monthlyOrdersExports} />
            </div>
          )}
          {report?.reportType === "Weekly Revenue" && (
            <div className="mt-6">
              <RevenueChart data={report?.monthlyRevenue} />
              <InvoicesChart data={report?.monthlyCountInvoice} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ReportDetails;
