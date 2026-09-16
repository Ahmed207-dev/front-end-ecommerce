import { AdminAllProudcts } from "../../Components/Admin/AdminAllProudcts";
import { AdminSideBar } from "../../Components/Admin/AdminSideBar";

export const AdminAllProudct = () => {
  return (
    <>
      <div
        className="container d-flex flex-column flex-md-row py-2"
        style={{ minHeight: "670px" }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <AdminSideBar />
        </div>
        <div style={{ display: "flex", flex: 3 }}>
          <AdminAllProudcts />
        </div>
      </div>
    </>
  );
};
