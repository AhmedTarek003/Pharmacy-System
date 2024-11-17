import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import PharmacyStock from "./pages/PharmacyStock";
import MedicinesList from "./pages/medicines/MedicinesList";
import Purshase from "./pages/purshase/Purshase";
import Suppliers from "./pages/suppliers/Suppliers";
import Reports from "./pages/report/Reports";
import Invoices from "./pages/invoice/Invoices";
import Dashboard from "./pages/Dashboard";
import EditMedicine from "./pages/medicines/EditMedicine";
import AddMedicine from "./pages/medicines/AddMedicine";
import OrderDetails from "./pages/purshase/OrderDetails";
import EditSupplier from "./pages/suppliers/EditSupplier";
import AddSupplier from "./pages/suppliers/AddSupplier";
import SingleInvoice from "./pages/invoice/SingleInvoice";
import CreateInvoice from "./pages/invoice/CreateInvoice";
import MakeOrder from "./pages/purshase/MakeOrder";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import useGetUser from "./hooks/user/useGetUser";
import ReportDetails from "./pages/report/reportDetails";

function App() {
  useGetUser();
  const { user } = useSelector((state) => state.user);

  const lastPath = localStorage.getItem("path")
    ? localStorage.getItem("path")
    : "/";

  return (
    <div>
      <Routes>
        <Route
          path="/login"
          element={user ? <Navigate to={lastPath} /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to={lastPath} /> : <SignUp />}
        />
        <Route path="/" element={!user ? <Navigate to={"/login"} /> : <Home />}>
          <Route index element={<Navigate to={"/dashboard"} replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="pharmacystock" element={<PharmacyStock />} />
          <Route path="medicineslist" element={<MedicinesList />} />
          <Route path="medicineslist/medicine/:id" element={<EditMedicine />} />
          <Route
            path="medicineslist/addnewmedincine"
            element={<AddMedicine />}
          />
          <Route path="purshases" element={<Purshase />} />
          <Route path="purshases/order/:id" element={<OrderDetails />} />
          <Route path="purshases/makeorder" element={<MakeOrder />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="suppliers/addnewsupplier" element={<AddSupplier />} />
          <Route path="suppliers/:id" element={<EditSupplier />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="invoices/create_invoice" element={<CreateInvoice />} />
          <Route path="invoices/:id" element={<SingleInvoice />} />
          <Route path="reports" element={<Reports />} />
          <Route path="reports/:id" element={<ReportDetails />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
