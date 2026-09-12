import { AdminAllOrders } from "../../Components/Admin/AdminAllOrders";
import { AdminSideBar } from "../../Components/Admin/AdminSideBar";
import PaginationPage from "../../Components/utils/PaginationPage";

export const AmidnAllOrders = () => {
  return (
    <>
      <div className="container d-lg-flex py-2">
        <div style={{ display: "flex", flex: 1 }}>
          <AdminSideBar />
        </div>
        <div style={{ display: "flex", flex: 3 }}>
          <AdminAllOrders />
        </div>
      </div>
    </>
  );
};
