import { useSelector } from "react-redux";
import ExpireList from "../components/dashboard/ExpireList";
import RecentOrders from "../components/dashboard/RecentOrders";
import Reports from "../components/dashboard/Reports";
import Suppliers from "../components/dashboard/Suppliers";
import Box from "../components/ui/Box";
import useGetAllMedicines from "../hooks/medicine/useGetAllMedicines";

const Dashboard = () => {
  useGetAllMedicines("");
  const { medicines } = useSelector((state) => state.medicine);
  const expireMedicines = medicines?.filter(
    (medicine) => medicine.expireDate < new Date().toISOString()
  );
  const availableMedicines = medicines?.filter(
    (medicine) =>
      medicine.expireDate > new Date().toISOString() && medicine.stock > 0
  );
  const outStockMedicines = medicines?.filter(
    (medicine) => medicine.stock <= 0
  );
  return (
    <div className="p-5">
      <div className="flex flex-wrap gap-3 justify-center">
        <Box
          title={"Medicines"}
          number={medicines?.length}
          color={"var(--sky-color)"}
          link={"/medicineslist"}
        />
        <Box
          title={"Available Medicines"}
          number={availableMedicines?.length}
          color={"var(--secondery-color)"}
          link={"/medicineslist?medicines=available"}
        />
        <Box
          title={"Expire Medicines"}
          number={expireMedicines?.length}
          color={"red"}
          link={"/medicineslist?medicines=expired"}
        />
        <Box
          title={"Out Of Stock Medicines"}
          number={outStockMedicines?.length}
          color={"var(--background-color)"}
          link={"/medicineslist?medicines=outStock"}
        />
        <Box
          title={"Orders"}
          number={10}
          color={"var(--gray-color)"}
          link={"/purshases"}
        />
        <Box
          title={"Confirmed Orders"}
          number={10}
          color={"var(--sky-color)"}
          link={"/purshases?orders=confirmed"}
        />
        <Box
          title={"Canceled Orders"}
          number={10}
          color={"#ff7a7a"}
          link={"/purshases?orders=canceled"}
        />
        <Box
          title={"Suppliers"}
          number={10}
          color={"var(--gray-color)"}
          link={"/suppliers"}
        />
        <Box title={"Sales"} number={"100$"} color={"var(--sky-color)"} />
      </div>
      <div className="md:flex gap-3 mt-5">
        <ExpireList />
        <RecentOrders />
      </div>
      <div className="md:flex gap-3 mt-5">
        <Suppliers />
        <Reports />
      </div>
    </div>
  );
};

export default Dashboard;
