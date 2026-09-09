import { AdminAddproudcts } from "../../Components/Admin/AdminAddproudcts";
import { AdminSideBar } from "../../Components/Admin/AdminSideBar";

export const AdminAddproudctsPage = () => {
  return (
    <div
      className="container user-response"
      style={{ display: "flex", minHeight: "670px" }}
    >
      <div style={{ display: "flex", flex: 1 }}>
        <AdminSideBar />
      </div>
      <div style={{ display: "flex", flex: 3 }}>
        <AdminAddproudcts />
      </div>
    </div>
  );
};
