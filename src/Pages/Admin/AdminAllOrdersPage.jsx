import { AdminAllOrders } from "../../Components/Admin/AdminAllOrders";
import { AdminSideBar } from "../../Components/Admin/AdminSideBar";

export const AmidnAllOrders = () => {
  return (
    <>
      <div className="container d-lg-flex py-2 gap-2" style={{ minHeight: "670px" }}>
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
