import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import PharmacyStock from "./pages/PharmacyStock";
import MedicinesList from "./pages/MedicinesList";
import Purshase from "./pages/Purshase";
import Suppliers from "./pages/Suppliers";
import Reports from "./pages/Reports";
import Invoices from "./pages/Invoices";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to={"/dashboard"} replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="pharmacystock" element={<PharmacyStock />} />
          <Route path="medicineslist" element={<MedicinesList />} />
          <Route path="purshase" element={<Purshase />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
