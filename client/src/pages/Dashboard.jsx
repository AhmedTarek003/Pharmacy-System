import ExpireList from "../components/dashboard/ExpireList";
import RecentOrders from "../components/dashboard/RecentOrders";
import Reports from "../components/dashboard/Reports";
import Suppliers from "../components/dashboard/Suppliers";
import Box from "../components/ui/Box";

const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="flex flex-wrap gap-3 justify-center">
        <Box
          title={"Medicines"}
          number={20}
          color={"var(--sky-color)"}
          link={"/medicineslist"}
        />
        <Box
          title={"Available Medicines"}
          number={18}
          color={"var(--secondery-color)"}
          link={"/medicineslist"}
        />
        <Box
          title={"Expire Medicines"}
          number={2}
          color={"red"}
          link={"/medicineslist"}
        />
        <Box
          title={"Out Of Stock Medicines"}
          number={0}
          color={"var(--background-color)"}
          link={"/medicineslist"}
        />
        <Box
          title={"Orders"}
          number={10}
          color={"var(--gray-color)"}
          link={"/purshase"}
        />
        <Box
          title={"Confirmed Orders"}
          number={10}
          color={"var(--sky-color)"}
          link={"/purshase"}
        />
        <Box
          title={"Canceled Orders"}
          number={10}
          color={"#ff7a7a"}
          link={"/purshase"}
        />
        <Box
          title={"Suppliers"}
          number={10}
          color={"var(--gray-color)"}
          link={"/suppliers"}
        />
        <Box title={"Sales"} number={"100$"} color={"var(--sky-color)"} />
      </div>
      <div className="flex gap-3 mt-5">
        <ExpireList />
        <RecentOrders />
      </div>
      <div className="flex gap-3 mt-5">
        <Suppliers />
        <Reports />
      </div>
    </div>
  );
};

export default Dashboard;
